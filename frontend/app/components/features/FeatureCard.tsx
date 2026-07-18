type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}