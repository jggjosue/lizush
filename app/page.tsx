"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { ServiceMenu } from "./components/ServiceMenu";
import StudioHeroSection from "./components/StudioHeroSection";
import { WellnessSalonSection } from "./components/WellnessSalonSection";

import hero20 from "../public/img/20.png";
import poster1 from "../public/img/1.png";
import thumb21 from "../public/img/21.jpeg";
import thumb25 from "../public/img/25.jpeg";
import thumb26 from "../public/img/26.jpeg";
import thumb11 from "../public/img/11.jpeg";
import mat34 from "../public/img/34.png";
import mat27 from "../public/img/27.png";
import mat28 from "../public/img/28.png";
import mat29 from "../public/img/29.png";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <>
      <StudioHeroSection />
      <div className="relative w-full font-serif text-[#4b3b33] bg-[#f6f0e7]">
        {/* Main background image (full-bleed) */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={hero20}
            alt="Fondo principal"
            fill
            placeholder="blur"
            className={`object-cover object-center transition-opacity duration-700 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoadingComplete={() => setHeroLoaded(true)}
            priority
          />
        </div>

        {/* Warm translucent overlay to match the poster aesthetic */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#f0e6df]/80" />

        <main className="relative min-h-screen w-full flex flex-col">
          {/* Hero: split layout with title + poster preview */}
          <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-stretch gap-8 px-6 py-16 md:flex-row md:items-center">
            {/* Left: Title & actions */}
            <div className="md:w-1/2">
              <p className="font-serif text-6xl tracking-[0.6em] text-[#5b3f2e] md:text-8xl">ESPACIOS SAGRADOS</p>
              <div className="mt-6 max-w-xl">
                <h2 className="font-serif text-2xl text-[#8b6b55]">Iglesia Nayarit — Arquitectura espiritual</h2>
                <p className="mt-4 text-sm text-[#4b3b33]">Un espacio espiritual contemporáneo donde la materialidad, la luz y el simbolismo construyen una atmósfera de calma, introspección y conexión.</p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="/iglesia-nayarit" className="inline-block rounded border border-[#7b5b3d] bg-[#7b5b3d] px-6 py-3 text-sm font-medium text-white transition hover:opacity-95">VER PROYECTO</a>
                <a href="/contacto" className="inline-block rounded border border-[#855e3b] px-6 py-3 text-sm font-medium text-[#855e3b] bg-transparent">CONTACTAR</a>
              </div>

              <div className="mt-6">
                <ServiceMenu />
              </div>
            </div>

            {/* Right: Poster / image card using assets from public/img (next/image) */}
            <div className="md:w-1/2">
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-md border border-[#e2d6cc] bg-[#fffaf6]/80 shadow-lg">
                {/* Poster background image */}
                <div className="relative h-[540px] w-full">
                  <Image
                    src={poster1}
                    alt="Poster Iglesia Nayarit"
                    fill
                    placeholder="blur"
                    className={`object-cover object-center transition-opacity duration-700 ${posterLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoadingComplete={() => setPosterLoaded(true)}
                    priority
                  />
                </div>
              </div>

              {/* Small gallery strip using some images from public/img */}
              <div className="mt-4 flex gap-3">
                <div className="h-20 w-20 flex-shrink-0 rounded-sm overflow-hidden relative">
                  <Image src={thumb21} alt="Detalle 1" fill placeholder="blur" className="object-cover object-center" />
                </div>
                <div className="h-20 w-20 flex-shrink-0 rounded-sm overflow-hidden relative">
                  <Image src={thumb25} alt="Detalle 2" fill placeholder="blur" className="object-cover object-center" />
                </div>
                <div className="h-20 w-20 flex-shrink-0 rounded-sm overflow-hidden relative">
                  <Image src={thumb26} alt="Detalle 3" fill placeholder="blur" className="object-cover object-center" />
                </div>
                <div className="h-20 w-20 flex-shrink-0 rounded-sm overflow-hidden relative">
                  <Image src={thumb11} alt="Detalle 4" fill placeholder="blur" className="object-cover object-center" />
                </div>
              </div>
            </div>
          </section>

          {/* Secondary section: Materials & philosophy */}
          <section className="z-10 mx-auto w-full max-w-6xl px-6 py-12">
            <div className="rounded-md bg-white/70 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#7b5b3d]">Arquitectura que trasciende</h3>
              <p className="mt-4 text-sm text-[#5a4a3f]">Materiales naturales, luz calibrada y una paleta que conecta lo físico con lo espiritual. Proyectos residenciales y de espacios sagrados con atención al detalle y oficio.</p>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-start gap-2">
                  <Image src={mat34} alt="Piedra travertino" width={64} height={64} placeholder="blur" className="rounded" />
                  <p className="text-xs text-[#5a4a3f]">Piedra travertino</p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <Image src={mat27} alt="Madera natural" width={64} height={64} placeholder="blur" className="rounded" />
                  <p className="text-xs text-[#5a4a3f]">Madera natural</p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <Image src={mat28} alt="Vidrio" width={64} height={64} placeholder="blur" className="rounded" />
                  <p className="text-xs text-[#5a4a3f]">Vidrio</p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <Image src={mat29} alt="Metal mate" width={64} height={64} placeholder="blur" className="rounded" />
                  <p className="text-xs text-[#5a4a3f]">Metal mate</p>
                </div>
              </div>
            </div>
          </section>

          {/* Nueva sección: Wellness Salon — Lucerne, Switzerland */}
          <WellnessSalonSection />

          <SiteFooter />
        </main>
      </div>
    </>
  );
}
