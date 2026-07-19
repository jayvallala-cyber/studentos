export const gradePoints = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  F: 0,
};

export type Grade = keyof typeof gradePoints;

export function calculateSGPA(
  subjects: {
    credits: number;
    grade: Grade;
  }[]
) {
  let totalCredits = 0;
  let totalPoints = 0;

  for (const subject of subjects) {
    totalCredits += subject.credits;
    totalPoints +=
      subject.credits * gradePoints[subject.grade];
  }

  if (totalCredits === 0) return 0;

  return Number((totalPoints / totalCredits).toFixed(2));
}