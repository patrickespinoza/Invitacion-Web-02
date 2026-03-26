import React, { useState } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";


export default function Intinerario() {
  // Estados para manejar el formulario
  const [isOpen, setIsOpen] = useState(false);
  const [numPeople, setNumPeople] = useState(1);
  const [name, setName] = useState("");

  return (
    <div >
       <div className="flex flex-col items-center justify-center p-7">
        <Countdown targetDate="2026-06-11T00:00:00" />
        </div>
        <div className="flex flex-col items-center justify-center">
        <img src="/bajotime.avif" alt="acepto" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="flex flex-col items-center justify-center gap-3 h-96 md:h-96 lg:h-[700px]" >
          <h1 className="text-2xl sm:text-3xl font-bold p-5 font-playfair">CELEBRACIÓN</h1>
          <p className="text-xl sm:text-xl font-cursiveDancing">11 | Junio | 2026</p>
          <p className="text-xl sm:text-xl font-cursiveDancing"> 4:30 PM</p>
          {/* <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/tarta-de-boda.png" alt="imagen del salon" /> */}
          <p className="p-3 text-center font-cursiveDancing">Salón Event Center</p>
          <p className="p-3 text-center font-cursiveDancing">C.5 Pte. 400, Libertad, Heroica Puebla de Zaragoza, Pue</p>
          <a className="bg-yellow-600 rounded-md p-3 w-36 h-11 flex items-center justify-center text-xl text-white font-cursiveDancing" href="https://maps.app.goo.gl/TsSDUBKAractwi8F8">Ver Dirección</a>
        </div>

        {/* Sección de Vestimenta */}
        <div className="flex flex-col items-center justify-center h-96 md:h-80 lg:h-[700px] bg-black text-white" >
          <h1 className="text-xl sm:text-5xl font-bold p-5 font-playfair ">VESTIMENTA</h1>
          <p className="text-lg sm:text-4xl p-7 text-center ">Formal</p>
          {/* <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/pareja-de-boda.png" alt="dress code" /> */}
        </div>

        {/* Sección de Momentos */}
        <div className="flex flex-col items-center justify-center" >
          <h1 className="text-xl sm:text-2xl font-bold p-5 font-playfair">NUESTROS MOMENTOS</h1>
          <Carousel />
        </div>

        {/* Sección de Regalos */}
  <div className="font-playfair flex flex-col items-center justify-center ">
  <h1 className="text-center text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Itinerario</h1>
  <div className="grid grid-cols-3 gap-6">
    {/* Columna 1 */}
    <div className="flex flex-col gap-3">
      <div className="flex-grow">
        <p className="text-left text-[16px] lg:text-[19px] font-bold ml-2">Fotografías</p>
        <img src="./camara-fotografica.png" alt="fotografia" className="ml-2 h-20 w-20 mx-1 md:h-28 sm:w-28" />
      </div>
      <div className="flex-grow">
        <p className="text-right text-[16px] lg:text-[19px] font-bold -mr-10">Comida</p>
        <img src="./cena-romantica.png" alt="comida" className="h-20 w-20 ml-24 md:h-28 sm:w-28" />
        <p className="text-right text-[11px] lg:text-[17px] -mr-16">5:00 pm - 6:00 pm</p>
      </div>
      <div className="flex-grow">
        <p className="text-left text-[16px] lg:text-[19px] font-bold ml-5">Baile</p>
        <img src="./bola-de-disco.png" alt="baile" className="ml-2 h-20 w-20  mx-0 md:h-28 sm:w-28" />
        <p className="text-left text-[11px] lg:text-[17px] ml-2">6:30 pm - 11:30 pm</p>
      </div>
    </div>

    {/* Columna separadora */}
    <div className="flex flex-col items-center">
      <div className="h-full border-l-4 border-black"></div>
    </div>

    {/* Columna 3 */}
    <div className="flex flex-col gap-3 py-12">
      <div className="flex-grow">
        <p className="text-left text-[14px] lg:text-[19px] font-bold -ml-2">Llegada de Novios</p>
        <img src="./arco-de-la-boda.png" alt="arco" className="h-20 w-20  ml-7 md:h-28 sm:w-28" />
        <p className="text-left text-[11px] lg:text-[17px] ml-5">4:30 pm - 5:00 pm</p>
      </div>
      <div className="flex-grow">
        <p className="text-left text-[16px] lg:text-[19px] font-bold -ml-14">Pastel</p>
        <img src="./pastel.png" alt="pastel" className="-ml-16  h-20 w-20  md:h-28 sm:w-28" />
        <p className="text-left text-[11px] lg:text-[17px] -ml-16">6:00 pm - 6:30 pm</p>
      </div>
      <div className="flex-grow">
        
      </div>
    </div>
  </div>
</div>

{/* Sección de Confirmación de Asistencia */}
<div className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]">
  <h1 className="text-xl sm:text-2xl font-bold p-5 font-playfair">CONFIRMAR ASISTENCIA</h1>
  <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/anillos-de-boda.png" alt="dress code" />
  <p className="text-lg sm:text-xl p-7 text-center font-cursiveDancing">Confirma tu asistencia antes del 20 de diciembre</p>

  {/* Botón para redirigir al Google Form */}
  <button 
    className="bg-yellow-600 rounded-md p-3 w-40 h-14 flex items-center justify-center text-xl text-white font-cursiveDancing"
    onClick={() => window.location.href = ""}
  >
    Confirmar Asistencia
  </button>
</div>

<div className="flex flex-col items-center justify-center">
        <img src="/finalboda.webp" alt="acepto" />
        </div>

      </div>      
    </div>
  );
}
