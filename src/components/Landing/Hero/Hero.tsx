import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="pt-12 sm:pt-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            Build Websites Visually. Export Code Instantly
          </p>
          <h1 className="max-w-2xl mx-auto px-6 md:text-lg sm:text-md text-sm text-white font-inter">
            No coding required. Drag, drop, and design. Export clean Next.js
            code in one click.
          </h1>
          <div className="mt-4 px-8 py-6 flex flex-col items-center">
            <Link
              href="/sign-in"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-3xl hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2 md:text-lg sm:text-md text-sm font-semibold">Get Started</span>
              <FaArrowRight />
            </Link>

            <p className="text-[#c2cde7] text-sm mt-4">
              Start for free. No credit card required.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="relative mx-auto mt-4 md:mt-8">
          <div className="lg:max-w-4xl lg:mx-auto">
            <img
              className="px-4 md:mpx-8"
              src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
