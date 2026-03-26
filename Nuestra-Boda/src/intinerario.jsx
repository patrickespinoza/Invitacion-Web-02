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

      <div className="flex flex-col items-center justify-center h-96 md:h-80 lg:h-[700px] bg-black text-white" >
          <h1 className="text-xl sm:text-6xl font-bold p-5 font-cursiveDancing">¡Estas invitado!</h1>
          <p className="text-lg sm:text-4xl p-7 text-center ">Nos encantaria que seas parte de este momento tan especial para nosotros</p>
          <p className="text-lg sm:text-4xl p-7 text-center">¡Falta Poco!</p>
          {/* <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/pareja-de-boda.png" alt="dress code" /> */}
        </div>
       <div className="flex flex-col items-center justify-center p-7 bg-black">
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
  <div className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]">
  <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/regalo1.png" alt="Regalo" />
  <h1 className="text-xl sm:text-2xl font-bold p-3 font-playfair">REGALOS</h1>
  <p className="text-lg sm:text-xl p-7 text-center ">Ya tenemos pensado el ferrari, la mansion y el velero. Ahora lo unico que onos falta es el dinero</p>

  {/* Botón para redirigir al Google Form */}
  <button 
    className="bg-[#9E8E7B] rounded-md p-3 w-96 h-14 flex items-center justify-center text-xl text-white "
    onClick={() => window.location.href = ""}
  >
    Ver Datos Bancarios
  </button>
  <p>Banco Santander</p>
  <p>xxxx xxxx xxxx xxxx</p>
</div>

{/* Sección de Confirmación de Asistencia */}
<div className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]">
  <h1 className="text-xl sm:text-2xl font-bold p-5 font-playfair">CONFIRMAR ASISTENCIA</h1>
  <p>Por favor, confirma tu asistencia</p>
  <p>¡Esperamos que este alli!</p>
  <input type="text" placeholder="Nombre y apellido" className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E8E7B]" />
<input type="text" placeholder="Felicita a los novios aqui!" className="w-80 max-w-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E8E7B]" />
  {/* Botón para redirigir al Google Form */}
  <button 
    className="bg-[#9E8E7B] rounded-md p-3 w-40 h-14 flex items-center justify-center text-xl text-white "
    onClick={() => window.location.href = ""}
  >
    Enviar Respuesta
  </button>
</div>

<div className="flex flex-col items-center justify-center">
        <img src="/finalboda.webp" alt="acepto" />
        </div>

      </div>      
    </div>
  );
}
