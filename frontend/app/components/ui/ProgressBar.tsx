type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({
  value,
}: ProgressBarProps) {
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}