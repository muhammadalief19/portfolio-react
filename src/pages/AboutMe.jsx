import { useEffect, useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";

function AboutMe() {
  const [weabooStyle, setWeabooStyle] = useState("");
  const [atletStyle, setAtletStyle] = useState("");
  const [minatStyle, setMinatStyle] = useState("");

  useEffect(() => {
    setWeabooStyle(
      "py-3 px-9 bg-red-600 rounded-md shadow-lg shadow-red-600 animate-left&right-1 absolute left-4 lg:left-0"
    );
    setAtletStyle(
      "py-3 px-14 bg-teal-600 rounded-md shadow-lg shadow-teal-600 animate-left&right-2 absolute top-20 lg:top-16 right-1/3"
    );
    setMinatStyle(
      "py-3 px-14 bg-sky-600 rounded-md shadow-lg shadow-sky-600 animate-left&right-3 absolute right-1"
    );
  }, []);
  return (
    <>
      <div className="w-full lg:h-screen lg:overflow-hidden bg-gray-700 text-slate-200">
        <Header nama={"Muhammad Alief"} />
        <section className="w-full h-full pt-24 lg:pt-40 px-10">
          <div className="w-full h-full grid grid-flow-row lg:grid-cols-2 gap-10">
            <div className="w-full h-full flex justify-center items-end">
              <img
                src="img/hero-image-2.png"
                alt=""
                className="w-full md:w-[90%] lg:-translate-y-16 hover:animate-a-disko"
              />
            </div>
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col gap-4 w-full">
                <p className="text-xl lg:text-3xl font-extrabold ">
                  HI, NAMA SAYA
                </p>
                <p className="text-2xl lg:text-4xl font-bold font-press-start">
                  MUHAMMAD <span className="text-blue-700">ALIEF</span>
                </p>
                <p className="text-base md:text-lg lg:text-xl font-medium text-justify">
                  Saya adalah seorang mahasiswa PENS, saya tertarik dalam bidang
                  website development, saat ini saya sedang mempelajari beberapa
                  framework frontend dan backend.
                </p>
              </div>
              <div className="w-full relative h-max pb-10">
                <Modal
                  quotes={
                    "Saya bukan seorang wibu, saya berbeda dengan para programmer lainnya yang suka dengan hal yang berbau anime. Anime yang saya suka hanya 1 yaitu Naruto."
                  }
                  style={weabooStyle}
                  label={"!WEABOO"}
                />
                <Modal
                  quotes={
                    "Saya senang berolahraga, olahraga yang saya tekuni adalah SepakBola dan Futsal, dengan saya rajin berolahraga tubuh saya menjadi lebih fresh dan otak saya juga lebih fresh untuk berfikir, olahraga dapat meningkatkan semangat saya untuk ngoding"
                  }
                  style={atletStyle}
                  label={"ATLET"}
                />
                <Modal
                  quotes={
                    "Saya tertarik dibidang web, cita-cita saya ingin menjadi Fullstack Developer, saat ini saya sedang mempelajari bermacam framework frontend dan backend, saya belajar setiap hari agar tidak ketinggalan jika ada teknologi yang lebih baru."
                  }
                  style={minatStyle}
                  label={"MINAT"}
                />
                <img
                  src="img/illustration-1.svg"
                  alt=""
                  className="w-3/5 md:w-1/3 lg:translate-x-36 lg:-translate-y-5 md:translate-x-48 md:-translate-y-5 translate-x-28 -translate-y-3 transition-all duration-300 ease-in-out  rotate-12 animate-a-disko"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
