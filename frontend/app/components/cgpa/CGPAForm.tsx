"use client";

import { useState } from "react";
import SubjectRow from "./SubjectRow";
import { calculateSGPA, Grade } from "../../lib/cgpa";

type Subject = {
  name: string;
  credits: number;
  grade: Grade;
};

export default function CGPAForm() {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      name: "",
      credits: 3,
      grade: "O",
    },
  ]);

  const [sgpa, setSgpa] = useState<number | null>(null);

  function updateSubject(index: number, updated: Subject) {
    const newSubjects = [...subjects];
    newSubjects[index] = updated;
    setSubjects(newSubjects);
  }

  function addSubject() {
    setSubjects([
      ...subjects,
      {
        name: "",
        credits: 3,
        grade: "O",
      },
    ]);
  }

  function calculate() {
    setSgpa(calculateSGPA(subjects));
  }

  return (
    <div className="mt-10 space-y-6">

      {subjects.map((subject, index) => (
        <SubjectRow
          key={index}
          subject={subject}
          onChange={(updated) =>
            updateSubject(index, updated)
          }
        />
      ))}

      <div className="flex gap-4">

        <button
          onClick={addSubject}
          className="rounded-xl bg-slate-800 px-6 py-3 text-white hover:bg-slate-700 transition"
        >
          + Add Subject
        </button>

        <button
          onClick={calculate}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Calculate SGPA
        </button>

      </div>

      {sgpa !== null && (
        <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 text-center">
          <p className="text-slate-300">Your SGPA</p>

          <h2 className="mt-3 text-5xl font-extrabold text-blue-400">
            {sgpa}
          </h2>
        </div>
      )}

    </div>
  );
}