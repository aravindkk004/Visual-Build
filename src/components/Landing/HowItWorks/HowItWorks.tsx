import Gradient from "@/components/Gradient";

const HowItWorks = () => {
  return (
    <section className="relative bg-[#070a1a]">
      <Gradient />
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-3 flex">
              <h2 className="max-w-4xl mx-auto text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                How It Works
              </h2>
              <p className="w-full text-center text-white text-base font-normal leading-relaxed">
                A detailed breakdown of processes and mechanisms behind a system
                or product, <br />
                simplifying complex concepts for easy understanding.
              </p>
            </div>
            <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    1
                  </h3>
                  <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">
                    Design Visually
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Drag and drop components onto the canvas. Customize layouts
                  and styling in real-time without writing any code.
                </p>
              </div>
              <svg
                className="md:flex hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    2
                  </h3>
                  <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">
                    Organize Project
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Structure your project with folders and files. Create new
                  components and organize them visually like a real codebase.
                </p>
              </div>
              <svg
                className="md:flex hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    3
                  </h3>
                  <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">
                    Save & Continue
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Save your projects securely in the cloud for easy access. Load
                  and continue editing anytime without losing any progress or
                  changes.
                </p>
              </div>
              <svg
                className="md:flex hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    4
                  </h3>
                  <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">
                    Export Production Code
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Export your project as clean Next.js code. All components,
                  pages, and styles are included and ready to deploy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
