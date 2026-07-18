type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}