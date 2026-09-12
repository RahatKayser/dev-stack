
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">

        {/* Desktop Navbar */}
        <div className="hidden items-center justify-between md:flex">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Navbar */}
        <div className="grid w-full grid-cols-3 items-center md:hidden">

          {/* Hamburger */}
          <div className="justify-self-start">
            <button className="p-2">
              <img
                src={hamburger}
                alt="Menu"
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Logo */}
          <div className="justify-self-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 justify-self-end">
            <button className="text-xs font-medium">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;