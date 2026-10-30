// Bảng quy đổi điểm TOEIC chuẩn ETS (Thang điểm 5 - 495 cho mỗi kỹ năng)

const READING_CONVERSION: number[] = [
  5,   // 0
  5, 5, 5, 5, 5, 5, 5, 5, 5, 10,   // 1-10
  15, 20, 25, 30, 35, 40, 45, 50, 55, 60, // 11-20
  65, 70, 75, 80, 85, 90, 95, 100, 105, 110, // 21-30
  115, 125, 130, 135, 145, 150, 155, 165, 170, 175, // 31-40
  185, 190, 195, 205, 215, 220, 225, 235, 240, 245, // 41-50
  255, 260, 265, 270, 275, 280, 285, 290, 295, 305, // 51-60
  310, 315, 320, 325, 330, 340, 345, 350, 355, 360, // 61-70
  365, 370, 375, 380, 385, 395, 400, 405, 410, 415, // 71-80
  420, 425, 430, 435, 440, 445, 450, 455, 460, 465, // 81-90
  470, 475, 480, 485, 490, 490, 495, 495, 495, 495  // 91-100
];

const LISTENING_CONVERSION: number[] = [
  5,   // 0
  5, 5, 5, 5, 5, 5, 10, 15, 20, 25, // 1-10
  30, 35, 40, 45, 50, 55, 60, 65, 70, 75, // 11-20
  80, 85, 90, 95, 100, 110, 115, 120, 125, 130, // 21-30
  135, 140, 145, 150, 160, 165, 170, 175, 180, 190, // 31-40
  195, 200, 205, 215, 220, 225, 230, 235, 240, 245, // 41-50
  255, 260, 265, 275, 280, 285, 290, 295, 300, 310, // 51-60
  315, 320, 325, 330, 340, 345, 350, 360, 365, 370, // 61-70
  375, 385, 390, 395, 400, 405, 410, 420, 425, 430, // 71-80
  435, 440, 445, 455, 460, 465, 470, 475, 480, 485, // 81-90
  490, 490, 495, 495, 495, 495, 495, 495, 495, 495  // 91-100
];

export function getReadingToeicScore(rawScore: number): number {
  const clamped = Math.max(0, Math.min(100, Math.round(rawScore)));
  return READING_CONVERSION[clamped] ?? 5;
}

export function getListeningToeicScore(rawScore: number): number {
  const clamped = Math.max(0, Math.min(100, Math.round(rawScore)));
  return LISTENING_CONVERSION[clamped] ?? 5;
}

export function getToeicScoreRange(rawScore: number, type: 'reading' | 'listening'): { score: number; min: number; max: number } {
  const score = type === 'reading' ? getReadingToeicScore(rawScore) : getListeningToeicScore(rawScore);
  return {
    score,
    min: Math.max(5, score - 10),
    max: Math.min(495, score + 10)
  };
}
