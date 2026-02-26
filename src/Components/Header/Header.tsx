import { useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 text-zinc-900 dark:text-slate-100 w-full transition-all duration-500 relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-[object Object]-undefined z-50">
          <span>SynchJS</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
          <NavLink
            to="/hakkimda"
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Hakkımda
          </NavLink>
          <NavLink
            to="/projelerim"
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Projelerim
          </NavLink>
          <NavLink
            to="/modullerim"
            className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Modüllerim
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="flex md:hidden flex-col justify-center items-center w-8 h-8 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span
            className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-zinc-900 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold">
          <NavLink
            to="/hakkimda"
            onClick={closeMenu}
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Hakkımda
          </NavLink>
          <NavLink
            to="/projelerim"
            onClick={closeMenu}
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Projelerim
          </NavLink>
          <NavLink
            to="/modullerim"
            onClick={closeMenu}
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current hover:after:w-full after:transition-all"
          >
            Modüllerim
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
