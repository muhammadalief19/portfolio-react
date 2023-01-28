import { useState } from "react";

function Modal(props) {
  const [modalActive, setModalActive] = useState(false);

  function showModal() {
    setModalActive(true);
    document.body.style.overflow = "hidden";
  }

  function clearModal() {
    setModalActive(false);
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <button className={`${props.style} z-30`} onClick={showModal}>
        {props.label}
      </button>
      <div
        className={` ${
          modalActive ? "flex" : "hidden"
        } fixed w-full h-screen bg-slate-100 bg-opacity-5 backdrop-blur justify-center items-center z-[99999999999] top-0 left-0`}
      >
        <span
          className="absolute top-9 right-10 scale-150 cursor-pointer"
          onClick={clearModal}
        >
          &times;
        </span>
        <div className="w-[90%] lg:w-1/2 text-center">
          <p className="">{props.quotes}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
