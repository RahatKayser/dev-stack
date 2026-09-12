import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">

        {/* Footer Main Content */}
        <div className="grid gap-8 md:grid-cols-4">

          {/* Brand Info */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#home"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;