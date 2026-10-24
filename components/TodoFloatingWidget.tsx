'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import {
  Check,
  Plus,
  X,
  Clock,
  Minus,
  ExternalLink,
  ListTodo,
  Trash2,
  CalendarCheck,
} from 'lucide-react';
import {
  LifeData,
  LifeTask,
  defaultLifeData,
  getSavedLifeData,
  saveLifeData,
  subscribeLifeData,
  formatTaskTime,
  getTodayKey,
  getTomorrowKey,
} from '@/lib/lifeService';

export default function TodoFloatingWidget() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const lifeData = useSyncExternalStore(
    subscribeLifeData,
    getSavedLifeData,
    () => defaultLifeData,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(getTodayKey());

  // Input states for adding new task
  const [newText, setNewText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const [showTimeSection, setShowTimeSection] = useState(false);

  // Editing time for an existing task
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');
  const [editTimeRange, setEditTimeRange] = useState('');

  const widgetRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const today = getTodayKey();
  const tomorrow = getTomorrowKey();

  useEffect(() => {
    const handleActive = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail !== 'todo') {
        setIsOpen(false);
      }
    };
    window.addEventListener('wordnest-active-bubble', handleActive);
    return () =>
      window.removeEventListener('wordnest-active-bubble', handleActive);
  }, []);

  // Close widget when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      window.dispatchEvent(
        new CustomEvent('wordnest-active-bubble', { detail: 'todo' }),
      );
    }
  };

  if (!mounted) return null;

  const todayTasks = lifeData.dailyTasks[today] ?? [];
  const activeDateTasks = lifeData.dailyTasks[selectedDate] ?? [];

  const todayPendingCount = todayTasks.filter((t) => !t.done && t.text.trim()).length;
  const todayTotalCount = todayTasks.filter((t) => t.text.trim()).length;

  const activeTotalCount = activeDateTasks.filter((t) => t.text.trim()).length;
  const activeDoneCount = activeDateTasks.filter((t) => t.done && t.text.trim()).length;
  const activePercent =
    activeTotalCount > 0 ? Math.round((activeDoneCount / activeTotalCount) * 100) : 0;

  const handleUpdateTasks = (date: string, nextTasks: LifeTask[]) => {
    const updated: LifeData = {
      ...lifeData,
      dailyTasks: {
        ...lifeData.dailyTasks,
        [date]: nextTasks,
      },
    };
    saveLifeData(updated);
  };

  const handleToggleTask = (task: LifeTask) => {
    const next = activeDateTasks.map((t) =>
      t.id === task.id ? { ...t, done: !t.done } : t,
    );
    handleUpdateTasks(selectedDate, next);
  };

  const handleDeleteTask = (taskId: string) => {
    const next = activeDateTasks.filter((t) => t.id !== taskId);
    handleUpdateTasks(selectedDate, next);
  };

  const handleAddTask = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    const text = newText.trim();
    if (!text) return;

    let formattedRange = timeRange.trim();
    if (!formattedRange && startTime && endTime) {
      formattedRange = `${startTime} - ${endTime}`;
    } else if (!formattedRange && startTime) {
      formattedRange = `từ ${startTime}`;
    }

    const newTask: LifeTask = {
      id: String(Date.now()),
      text,
      done: false,
      startTime: startTime || undefined,
      endTime: endTime || undefined,
      timeRange: formattedRange || undefined,
    };

    handleUpdateTasks(selectedDate, [...activeDateTasks, newTask]);
    setNewText('');
    setStartTime('');
    setEndTime('');
    setTimeRange('');
    setShowTimeSection(false);
    inputRef.current?.focus();
  };

  const handleStartEditTime = (task: LifeTask) => {
    setEditingTaskId(task.id);
    setEditStartTime(task.startTime ?? '');
    setEditEndTime(task.endTime ?? '');
    setEditTimeRange(task.timeRange ?? '');
  };

  const handleSaveEditTime = (taskId: string) => {
    let formattedRange = editTimeRange.trim();
    if (!formattedRange && editStartTime && editEndTime) {
      formattedRange = `${editStartTime} - ${editEndTime}`;
    } else if (!formattedRange && editStartTime) {
      formattedRange = `từ ${editStartTime}`;
    }

    const next = activeDateTasks.map((t) => {
      if (t.id === taskId) {
        return {
          ...t,
          startTime: editStartTime || undefined,
          endTime: editEndTime || undefined,
          timeRange: formattedRange || undefined,
        };
      }
      return t;
    });

    handleUpdateTasks(selectedDate, next);
    setEditingTaskId(null);
  };

  const handleClearTaskTime = (taskId: string) => {
    const next = activeDateTasks.map((t) => {
      if (t.id === taskId) {
        return {
          ...t,
          startTime: undefined,
          endTime: undefined,
          timeRange: undefined,
        };
      }
      return t;
    });
    handleUpdateTasks(selectedDate, next);
    setEditingTaskId(null);
  };

  const applyPresetTime = (presetStart: string, presetEnd: string, label: string) => {
    setStartTime(presetStart);
    setEndTime(presetEnd);
    setTimeRange(label);
  };

  const applyEditPresetTime = (presetStart: string, presetEnd: string, label: string) => {
    setEditStartTime(presetStart);
    setEditEndTime(presetEnd);
    setEditTimeRange(label);
  };

  const handleOpenLifePage = () => {
    if (window.location.pathname === '/') {
      window.location.hash = 'life';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.href = '/#life';
    }
  };

  return (
    <div
      ref={widgetRef}
      className="fixed z-[9999] bottom-5 right-5 sm:bottom-6 sm:right-6 flex flex-col items-end pointer-events-none select-none font-sans"
    >
      {/* 1. EXPANDED MESSENGER-LIKE TO-DO WINDOW */}
      {isOpen && (
        <section
          aria-label="Cửa sổ việc cần làm"
          className="pointer-events-auto mb-3 w-[calc(100vw-32px)] sm:w-[410px] max-h-[80vh] flex flex-col bg-[#fffdf8] border-2 border-[#213a34] rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: '6px 6px 0px #213a34' }}
        >
          {/* Header */}
          <div className="bg-[#213a34] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#213a34]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#f8d467] text-[#213a34] flex items-center justify-center font-bold shadow-sm">
                <CalendarCheck size={18} />
              </div>
              <div>
                <h3 className="font-extrabold text-[15px] leading-tight text-white flex items-center gap-1.5">
                  Việc cần làm
                  <span className="text-[10px] uppercase tracking-wider font-black bg-[#f8d467] text-[#213a34] px-1.5 py-0.5 rounded-md">
                    {selectedDate === today ? 'Hôm nay' : 'Ngày mai'}
                  </span>
                </h3>
                <p className="text-[11px] text-[#e7e0d3] font-semibold mt-0.5">
                  {activeTotalCount === 0
                    ? 'Chưa có việc nào'
                    : activeDoneCount === activeTotalCount
                      ? '🎉 Đã hoàn thành tất cả!'
                      : `Còn ${activeTotalCount - activeDoneCount} việc chưa làm`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleOpenLifePage}
                title="Mở toàn màn hình trong Đời sống"
                className="p-1.5 text-[#e7e0d3] hover:text-[#f8d467] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <ExternalLink size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Thu nhỏ bong bóng"
                className="p-1.5 text-[#e7e0d3] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Date Selector Tabs */}
          <div className="bg-[#f5f0e6] px-3 py-2 border-b border-[#213a34]/15 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-1">
              <button
                type="button"
                onClick={() => setSelectedDate(today)}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedDate === today
                    ? 'bg-[#213a34] text-[#f8d467] shadow-sm'
                    : 'bg-white/70 text-[#213a34] hover:bg-white'
                }`}
              >
                <span>Hôm nay</span>
                <span className="text-[10px] opacity-80">
                  {new Intl.DateTimeFormat('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                  }).format(new Date(`${today}T12:00:00`))}
                </span>
                {todayTasks.length > 0 && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] ${
                      selectedDate === today
                        ? 'bg-[#f8d467] text-[#213a34]'
                        : 'bg-[#213a34]/10 text-[#213a34]'
                    }`}
                  >
                    {todayTasks.filter((t) => t.done).length}/{todayTasks.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedDate(tomorrow)}
                className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedDate === tomorrow
                    ? 'bg-[#213a34] text-[#f8d467] shadow-sm'
                    : 'bg-white/70 text-[#213a34] hover:bg-white'
                }`}
              >
                <span>Ngày mai</span>
                <span className="text-[10px] opacity-80">
                  {new Intl.DateTimeFormat('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                  }).format(new Date(`${tomorrow}T12:00:00`))}
                </span>
                {(lifeData.dailyTasks[tomorrow] ?? []).length > 0 && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] ${
                      selectedDate === tomorrow
                        ? 'bg-[#f8d467] text-[#213a34]'
                        : 'bg-[#213a34]/10 text-[#213a34]'
                    }`}
                  >
                    {(lifeData.dailyTasks[tomorrow] ?? []).length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Progress bar if tasks exist */}
          {activeTotalCount > 0 && (
            <div className="bg-[#edf5f1] px-4 py-2 border-b border-[#213a34]/10 flex items-center gap-3">
              <div className="flex-1 bg-white rounded-full h-2 border border-[#213a34]/20 overflow-hidden">
                <div
                  className="bg-[#49a078] h-full transition-all duration-300"
                  style={{ width: `${activePercent}%` }}
                />
              </div>
              <span className="text-[11px] font-black text-[#213a34]">
                {activeDoneCount}/{activeTotalCount} ({activePercent}%)
              </span>
            </div>
          )}

          {/* Tasks List */}
          <div className="p-3 overflow-y-auto flex-1 space-y-2 max-h-[340px]">
            {activeDateTasks.length === 0 ? (
              <div className="text-center py-8 px-4 bg-[#f9f7f2] rounded-xl border border-dashed border-[#213a34]/20">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#f8d467]/30 flex items-center justify-center text-[#213a34] mb-2">
                  <ListTodo size={20} />
                </div>
                <p className="text-sm font-black text-[#213a34]">
                  Chưa có việc nào cần làm
                </p>
                <p className="text-xs text-[#71817b] mt-1 font-semibold">
                  Thêm công việc và đặt giờ làm (ví dụ: 22h-23h) ở ô bên dưới nhé!
                </p>
              </div>
            ) : (
              activeDateTasks.map((task) => {
                const isEditingThisTime = editingTaskId === task.id;
                const formattedTime = formatTaskTime(task);

                return (
                  <div
                    key={task.id}
                    className={`group border rounded-xl p-2.5 transition-all ${
                      task.done
                        ? 'bg-[#edf5f1]/60 border-[#49a078]/40 text-[#71817b]'
                        : 'bg-white border-[#213a34]/15 hover:border-[#213a34]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {/* Checkbox button */}
                      <button
                        type="button"
                        onClick={() => handleToggleTask(task)}
                        className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                          task.done
                            ? 'bg-[#49a078] border-[#49a078] text-white'
                            : 'border-[#213a34]/30 hover:border-[#213a34] bg-white text-transparent'
                        }`}
                      >
                        <Check
                          size={13}
                          strokeWidth={3}
                          className={task.done ? 'opacity-100' : 'opacity-0'}
                        />
                      </button>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            type="button"
                            onClick={() => handleToggleTask(task)}
                            className={`text-left text-sm font-extrabold cursor-pointer break-words leading-tight bg-transparent border-0 p-0 ${
                              task.done
                                ? 'line-through text-[#71817b]'
                                : 'text-[#213a34]'
                            }`}
                          >
                            {task.text || '(Chưa đặt tên)'}
                          </button>

                          {/* Time badge */}
                          {formattedTime ? (
                            <button
                              type="button"
                              onClick={() => handleStartEditTime(task)}
                              title="Bấm để đổi giờ làm"
                              className={`inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                                task.done
                                  ? 'bg-gray-100 text-gray-500 border-gray-200'
                                  : 'bg-[#fff5e5] text-[#9a4f00] border-[#f8d467] hover:bg-[#ffeec7]'
                              }`}
                            >
                              <Clock size={11} />
                              <span>{formattedTime}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleStartEditTime(task)}
                              className="text-[10px] font-bold text-[#71817b] hover:text-[#213a34] inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-dashed border-[#213a34]/20 hover:border-[#213a34]/50 cursor-pointer"
                            >
                              <Clock size={10} /> + Giờ
                            </button>
                          )}
                        </div>

                        {/* Inline Time Editor for this task */}
                        {isEditingThisTime && (
                          <div className="mt-2.5 p-2.5 bg-[#fefcf6] border border-[#f8d467] rounded-xl text-xs space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-[#213a34] flex items-center gap-1">
                                <Clock size={12} className="text-[#9a4f00]" /> Giờ
                                làm việc:
                              </span>
                              <button
                                type="button"
                                onClick={() => setEditingTaskId(null)}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                <X size={14} />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <label className="text-[10px] font-bold text-gray-500 block">
                                <span className="block mb-0.5">Bắt đầu:</span>
                                <input
                                  type="time"
                                  value={editStartTime}
                                  onChange={(e) => setEditStartTime(e.target.value)}
                                  className="w-full bg-white border border-[#213a34]/20 rounded-lg px-2 py-1 font-bold text-xs"
                                />
                              </label>
                              <label className="text-[10px] font-bold text-gray-500 block">
                                <span className="block mb-0.5">Kết thúc:</span>
                                <input
                                  type="time"
                                  value={editEndTime}
                                  onChange={(e) => setEditEndTime(e.target.value)}
                                  className="w-full bg-white border border-[#213a34]/20 rounded-lg px-2 py-1 font-bold text-xs"
                                />
                              </label>
                            </div>

                            {/* Quick Presets */}
                            <div className="flex items-center gap-1 flex-wrap pt-1">
                              <span className="text-[10px] font-bold text-gray-500">
                                Mẫu:
                              </span>
                              {[
                                { s: '22:00', e: '23:00', label: '22h-23h' },
                                { s: '20:00', e: '22:00', label: '20h-22h' },
                                { s: '14:00', e: '17:00', label: '14h-17h' },
                                { s: '08:00', e: '11:30', label: '8h-11h30' },
                              ].map((item) => (
                                <button
                                  type="button"
                                  key={item.label}
                                  onClick={() =>
                                    applyEditPresetTime(item.s, item.e, item.label)
                                  }
                                  className="text-[10px] font-black bg-white hover:bg-[#f8d467]/30 border border-[#213a34]/15 px-1.5 py-0.5 rounded cursor-pointer"
                                >
                                  {item.label}
                                </button>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-1">
                              <button
                                type="button"
                                onClick={() => handleClearTaskTime(task.id)}
                                className="text-[10px] font-bold text-red-600 hover:underline cursor-pointer"
                              >
                                Xóa giờ
                              </button>
                              <div className="flex gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => setEditingTaskId(null)}
                                  className="px-2 py-1 rounded-lg border border-gray-300 font-bold text-[11px] hover:bg-gray-50 cursor-pointer"
                                >
                                  Hủy
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleSaveEditTime(task.id)}
                                  className="px-2.5 py-1 rounded-lg bg-[#213a34] text-white font-black text-[11px] hover:bg-[#2d4f47] cursor-pointer"
                                >
                                  Lưu
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Delete task */}
                      <button
                        type="button"
                        onClick={() => handleDeleteTask(task.id)}
                        className="opacity-40 hover:opacity-100 hover:text-red-600 p-1 transition-opacity cursor-pointer"
                        title="Xóa việc này"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Add Task Form */}
          <form
            onSubmit={handleAddTask}
            className="p-3 bg-[#f5f0e6] border-t-2 border-[#213a34]/15 flex flex-col gap-2"
          >
            <div className="flex items-center gap-1.5">
              <input
                ref={inputRef}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Nhập việc cần làm..."
                className="flex-1 bg-white border border-[#213a34]/25 focus:border-[#213a34] rounded-xl px-3 py-2 text-sm font-bold text-[#213a34] placeholder:text-[#9aa49f] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowTimeSection(!showTimeSection)}
                title="Đặt giờ làm việc (ví dụ 22h-23h)"
                className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  showTimeSection || startTime || timeRange
                    ? 'bg-[#f8d467] text-[#213a34] border-[#213a34]'
                    : 'bg-white text-[#547169] border-[#213a34]/25 hover:border-[#213a34]'
                }`}
              >
                <Clock size={18} />
              </button>
              <button
                type="submit"
                disabled={!newText.trim()}
                className="bg-[#213a34] disabled:opacity-40 hover:bg-[#2d4f47] text-white font-black text-sm px-3 py-2 rounded-xl flex items-center gap-1 cursor-pointer transition-all"
              >
                <Plus size={16} /> Thêm
              </button>
            </div>

            {/* Expandable Time Picker for new task */}
            {showTimeSection && (
              <div className="p-2.5 bg-white border border-[#f8d467] rounded-xl text-xs space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[#213a34] flex items-center gap-1">
                    <Clock size={12} className="text-[#9a4f00]" /> Giờ làm việc:
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold">
                    (ví dụ: 22h - 23h)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <label className="text-[10px] font-bold text-gray-500 block">
                    <span className="block mb-0.5">Từ giờ:</span>
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full bg-[#f9f7f2] border border-[#213a34]/20 rounded-lg px-2 py-1 font-bold text-xs"
                    />
                  </label>
                  <label className="text-[10px] font-bold text-gray-500 block">
                    <span className="block mb-0.5">Đến giờ:</span>
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full bg-[#f9f7f2] border border-[#213a34]/20 rounded-lg px-2 py-1 font-bold text-xs"
                    />
                  </label>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1 flex-wrap pt-0.5">
                  <span className="text-[10px] font-bold text-gray-500">
                    Mẫu nhanh:
                  </span>
                  {[
                    { s: '22:00', e: '23:00', label: '22h-23h' },
                    { s: '20:00', e: '22:00', label: '20h-22h' },
                    { s: '14:00', e: '17:00', label: '14h-17h' },
                    { s: '08:00', e: '11:30', label: '8h-11h30' },
                  ].map((preset) => (
                    <button
                      type="button"
                      key={preset.label}
                      onClick={() =>
                        applyPresetTime(preset.s, preset.e, preset.label)
                      }
                      className="text-[10px] font-black bg-[#f5f0e6] hover:bg-[#f8d467] border border-[#213a34]/15 px-2 py-0.5 rounded cursor-pointer transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                  {(startTime || endTime || timeRange) && (
                    <button
                      type="button"
                      onClick={() => {
                        setStartTime('');
                        setEndTime('');
                        setTimeRange('');
                      }}
                      className="text-[10px] font-bold text-red-500 hover:underline ml-auto cursor-pointer"
                    >
                      Bỏ giờ
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
        </section>
      )}

      {/* 2. MESSENGER CHAT BUBBLE (FLOATING ACTION BUTTON) */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label="Mở Việc cần làm"
        className={`pointer-events-auto relative w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl ${
          isOpen
            ? 'bg-[#213a34] text-[#f8d467] rotate-90 scale-95 border-2 border-[#f8d467]'
            : 'bg-[#213a34] text-[#f8d467] hover:scale-110 active:scale-95 border-2 border-[#213a34]'
        }`}
        style={{
          boxShadow:
            '0 8px 24px -4px rgba(33, 58, 52, 0.45), 0 2px 6px 0 rgba(0,0,0,0.1)',
        }}
      >
        {isOpen ? (
          <X size={26} strokeWidth={2.5} />
        ) : (
          <div className="relative flex items-center justify-center">
            <CalendarCheck size={28} strokeWidth={2.3} />
          </div>
        )}

        {/* Unread / Pending tasks badge like Messenger */}
        {!isOpen && todayTotalCount > 0 && (
          <span
            className={`absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 flex items-center justify-center rounded-full text-[11px] font-black text-white shadow-md border-2 border-white transition-all ${
              todayPendingCount > 0
                ? 'bg-[#eb6a52] animate-pulse'
                : 'bg-[#49a078]'
            }`}
          >
            {todayPendingCount > 0 ? (
              todayPendingCount
            ) : (
              <Check size={12} strokeWidth={3} />
            )}
          </span>
        )}
      </button>
    </div>
  );
}
