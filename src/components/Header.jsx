import { useState } from "react";

function Header(props) {
  window.onscroll = function () {
    const anjas = document.querySelector("#header");
    const fixedNav = anjas.offsetTop;

    if (window.pageYOffset > fixedNav) {
      anjas.classList.add("navbar-fixed");
    } else {
      anjas.classList.remove("navbar-fixed");
    }
  };

  const [clickActive, setClickActive] = useState(false);

  const clicky = () => {
    setClickActive((clickActive) => !clickActive);
  };
  return (
    <>
      <nav
        className="fixed z-[99999] h-max top-0 w-full px-10 py-7 grid grid-cols-2 lg:grid-cols-4"
        id="header"
      >
        <div className="w-full">
          <p className="text-lg lg:text-2xl font-bold">{props.nama}</p>
        </div>
        <div className="w-full lg:col-span-3 flex justify-end">
          <button
            className={`lg:hidden flex flex-col gap-[7px] ${
              clickActive ? "hamburger-active" : ""
            }`}
            onClick={clicky}
          >
            <span
              className={`bg-slate-200 w-8 py-[2px] rounded-full transition duration-300 ease-in-out origin-top-left`}
            ></span>
            <span
              className={`bg-slate-200 w-8 py-[2px] rounded-full transition duration-300 ease-in-out`}
            ></span>
            <span
              className={`bg-slate-200 w-8 py-[2px] rounded-full transition duration-300 ease-in-out origin-bottom-left`}
            ></span>
          </button>
          <ul
            className={`lg:w-1/2 ${
              clickActive
                ? "flex px-10 py-3 text-center gap-2 rounded bg-opacity-90 backdrop-blur-md"
                : "hidden  "
            } lg:bg-transparent lg:flex flex-col lg:flex-row justify-end lg:gap-10 absolute lg:static top-24 right-6 z-[9999] bg-slate-600`}
          >
            <li className="">
              <a href="/" className="">
                Home
              </a>
            </li>
            <li className="">
              <a href="/about" className="">
                About
              </a>
            </li>
            <li className="">
              <a href="/gallery" className="">
                Gallery
              </a>
            </li>
            <li className="">
              <a href="/projects" className="">
                Projects
              </a>
            </li>
            <li className="">
              <a href="/contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
