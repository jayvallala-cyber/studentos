type Props = {
  target: number;
  setTarget: (value: number) => void;
};

export default function TargetSelector({
  target,
  setTarget,
}: Props) {
  const options = [75, 80, 85, 90];

  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold text-white">
        Target Attendance
      </label>

      <div className="flex flex-wrap gap-3">
        {options.map((value) => (
          <button
            key={value}
            onClick={() => setTarget(value)}
            className={`rounded-xl px-5 py-3 transition
              ${
                target === value
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
          >
            {value}%
          </button>
        ))}
      </div>
    </div>
  );
}