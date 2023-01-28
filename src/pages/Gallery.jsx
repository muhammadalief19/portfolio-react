import { useState } from "react";
import Header from "../components/Header";

function Gallery() {
  const [effect, setEffect] = useState(false);

  function effectActive() {
    setEffect((effect) => !effect);
    console.log(effect);
  }
  return (
    <>
      <div className="w-full text-slate-200 overflow-x-hidden">
        <Header nama={"Gallery"} />
        <section className="w-full py-20 flex flex-col items-center gap-6 over">
          <div className="w-3/4 flex justify-end">
            <button
              className="py-2 px-9 bg-sky-700 shadow-lg shadow-sky-700 rounded-md z-20"
              onClick={effectActive}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-6 h-6 ${effect ? "hidden" : "block"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-6 h-6 ${effect ? "block" : "hidden"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </button>
          </div>
          <div className="w-[95%] md:w-[90%] lg:w-3/4 grid grid-cols-2 lg:grid-cols-4 lg:grid-flow-row rounded gap-2">
            <div className="w-full col-start-1 lg:col-span-2 lg:row-span-2">
              <img
                src="img/img-gallery-1.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform -rotate-12 -translate-x-28 -translate-y-16"
                    : ""
                } transition-all duration-500 ease-out`}
              />
            </div>
            <div className="w-full col-start-2 lg:col-start-3 lg:row-start-1">
              <img
                src="img/img-gallery-2.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform -rotate-12 translate-x-28 -translate-y-16"
                    : ""
                } transition-all duration-500 ease-out`}
              />
            </div>
            <div className="w-full col-start-1 row-start-2 lg:row-start-2 lg:col-start-3">
              <img
                src="img/img-gallery-3.jpg"
                alt=""
                className={`inset-0 w-full h-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform rotate-12 translate-x-32 translate-y-10"
                    : ""
                } transition-all duration-500 ease-out`}
              />
            </div>
            <div className="row-start-3 col-span-2 lg:col-span-4 lg:row-start-3">
              <img
                src="img/img-gallery-6.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform -rotate-6 -translate-x-36 translate-y-16 scale-75"
                    : ""
                } transition-all duration-500 ease-out`}
              />
            </div>
            <div className="row-start-4 lg:col-span-2 lg:row-start-4 lg:col-start-1">
              <img
                src="img/img-gallery-4.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform rotate-12 translate-x-28 translate-y-20"
                    : ""
                } transition-all duration-500 ease-out origin-top-left`}
              />
            </div>
            <div className="row-start-4 lg:col-span-2 lg:row-start-4 lg;col-start-3">
              <img
                src="img/img-gallery-5.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform -rotate-12 translate-x-24 -translate-y-16"
                    : ""
                } transition-all duration-500 ease-out origin-top-right`}
              />
            </div>
            <div className="col-start-2 row-start-2 lg:col-start-4 lg:col-span-2 lg:row-start-2 ">
              <img
                src="img/img-gallery-8.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform rotate-3 translate-x-44 -translate-y-36"
                    : ""
                } transition-all duration-500 ease-out`}
              />
            </div>
            <div className="col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-6 ">
              <img
                src="img/img-gallery-7.jpg"
                alt=""
                className={`inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ${
                  effect
                    ? "transform -rotate-3 translate-x-28 translate-y-16"
                    : ""
                } transition-all duration-500 ease-out origin-bottom-left`}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
