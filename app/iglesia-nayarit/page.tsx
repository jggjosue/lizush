"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";

import hero20 from "../../public/img/20.png";
import poster1 from "../../public/img/1.png";
import gal21 from "../../public/img/21.jpeg";
import gal25 from "../../public/img/25.jpeg";
import gal26 from "../../public/img/26.jpeg";
import gal11 from "../../public/img/11.jpeg";
import mat34 from "../../public/img/34.png";
import mat27 from "../../public/img/27.png";
import mat28 from "../../public/img/28.png";
import mat29 from "../../public/img/29.png";

export default function IglesiaNayaritPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <div className="relative w-full font-serif text-[#4b3b33] bg-[#f6f0e7] min-h-screen">
      {/* Hero / Poster as full-bleed section */}
      <header className="relative h-screen w-full overflow-hidden">
        <Image
          src={hero20}
          alt="Fondo"
          fill
          placeholder="blur"
          className={`object-cover object-center transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setHeroLoaded(true)}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f0e6df]/80 -z-10" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-between gap-8 px-6">
          <div className="w-1/2">
            <p className="text-7xl tracking-[0.6em] text-[#5b3f2e]">ESPACIOS SAGRADOS</p>
            <h1 className="mt-6 text-2xl text-[#8b6b55]">Iglesia Nayarit</h1>
            <p className="mt-4 max-w-md text-sm text-[#4b3b33]">Un espacio espiritual contemporáneo donde la materialidad, la luz y el simbolismo construyen una atmósfera de calma, introspección y conexión.</p>
            <div className="mt-8 flex gap-4">
              <a href="#proyecto" className="inline-block rounded border border-[#7b5b3d] bg-[#7b5b3d] px-6 py-3 text-sm font-medium text-white">VER DETALLES</a>
              <a href="#contacto" className="inline-block rounded border border-[#855e3b] px-6 py-3 text-sm font-medium text-[#855e3b]">CONTACTAR</a>
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="relative w-[420px] overflow-hidden rounded-md border border-[#e2d6cc] bg-[#fffaf6]/90 shadow-lg">
              <Image
                src={poster1}
                alt="Poster Iglesia Nayarit"
                width={420}
                height={540}
                placeholder="blur"
                className={`object-cover object-center transition-opacity duration-700 ${posterLoaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() => setPosterLoaded(true)}
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Project details */}
      <main id="proyecto" className="mx-auto max-w-5xl px-6 py-12">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-[#5b3f2e]">Concepto</h2>
            <p className="mt-4 text-sm text-[#4b3b33]">El proyecto apuesta por la sencillez material y el diálogo entre luz y materia. La fachada neutra y el uso de travertino contraponen la calidez de la estructura de madera interior.</p>

            <div className="mt-6 grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Image src={mat34} alt="Piedra" width={96} height={96} placeholder="blur" className="rounded" />
                <p className="text-xs text-[#5a4a3f]">Piedra</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={mat27} alt="Madera" width={96} height={96} placeholder="blur" className="rounded" />
                <p className="text-xs text-[#5a4a3f]">Madera</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={mat28} alt="Vidrio" width={96} height={96} placeholder="blur" className="rounded" />
                <p className="text-xs text-[#5a4a3f]">Vidrio</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={mat29} alt="Metal" width={96} height={96} placeholder="blur" className="rounded" />
                <p className="text-xs text-[#5a4a3f]">Metal</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-[#855e3b]">Galería</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image src={gal21} alt="Galeria 1" width={600} height={400} placeholder="blur" className="object-cover rounded" />
              <Image src={gal25} alt="Galeria 2" width={600} height={400} placeholder="blur" className="object-cover rounded" />
              <Image src={gal26} alt="Galeria 3" width={600} height={400} placeholder="blur" className="object-cover rounded" />
              <Image src={gal11} alt="Galeria 4" width={600} height={400} placeholder="blur" className="object-cover rounded" />
            </div>
          </div>
        </section>

        <section id="contacto" className="mt-12 rounded-md bg-white/70 p-8">
          <h4 className="text-xl text-[#5b3f2e]">Contacto</h4>
          <p className="mt-2 text-sm text-[#4b3b33]">Para más información o consultas, escríbenos y te atenderemos.</p>
          <div className="mt-4">
            <a href="/contacto" className="inline-block rounded border border-[#7b5b3d] bg-[#7b5b3d] px-6 py-3 text-sm font-medium text-white">Enviar mensaje</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
