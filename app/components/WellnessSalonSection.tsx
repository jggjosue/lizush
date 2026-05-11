"use client";
import React from "react";
import Image from "next/image";

import bg from "../../public/img/30.png";
import mainImg from "../../public/img/31.png";
import gal1 from "../../public/img/32.png";
import gal2 from "../../public/img/33.png";
import gal3 from "../../public/img/35.png";
import mat1 from "../../public/img/36.png";
import mat2 from "../../public/img/37.png";
import mat3 from "../../public/img/38.png";
import mat4 from "../../public/img/39.png";
import mat5 from "../../public/img/40.png";

const materials = [
  { src: mat1, label: "TELA BOUCLÉ" },
  { src: mat2, label: "ÓNIX VETEADO" },
  { src: mat3, label: "ÓNIX VERDE" },
  { src: mat4, label: "MADERA CÁLIDA" },
  { src: mat5, label: "METAL CEPILLADO" },
];

export function WellnessSalonSection() {
  return (
    <section className="relative w-full overflow-hidden py-14 text-[#4b3b33] md:py-20">
      {/* Background full-bleed image with cream overlay (matches poster paper feel) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={bg}
          alt=""
          fill
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f0e7]/95 via-[#f2ece2]/92 to-[#f0e6df]/96" />

      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
        {/* Section eyebrow */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="text-[10px] tracking-[0.5em] text-[#a8895f] md:text-xs">
            ESPACIOS DE BIENESTAR
          </span>
          <div className="mt-3 h-px w-20 bg-[#c9a978]" />
        </div>

        {/* Poster card */}
        <article className="relative border border-[#cfb89d] bg-[#f8f3ea] p-4 shadow-[0_24px_60px_rgba(60,40,25,0.18)] md:p-7">
          <div className="border border-[#cfb89d]/70 px-3 py-6 md:px-6 md:py-9">
            {/* Decorative leaf */}
            <div className="flex justify-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a8895f"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2c-3 4-3 10 0 14 3-4 3-10 0-14z" />
                <path d="M12 22V10" />
              </svg>
            </div>

            <h2 className="mt-2 text-center font-serif text-2xl tracking-[0.42em] text-[#4b3322] md:text-4xl">
              WELLNESS SALON
            </h2>
            <p className="mt-2 text-center text-[10px] tracking-[0.46em] text-[#a8895f] md:text-sm">
              LUCERNE, SWITZERLAND
            </p>

            {/* Hero image */}
            <div className="mt-6 overflow-hidden border border-[#cfb89d]/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={mainImg}
                  alt="Recepción Wellness Salon"
                  fill
                  placeholder="blur"
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 760px, 100vw"
                />
              </div>
            </div>

            {/* Three image collage */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal1} alt="Detalle recepción" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal2} alt="Símbolo iluminado" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
              <div className="relative aspect-square overflow-hidden border border-[#cfb89d]/60">
                <Image src={gal3} alt="Sala de espera" fill placeholder="blur" className="object-cover object-center" sizes="(min-width: 768px) 240px, 33vw" />
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-8 text-center text-[10px] tracking-[0.46em] text-[#a8895f] md:text-sm">
              DISEÑO QUE NUTRE CUERPO, MENTE Y ALMA.
            </p>
            <div className="mx-auto mt-4 h-px w-20 bg-[#c9a978]" />

            <p className="mx-auto mt-5 max-w-md text-center font-serif text-sm leading-relaxed text-[#5b4635] md:text-base">
              Un espacio dedicado al bienestar emocional y físico a través de la
              materialidad, la iluminación y la armonía espacial.
            </p>

            {/* Materials */}
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-5 gap-3 md:gap-5">
              {materials.map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-2">
                  <div className="relative aspect-square w-full overflow-hidden border border-[#cfb89d]/70 shadow-sm">
                    <Image src={m.src} alt={m.label} fill placeholder="blur" className="object-cover object-center" sizes="100px" />
                  </div>
                  <p className="text-center text-[8px] tracking-[0.18em] text-[#7c5e3f] md:text-[10px]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Badge & footer */}
            <div className="mt-9 flex flex-col items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#cfb89d] bg-[#f8f3ea] shadow-[0_8px_18px_rgba(60,40,25,0.18)] md:h-20 md:w-20">
                <Image
                  src="/lizush-badge.png"
                  alt="Sello Lizush Architect"
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
              <div className="mx-auto mt-4 h-px w-28 bg-[#c9a978]" />
              <p className="mt-3 text-[10px] tracking-[0.42em] text-[#7c5e3f] md:text-sm">
                CIUDAD DE MEXICO, MX
              </p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            href="/wellness-salon"
            className="inline-block rounded border border-[#7b5b3d] bg-[#7b5b3d] px-7 py-3 text-xs tracking-[0.28em] text-white transition hover:opacity-95 md:text-sm"
          >
            VER PROYECTO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
}
