import React, { useState } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
import { motion, AnimatePresence } from "framer-motion";


export default function Intinerario() {
  // Estados para manejar el formulario
  const[mostraModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");
  const enviarConfirmacion = async () => {
  if (!nombreInvitado || !asistencia) {
    setError("Completa tu nombre y confirma asistencia");
    return;
  }

  setError("");

  const data = {
    nombre: nombreInvitado,
    asistencia,
    invitados,
    mensaje: mensajeInvitado,
  };

  try {
    // 🔥 GUARDAR EN GOOGLE SHEETS
    await fetch("https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // 📱 WHATSAPP
    const numero = "522214105012";

    const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

¡Nos vemos en la boda! 💍🎉`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    // 🧹 RESET
    setNombreInvitado("");
    setMensajeInvitado("");
    setAsistencia("");
    setInvitados(1);

  } catch (error) {
    console.error("Error:", error);
    setError("Hubo un error al enviar");
  }
};

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

  {/* Botón para ver datos bancarios*/}
  <button 
    className="bg-[#9E8E7B] rounded-md p-3 w-96 h-14 flex items-center justify-center text-xl text-white "
    onClick={() => setMostrarModal(true)}
  >
    Ver Datos Bancarios
  </button>
<AnimatePresence>
  {mostraModal && (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={() => setMostrarModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-80 h-56 rounded-2xl p-5 text-white overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0, y: 80 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 80 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(135deg, #9E8E7B, #5f564c)",
        }}
      >
        {/* ✨ Brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-[shine_3s_infinite]" />

        {/* 🏦 Logo banco */}
        <div className="flex justify-between items-center">
          <h2 className="text-sm tracking-widest">SANTANDER</h2>
          <span className="text-xs opacity-70">VISA</span>
        </div>

        {/* 💳 Chip */}
        <div className="w-10 h-7 bg-yellow-300 rounded-md mt-4 shadow-inner"></div>

        {/* 🔢 Número */}
        <p className="text-lg tracking-[0.2em] mt-6">
          1234 5678 9012 3456
        </p>

        {/* 👤 Nombre + fecha */}
        <div className="flex justify-between items-end mt-4 text-xs">
          <div>
            <p className="opacity-70">Card Holders</p>
            <p className="text-sm tracking-wide">JUAN PEREZ</p>
          </div>
          <div>
            <p className="opacity-70">VALID THRU</p>
            <p>06/20</p>
          </div>
        </div>

        {/* 📋 Botón copiar */}
        <button
          onClick={copiarCuenta}
          className="mt-4 w-full bg-white text-black py-1 rounded-md text-xs font-semibold hover:opacity-80 transition"
        >
          📋 Copiar número
        </button>

        {/* ✅ Feedback */}
        {copiado && (
          <p className="absolute bottom-10 left-0 right-0 text-center text-green-200 text-xs">
            ✅ Copiado
          </p>
        )}

        {/* ❌ Cerrar */}
        <button
          className="absolute top-1 right-3 text-white text-lg"
          onClick={() => setMostrarModal(false)}
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</div>

{/* Sección de Confirmación de Asistencia */}

<div className="flex flex-col items-center justify-center">
        <img src="/finalboda.webp" alt="acepto" />
        </div>
<div className="flex flex-col items-center justify-center gap-4 h-auto py-10 bg-gray-50 rounded-2xl shadow-md">
  <h1 className="text-xl sm:text-2xl font-bold font-playfair">
    CONFIRMAR ASISTENCIA
  </h1>

  <p>Por favor, confirma tu asistencia</p>

  {/* Nombre */}
  <input
    type="text"
    placeholder="Nombre y apellido"
    value={nombreInvitado}
    onChange={(e) => setNombreInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg focus:ring-2 focus:ring-[#9E8E7B]"
  />

  {/* Asistencia */}
  <div className="flex gap-4">
    <button
      onClick={() => setAsistencia("Sí asistiré")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "Sí asistiré"
          ? "bg-green-500 text-white"
          : "bg-white"
      }`}
    >
      ✅ Asistiré
    </button>

    <button
      onClick={() => setAsistencia("No podré asistir")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "No podré asistir"
          ? "bg-red-500 text-white"
          : "bg-white"
      }`}
    >
      ❌ No asistiré
    </button>
  </div>

  {/* Número de invitados */}
  <input
    type="number"
    min="1"
    value={invitados}
    onChange={(e) => setInvitados(e.target.value)}
    className="w-80 p-3 border rounded-lg text-center"
  />

  {/* Mensaje */}
  <textarea
    placeholder="Mensaje para los novios (opcional)"
    value={mensajeInvitado}
    onChange={(e) => setMensajeInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg"
  />

  {/* Error */}
  {error && (
    <p className="text-red-500 text-sm">{error}</p>
  )}

  {/* Botón */}
  <button
  onClick={enviarConfirmacion}
  className="bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
>
  Enviar Confirmación
</button>
</div>

      </div>      
    </div>
  );
}
