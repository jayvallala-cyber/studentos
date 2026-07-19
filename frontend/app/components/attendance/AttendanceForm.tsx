"use client";
import Card from "../ui/Card";
import { useState } from "react";

import AttendanceResult from "./AttendanceResult";

import {
  calculateAttendancePercentage,
  classesCanMiss,
  classesNeededFor75,
} from "../../lib/attendance";

export default function AttendanceForm() {
  const [conducted, setConducted] = useState("");
  const [attended, setAttended] = useState("");

  const [percentage, setPercentage] = useState<number | null>(null);
  const [canMiss, setCanMiss] = useState(0);
  const [needAttend, setNeedAttend] = useState(0);

  function calculateAttendance() {
    const total = Number(conducted);
    const present = Number(attended);

    if (total <= 0 || present < 0 || present > total) {
      alert("Please enter valid attendance details.");
      return;
    }

    setPercentage(
      calculateAttendancePercentage(present, total)
    );

    setCanMiss(
      classesCanMiss(present, total)
    );

    setNeedAttend(
      classesNeededFor75(present, total)
    );
  }

  return (
    <>
      <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Classes Conducted
            </label>

            <input
              type="number"
              value={conducted}
              onChange={(e) => setConducted(e.target.value)}
              placeholder="e.g. 50"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Classes Attended
            </label>

            <input
              type="number"
              value={attended}
              onChange={(e) => setAttended(e.target.value)}
              placeholder="e.g. 42"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

        </div>

        <button
          onClick={calculateAttendance}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calculate Attendance
        </button>

      </div>

      {percentage !== null && (
        <AttendanceResult
          percentage={percentage}
          canMiss={canMiss}
          needAttend={needAttend}
        />
      )}
    </>
  );
}