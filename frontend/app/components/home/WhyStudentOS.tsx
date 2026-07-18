import SectionTitle from "../ui/SectionTitle";

const reasons = [
  {
    title: "Save Time",
    description:
      "No more switching between different websites. Everything is available in one place.",
  },
  {
    title: "Stay Organized",
    description:
      "Manage attendance, CGPA, notes, quizzes and study plans from a single dashboard.",
  },
  {
    title: "AI Powered",
    description:
      "Generate notes, quizzes and study material instantly using AI-powered tools.",
  },
];

export default function WhyStudentOS() {
  return (
    <section className="px-6 py-24">
      <SectionTitle
        badge="Why StudentOS?"
        title="Built for Modern Students"
        subtitle="Everything you need to study smarter, stay organized, and save time."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <h3 className="text-2xl font-bold text-white">
              {reason.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}