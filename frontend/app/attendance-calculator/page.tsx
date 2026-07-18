import AttendanceForm from "../components/attendance/AttendanceForm";

export default function AttendanceCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">

      <div className="mx-auto max-w-4xl">

        <h1 className="text-center text-5xl font-extrabold">
          Attendance Calculator
        </h1>

        <p className="mt-5 text-center text-slate-400">
          Enter your attendance details to calculate your current percentage
          and plan your future attendance.
        </p>

        <AttendanceForm />

      </div>

    </main>
  );
}