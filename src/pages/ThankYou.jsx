import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  let [number, setNumber] = useState(5);
  setInterval(() => {
    setNumber((number -= 1));
  }, 1000);
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center overflow-hidden text-slate-200">
        <div className="w-4/5 flex flex-col items-center gap-5">
          <img src="img/illustration-2.png" alt="" className="" />
          <p className="text-lg font-semibold">
            Terima Kasih Atas Masukkan Anda
          </p>
          <p className="font-medium">
            Halaman ini akan berpindah Otomatis dalam {number >= 0 ? number : 0}{" "}
            detik
          </p>
        </div>
      </div>
    </>
  );
}
