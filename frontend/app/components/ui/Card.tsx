type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur-xl
      p-8
      shadow-xl
      transition
      duration-300
      hover:border-blue-500/40
      hover:shadow-blue-500/20
    "
    >
      {children}
    </div>
  );
}