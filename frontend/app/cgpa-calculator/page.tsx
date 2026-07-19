import CGPAForm from "../components/cgpa/CGPAForm";
export default function CGPACalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-extrabold">
          CGPA Calculator
        </h1>

        <p className="mt-5 text-center text-slate-400">
          Calculate your Semester GPA quickly and accurately.
        </p>

        <CGPAForm />
      </div>
    </main>
  );
}