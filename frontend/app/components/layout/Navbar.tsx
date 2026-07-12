export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-slate-900 border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        StudentOS
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-400">
          Features
        </a>

        <a href="#" className="hover:text-blue-400">
          About
        </a>

        <a href="#" className="hover:text-blue-400">
          Contact
        </a>
      </div>
    </nav>
  );
}