type Props = {
  percentage: number;
  canMiss: number;
  needAttend: number;
};

export default function AttendanceResult({
  percentage,
  canMiss,
  needAttend,
}: Props) {
  let status = "Excellent";
  let color = "text-green-400";

  if (percentage < 75) {
    status = "Low Attendance";
    color = "text-red-400";
  } else if (percentage < 85) {
    status = "Safe";
    color = "text-yellow-400";
  }

  return (
    <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Attendance Report
      </h2>

      <p className={`mt-2 text-lg font-semibold ${color}`}>
        {status}
      </p>

      <div className="mt-8">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Current Attendance
          </span>

          <span className="font-bold text-white">
            {percentage}%
          </span>
        </div>

        <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-800 p-6">
          <p className="text-slate-400">
            You Can Miss
          </p>

          <h1 className="mt-2 text-4xl font-bold text-green-400">
            {canMiss}
          </h1>

          <p className="text-sm text-slate-500">
            classes
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6">
          <p className="text-slate-400">
            Need To Attend
          </p>

          <h1 className="mt-2 text-4xl font-bold text-red-400">
            {needAttend}
          </h1>

          <p className="text-sm text-slate-500">
            classes
          </p>
        </div>

      </div>

    </div>
  );
}