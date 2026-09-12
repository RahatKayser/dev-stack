function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 font-bold text-white">
            D
          </div>

          <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
            Dev Stack
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-pink-500">
            Home
          </a>

          <a href="#technologies" className="text-sm font-medium hover:text-pink-500">
            Technologies
          </a>

          <a href="#projects" className="text-sm font-medium hover:text-pink-500">
            Projects
          </a>

          <a href="#about" className="text-sm font-medium hover:text-pink-500">
            About
          </a>

          <a href="#contact" className="text-sm font-medium hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center gap-2 md:hidden">
          <button className="rounded-md p-2 text-xl">
            ☰
          </button>

          <button className="text-sm font-medium">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;