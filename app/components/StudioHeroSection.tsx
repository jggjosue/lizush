import Image from "next/image";
import hero20 from "@/public/img/20.png";

export default function StudioHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-[#f6f0e7] overflow-hidden">
      {/* Fondo principal con imagen y overlay cálido */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={hero20}
          alt="Fondo cálido Lizush"
          fill
          placeholder="blur"
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f0e7]/60 to-[#5b3f2e]/30" />
      </div>
      {/* Logo y título */}
      <div className="relative z-10 flex flex-col items-center gap-2 mt-12">
        <h1 className="font-serif text-4xl md:text-6xl tracking-[0.25em] text-[#5b3f2e] drop-shadow-lg">
          LIZUSH
        </h1>
        <span className="font-serif text-lg md:text-2xl tracking-[0.2em] text-[#8b6b55] mb-2">
          ARCHITECT STUDIO
        </span>
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-base tracking-[0.2em] text-[#7b5b3d] mb-6">
          <span>ARQUITECTURA</span>
          <span className="opacity-40">•</span>
          <span>INTERIORISMO</span>
          <span className="opacity-40">•</span>
          <span>VISUALIZACIÓN</span>
        </div>
      </div>
      {/* Frase central */}
      <blockquote className="relative z-10 mt-4 mb-10 max-w-2xl mx-auto text-[#4b3b33] font-serif text-xl md:text-2xl italic">
        “Designing spaces that communicate, inspire and connect.”
      </blockquote>
      {/* Redes y contacto */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto bg-white/70 rounded-lg p-6 md:p-10 shadow-lg">
        <div>
          <h3 className="text-xs tracking-[0.3em] text-[#7b5b3d] mb-2">SÍGUENOS</h3>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-[#5b3f2e] text-sm">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#8b6b55] transition">@lizush_architect</a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#8b6b55] transition">@lizush_architect</a>
            </li>
            <li>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#8b6b55] transition">@lizush_architect</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#8b6b55] transition">Lizush Architect Studio</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs tracking-[0.3em] text-[#7b5b3d] mb-2">CONTACTO</h3>
          <ul className="space-y-1 text-[#5b3f2e] text-sm">
            <li>Arq. Elizabeth Guzmán</li>
            <li>
              <a href="mailto:elizabethguzman@lizusharchitect.com" className="hover:text-[#8b6b55] transition">elizabethguzman@lizusharchitect.com</a>
            </li>
            <li>Ciudad de México, MX</li>
          </ul>
        </div>
      </div>
      {/* Sello inferior */}
      <div className="relative z-10 mt-10 flex justify-center">
        <div className="rounded-full border border-[#cfb89d] bg-[#f8f3ea] px-8 py-2 text-[#7b5b3d] font-serif text-lg tracking-[0.2em] shadow">
          Lizush Architect
        </div>
      </div>
    </section>
  );
}
