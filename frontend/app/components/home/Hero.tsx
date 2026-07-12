import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">

      <span className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
        🚀 Student Productivity Platform
      </span>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Everything a Student Needs.
        <br />
        <span className="text-blue-500">
          One Platform.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-slate-400">
        Attendance calculator, CGPA calculator, AI Notes,
        AI Quiz Generator, Study Planner and much more —
        all in one place.
      </p>

      <div className="mt-10 flex gap-5">
        <Button text="Get Started" />
        <Button
          text="Explore Features"
          variant="secondary"
        />
      </div>

    </section>
  );
}