import Planner from "../components/planner/Planner";

export default function StudyPlannerPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-extrabold">
          Study Planner
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Organize your daily study tasks and track your progress.
        </p>

        <div className="mt-12">
          <Planner />
        </div>
      </div>
    </main>
  );
}