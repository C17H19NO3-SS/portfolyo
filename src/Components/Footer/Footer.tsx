import { NavLink } from "react-router";

export const Footer = () => (
  <footer className="bg-slate-50 dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 text-white dark:text-white w-full transition-all duration-500">
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-8">
      <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-[object Object]-undefined">
        <span>SynchJS</span>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold">
        <NavLink to="/hakkimda" className="hover:opacity-70 transition-opacity">
          Hakkımda
        </NavLink>
        <NavLink
          to="/projelerim"
          className="hover:opacity-70 transition-opacity"
        >
          Projelerim
        </NavLink>
        <NavLink
          to="/modullerim"
          className="hover:opacity-70 transition-opacity"
        >
          Modüllerim
        </NavLink>
      </div>
      <p className="text-sm opacity-60">
        © {new Date().getFullYear()} SynchJS tarafından açık kaynak olarak
        geliştirildi.
      </p>
    </div>
  </footer>
);
