import fs from 'fs';

const block = `              <article id="life-notes" className="life-card life-anchor">
                <div className="section-heading" style={{ marginBottom: '1rem' }}>
                  <p className="eyebrow">Ghi lại để không quên</p>
                  <h2>Ghi chú</h2>
                  <p>
                    Ghi chép lại những điều quan trọng, ý tưởng hay hoặc đơn giản là những gì bạn muốn lưu giữ.
                  </p>
                </div>
                {!showNoteForm && !editingNoteId ? (
                  <button
                    className="add-habit-btn"
                    style={{ marginBottom: '1rem', background: '#e9f2ed', color: '#213a34', fontWeight: 'bold', padding: '0.75rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}
                    onClick={() => {
                      setNoteTitle('');
                      setNoteContent('');
                      setEditingNoteId(null);
                      setShowNoteForm(true);
                    }}
                  >
                    + Tạo ghi chú mới
                  </button>
                ) : null}

                {showNoteForm || editingNoteId ? (
                  <div className="note-form" style={{ background: '#fff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(33, 58, 52, 0.1)', marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Tiêu đề ghi chú..."
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}
                    />
                    <textarea
                      placeholder="Nội dung..."
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc', minHeight: '150px', marginBottom: '1rem', resize: 'vertical' }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => {
                          setShowNoteForm(false);
                          setEditingNoteId(null);
                        }}
                        style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#f0f0f0', color: '#666', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Hủy
                      </button>
                      <button
                        onClick={() => {
                          if (!noteTitle.trim()) return;
                          if (editingNoteId) {
                            onChange((prev) => ({
                              ...prev,
                              notes: prev.notes.map(n => n.id === editingNoteId ? { ...n, title: noteTitle, content: noteContent, updatedAt: Date.now() } : n)
                            }));
                          } else {
                            onChange((prev) => ({
                              ...prev,
                              notes: [{ id: Date.now().toString(), title: noteTitle, content: noteContent, createdAt: Date.now(), updatedAt: Date.now() }, ...prev.notes]
                            }));
                          }
                          setShowNoteForm(false);
                          setEditingNoteId(null);
                        }}
                        style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#f8d467', color: '#213a34', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Lưu ghi chú
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="notes-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                  {data.notes.map((note) => (
                    <div key={note.id} className="note-item" style={{ background: '#fff', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(33, 58, 52, 0.1)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#213a34', lineHeight: 1.4 }}>{note.title}</h3>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          <button
                            onClick={() => {
                              setNoteTitle(note.title);
                              setNoteContent(note.content);
                              setEditingNoteId(note.id);
                              setShowNoteForm(true);
                            }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', opacity: 0.5 }}
                            title="Sửa"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Bạn có chắc chắn muốn xóa ghi chú này?')) {
                                onChange((prev) => ({
                                  ...prev,
                                  notes: prev.notes.filter(n => n.id !== note.id)
                                }));
                              }
                            }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', opacity: 0.5, color: 'red' }}
                            title="Xóa"
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                      <p style={{ margin: 0, color: '#65766f', fontSize: '0.95rem', whiteSpace: 'pre-wrap', flex: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{note.content}</p>
                      <small style={{ marginTop: '1rem', color: '#999', fontSize: '0.8rem', display: 'block' }}>
                        {new Date(note.updatedAt).toLocaleDateString('vi-VN')} {new Date(note.updatedAt).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
                      </small>
                    </div>
                  ))}
                  {data.notes.length === 0 && !showNoteForm && (
                    <p style={{ color: '#999', fontStyle: 'italic', gridColumn: '1 / -1' }}>Chưa có ghi chú nào. Hãy tạo ghi chú đầu tiên nhé!</p>
                  )}
                </div>
              </article>`;

const file = fs.readFileSync('app/page.tsx', 'utf8');
const lines = file.split('\n');
const insertIndex = lines.findIndex(l => l.includes('<aside className="spending-workspace">')) - 1; // before </div> before <aside>
lines.splice(insertIndex, 0, block);
fs.writeFileSync('app/page.tsx', lines.join('\n'));
