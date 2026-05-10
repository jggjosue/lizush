"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";

import heroBg from "../../public/img/30.png";
import mainImg from "../../public/img/31.png";
import gal1 from "../../public/img/32.png";
import gal2 from "../../public/img/33.png";
import gal3 from "../../public/img/35.png";
import mat1 from "../../public/img/36.png";
import mat2 from "../../public/img/37.png";
import mat3 from "../../public/img/38.png";
import mat4 from "../../public/img/39.png";
import mat5 from "../../public/img/40.png";

export default function WellnessSalonPage() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="relative w-full font-serif text-[#4b3b33] bg-[#f6f0e7] min-h-screen">
      {/* Full-bleed warm paper background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroBg}
          alt="Fondo Wellness Salon"
          fill
          placeholder="blur"
          className={`object-cover object-center transition-opacity duration-700 ${bgLoaded ? "opacity-30" : "opacity-0"}`}
          onLoadingComplete={() => setBgLoaded(true)}
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f0e7]/95 via-[#f2ece2]/90 to-[#f0e6df]/95" />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-16">
        {/* Poster card — emulates the printed poster aesthetic */}
        <article className="relative border border-[#cfb89d] bg-[#f8f3ea] p-5 shadow-[0_24px_60px_rgba(60,40,25,0.18)] md:p-8">
          {/* Inner double border */}
          <div className="border border-[#cfb89d]/70 px-4 py-7 md:px-7 md:py-10">
            {/* Top decorative leaf */}
            <div className="flex justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a8895f"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
              >
                <path d="M12 2c-3 4-3 10 0 14 3-4 3-10 0-14z" />
                <path d="M12 22V10" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-center font-serif text-3xl tracking-[0.42em] text-[#4b3322] md:text-5xl">
              WELLNESS SALON
            </h1>
            <p className="mt-3 text-center text-[10px] tracking-[0.46em] text-[#a8895f] md:text-sm">
              LUCERNE, SWITZERLAND
            </p>

            {/* Hero image */}
            <div className="mt-7 overflow-hidden border border-[#cfb89d]/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={mainImg}
                  alt="Recepción Wellness Salon"
                  fill
                  placeholder="blur"
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 720px, 100vw"
                />
              </div>
            </div>

            {/* Three-image collage */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal1} alt="Detalle recepción" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal2} alt="Símbolo iluminado loto" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal3} alt="Sala de espera" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-9 text-center text-[10px] tracking-[0.46em] text-[#a8895f] md:text-sm">
              DISEÑO QUE NUTRE CUERPO, MENTE Y ALMA.
            </p>
            <div className="mx-auto mt-4 h-px w-24 bg-[#c9a978]" />

            {/* Description */}
            <p className="mx-auto mt-5 max-w-md text-center font-serif text-sm leading-relaxed text-[#5b4635] md:text-base">
              Un espacio dedicado al bienestar emocional y físico a través de la
              materialidad, la iluminación y la armonía espacial.
            </p>

            {/* Materials row */}
            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-5 gap-3 md:gap-5">
              {[
                { src: mat1, label: "TELA BOUCLÉ" },
                { src: mat2, label: "ÓNIX VETEADO" },
                { src: mat3, label: "ÓNIX VERDE" },
                { src: mat4, label: "MADERA CÁLIDA" },
                { src: mat5, label: "METAL CEPILLADO" },
              ].map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-2">
                  <div className="relative aspect-square w-full overflow-hidden border border-[#cfb89d]/70 shadow-sm">
                    <Image src={m.src} alt={m.label} fill placeholder="blur" className="object-cover object-center" sizes="120px" />
                  </div>
                  <p className="text-center text-[8px] tracking-[0.18em] text-[#7c5e3f] md:text-[10px]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Lizush badge & footer line */}
            <div className="mt-10 flex flex-col items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#cfb89d] bg-[#f8f3ea] shadow-[0_8px_18px_rgba(60,40,25,0.18)] md:h-24 md:w-24">
                <Image
                  src="/lizush-badge.png"
                  alt="Sello Lizush Architect"
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              </div>
              <div className="mx-auto mt-5 h-px w-32 bg-[#c9a978]" />
              <p className="mt-4 text-[10px] tracking-[0.42em] text-[#7c5e3f] md:text-sm">
                CIUDAD DE MEXICO, MX
              </p>
            </div>
          </div>
        </article>

        {/* CTA below poster */}
        <section className="mt-10 flex flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-2xl tracking-[0.18em] text-[#5b3f2e] md:text-3xl">
            Wellness Salon · Lucerna, Suiza
          </h2>
          <p className="max-w-xl text-sm text-[#5b4635]">
            Recepción y salones diseñados como un viaje sensorial: madera cálida,
            ónix translúcido y luz indirecta para crear un refugio contemporáneo
            de bienestar.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a
              href="/contacto"
              className="inline-block rounded border border-[#7b5b3d] bg-[#7b5b3d] px-6 py-3 text-xs tracking-[0.28em] text-white transition hover:opacity-95 md:text-sm"
            >
              SOLICITAR PROYECTO
            </a>
            <a
              href="/"
              className="inline-block rounded border border-[#855e3b] px-6 py-3 text-xs tracking-[0.28em] text-[#855e3b] transition hover:bg-[#855e3b]/10 md:text-sm"
            >
              VOLVER AL INICIO
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
