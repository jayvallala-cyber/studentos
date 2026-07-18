import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Attendance Calculator",
    description:
      "Track your attendance and instantly know how many classes you can miss.",
  },
  {
    title: "CGPA Calculator",
    description:
      "Calculate your CGPA semester-wise and predict your target CGPA.",
  },
  {
    title: "AI Notes Generator",
    description:
      "Generate clean, structured study notes from any topic in seconds.",
  },
  {
    title: "AI Quiz Generator",
    description:
      "Create practice quizzes and test yourself before exams.",
  },
  {
    title: "Study Planner",
    description:
      "Plan your study schedule based on your exam dates and goals.",
  },
  {
    title: "Resume Builder",
    description:
      "Create an ATS-friendly resume with modern professional templates.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Powerful Tools for Every Student
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Everything you need to manage academics, stay productive, and prepare
          for your future—all in one place.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}