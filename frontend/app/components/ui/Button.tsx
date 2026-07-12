type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/20";

  return (
    <button
      className={`
        ${styles}
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
      `}
    >
      {text}
    </button>
  );
}