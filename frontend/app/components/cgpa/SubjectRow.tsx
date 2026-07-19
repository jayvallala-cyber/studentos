import { Grade } from "../../lib/cgpa";

type Subject = {
  name: string;
  credits: number;
  grade: Grade;
};

type SubjectRowProps = {
  subject: Subject;
  onChange: (updated: Subject) => void;
};

const grades: Grade[] = [
  "O",
  "A+",
  "A",
  "B+",
  "B",
  "C",
  "F",
];

export default function SubjectRow({
  subject,
  onChange,
}: SubjectRowProps) {
  return (
    <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:grid-cols-3">

      <input
        type="text"
        placeholder="Subject Name"
        value={subject.name}
        onChange={(e) =>
          onChange({
            ...subject,
            name: e.target.value,
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="number"
        placeholder="Credits"
        value={subject.credits}
        onChange={(e) =>
          onChange({
            ...subject,
            credits: Number(e.target.value),
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <select
        value={subject.grade}
        onChange={(e) =>
          onChange({
            ...subject,
            grade: e.target.value as Grade,
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
      >
        {grades.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>

    </div>
  );
}