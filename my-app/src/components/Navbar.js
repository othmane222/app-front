import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-forth-start text-white relative z-50">
      <div className="container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-x-10">
          <div id="logo">
            {/* Add your logo here */}
            <span className="font-bold text-lg">Logo</span>
          </div>
          <div className="hidden md:flex items-center gap-x-8">
            <a
              className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
              href="#about"
            >
              About
            </a>
            <a
              className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
              href="#perks"
            >
              Perks
            </a>
            <a
              className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
              href="#expense"
            >
              Expense
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="bg-theme-neutral-800 hover:bg-theme-neutral-700 rounded-full px-5 py-1 border border-theme-neutral-700 hover:border-theme-neutral-500 transition-all text-theme-neutral-200 font-medium text-lg text-center"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-600 rounded-full px-4 py-1 border border-theme-neutral-700 hover:border-theme-neutral-500 transition-all text-theme-neutral-200 font-medium text-lg text-center"
          >
            Try now
          </a>
        </div>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center p-3 hover:bg-neutral-700">
            <div className="space-y-1.5">
              <div className="h-px bg-white w-8"></div>
              <div className="h-px bg-white w-8"></div>
              <div className="h-px bg-white w-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-primary-100 z-40`}
      >
        <div className="flex flex-col justify-start items-start h-full bg-primary-100 py-4">
          <a
            className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all py-2 pl-4"
            href="#about"
          >
            About
          </a>
          <a
            className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all py-2 pl-4"
            href="#perks"
          >
            Perks
          </a>
          <a
            className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all py-2 pl-4"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="font-base font-semibold text-theme-neutral-200 hover:text-fuchsia-500 transition-all py-2 pl-4"
            href="#expense"
          >
            Expense
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
