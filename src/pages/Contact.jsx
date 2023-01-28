import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <div className="text-slate-200 py-28">
        <Header nama={"Contact"} />
        <section className="w-full flex flex-col items-center justify-center gap-8">
          <p className="text-3xl font-bold font-press-start text-teal-500">
            Contact Form
          </p>
          <p className="text-sm font-medium text-teal-500 hidden lg:block">
            Terima Kasih telah berkunjung ke website saya silahkan isi form
            dibawah ini jika ada saran atau masukan
          </p>
          <div className="w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center relative">
            <img
              src="img/character-3.svg"
              alt=""
              className="absolute -z-10 bottom-20 right-6 -rotate-12 animate-a-disko"
            />
            <div className="w-full flex justify-center items-center">
              <img
                src="img/character-1.svg"
                alt=""
                className="animate-bounce"
              />
            </div>
            <div className="w-full flex items-center flex-col">
              <p className="text-sm font-medium text-teal-500 lg:hidden text-center">
                Terima Kasih telah berkunjung ke website saya silahkan isi form
                dibawah ini jika ada saran atau masukan
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="md:col-span-2 flex justify-center">
                <div className="p-2 bg-gradient-to-br from-teal-500 to-teal-200 rounded-full overflow-hidden animate-left&right-2 shadow-lg shadow-teal-500">
                  <img
                    src="img/profile.jpg"
                    alt=""
                    className="aspect-square rounded-full"
                  />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center items-center gap-10 text-slate-200">
                <p className="text-center font-bold text-2xl">Sosial Media</p>
                <div className="w-1/2 flex justify-around">
                  <a
                    href="https://www.instagram.com/mhmmdalief1908"
                    className=""
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src="img/sosmed-1.png"
                      alt=""
                      className="w-6 aspect-square"
                    />
                  </a>
                  <a
                    href="https://twitter.com/Muhammad190803"
                    className=""
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src="img/sosmed-5.png"
                      alt=""
                      className="w-6 aspect-square"
                    />
                  </a>
                  <a
                    href="https://t.me/muhammadalief"
                    className=""
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src="img/sosmed-3.png"
                      alt=""
                      className="w-6 aspect-square"
                    />
                  </a>
                  <a
                    href="https://github.com/muhammadalief19/"
                    className=""
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src="img/sosmed-4.png"
                      alt=""
                      className="w-6 aspect-square"
                    />
                  </a>
                </div>
                <p className="text-center">
                  Jika masih KEPO dengan kehidupan saya silahkan kunjungi Media
                  Sosial saya yang sudah tertera di atas 👌
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
