import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between h-half">
          <h2 className="leading-none font-extrabold text-gray-900 text-2xl sm:text-4xl lg:text-5xl capitalize">
            Find roommates! <br />
            Internationally
            <p className="mx-auto max-w-screen-sm leading-tight text-base md:text-xl lg:text-3xl leading-7 text-indigo-600 mt-6">
              Use our custom filters and alerts to simplify your search.
            </p>
            <br />
          </h2>
          <br />

          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/getstarted"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/learnmore"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HeroSection };
