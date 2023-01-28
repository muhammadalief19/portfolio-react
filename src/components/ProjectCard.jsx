import { useState } from "react";

export default function ProjectCard(props) {
  const [cardActive, seCardActive] = useState(false);

  function showCard() {
    seCardActive(true);
    document.body.style.overflow = "hidden";
  }

  function clearCard() {
    seCardActive(false);
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div
          className="w-full aspect-video rounded overflow-hidden cursor-pointer"
          onClick={showCard}
          key={props.idx}
        >
          <img
            src={`img/${props.img}`}
            alt=""
            className="w-full object-cover aspect-video"
          />
        </div>
        <div className="w-full">
          {props.link === "Masih dalam tahap pengembangan" ? (
            <p className="text-center ">{props.link}</p>
          ) : (
            <a
              href={props.link}
              className="py-4 px-10 bg-sky-700 rounded-md"
              target={"_blank"}
              rel="noreferrer"
            >
              {props.nama}
            </a>
          )}
        </div>
      </div>
      <div
        className={` ${
          cardActive ? "flex" : "hidden"
        } fixed w-full h-screen bg-slate-100 bg-opacity-60 backdrop-blur justify-center items-center z-[99999] top-0 left-0`}
      >
        <span
          className="absolute top-9 right-10 scale-150 cursor-pointer"
          onClick={clearCard}
        >
          &times;
        </span>
        <div className="w-[90%] lg:w-4/5 flex flex-col text-slate-500 gap-5">
          <img
            src={`img/${props.img}`}
            alt=""
            className="w-[90%] lg:w-[60%] aspect-video mx-auto rounded"
          />
          <p className="text-3xl font-bold">{props.nama}</p>
          <p className="text-base font-medium">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
