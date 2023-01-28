function Welcome() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-gray-700 text-slate-200">
        <SectionHero />
      </div>
    </>
  );
}

const SectionHero = () => {
  return (
    <section className="w-full h-full flex justify-center items-center pt-16 relative">
      <p className="absolute text-xl md:text-2xl lg:text-4xl top-7 md:left-16 font-extrabold font-press-start tracking-wider">
        <span className="text-sky-700">HI, </span>I'M
      </p>
      <p className="absolute text-xl md:text-2xl lg:text-4xl lg:top-20 top-16 md:left-16 font-extrabold font-press-start tracking-wider">
        MUHAMMAD <span className="text-sky-700">ALIEF</span>
      </p>
      <p className="absolute text-lg md:text-xl lg:text-3xl lg:top-32  top-24 md:left-16 font-bold">
        Web Developer
      </p>
      <div className="w-[70%] md:w-1/2 lg:w-[40%] aspect-square bg-gradient-to-br from-sky-600 via-sky-400 to-sky-200 absolute rounded-full shadow-lg shadow-slate-100 animate-up&down"></div>
      <div className="w-full lg:w-[90%] h-full flex justify-center items-end">
        <img src="img/hero-image-1.png" alt="" className="md:h-[90%] z-10" />
      </div>
      <a
        href="about"
        className="z-10 bottom-8 md:bottom-10 lg:bottom-20 right-7 lg:right-16 font-press-start py-3 lg:py-4 px-8 lg:px-10 bg-gradient-to-br from-sky-600 absolute rounded-full hover:-translate-y-4 transition-all duration-200 ease-linear"
      >
        START
      </a>
    </section>
  );
};
export default Welcome;
