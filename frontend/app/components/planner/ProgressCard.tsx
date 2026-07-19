import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

type ProgressCardProps = {
  completed: number;
  total: number;
};

export default function ProgressCard({
  completed,
  total,
}: ProgressCardProps) {
  const progress =
    total === 0 ? 0 : (completed / total) * 100;

  return (
    <Card>
      <h2 className="text-2xl font-bold text-white">
        Progress
      </h2>

      <ProgressBar value={progress} />

      <p className="mt-4 text-slate-300">
        {completed} / {total} Tasks Completed
      </p>
    </Card>
  );
}