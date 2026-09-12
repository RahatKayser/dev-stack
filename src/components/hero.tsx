import heroImage from "../assets/banner-stack.png";
function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">

        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Build Your Ideal
            <span className="brand-gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 md:mx-0 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

            <button className="brand-gradient rounded-full px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Dev Stack"
            // className="w-full rounded-2xl"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;