type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  text,
  variant = "primary",
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/20";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles}
        ${fullWidth ? "w-full" : ""}
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
      `}
    >
      {text}
    </button>
  );
}