export function calculateAttendancePercentage(
  attended: number,
  total: number
): number {
  if (total <= 0) return 0;

  return Number(((attended / total) * 100).toFixed(2));
}

export function classesNeededFor75(
  attended: number,
  total: number
): number {
  let extra = 0;

  while (((attended + extra) / (total + extra)) * 100 < 75) {
    extra++;
  }

  return extra;
}

export function classesCanMiss(
  attended: number,
  total: number
): number {
  let miss = 0;

  while ((attended / (total + miss + 1)) * 100 >= 75) {
    miss++;
  }

  return miss;
}