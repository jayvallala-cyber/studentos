export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        StudentOS
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-2xl">
        Everything a student needs.
        <br />
        One platform.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>

        <button className="border border-gray-500 px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>

      <div className="mt-16 text-gray-400 space-y-2 text-center">
        <p>✅ Attendance Tracker</p>
        <p>✅ CGPA Calculator</p>
        <p>✅ AI Notes</p>
        <p>✅ Study Planner</p>
        <p>✅ AI Quiz Generator</p>
      </div>
    </main>
  );
}