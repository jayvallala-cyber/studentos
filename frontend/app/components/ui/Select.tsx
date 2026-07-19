type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value: string;
  options: Option[];
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export default function Select({
  label,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-300">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-950
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}   