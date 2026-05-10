import Image from "next/image";

export function PosterSection() {
  return (
    <section className="bg-[#f2ece2] py-10 text-[#5b4635] md:py-16">
      <article className="w-full border-y border-[#cfbda3] bg-[#f8f3ea] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.12)] md:p-4">
        <div className="relative overflow-hidden border border-[#cfb89d]">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: "url('/poster-background-main.png')" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f3ea]/20 to-[#f8f3ea]" />

          <div className="relative px-3 pb-6 pt-[58%] text-center md:px-8 md:pt-[56%]">
          <h2 className="font-serif text-5xl tracking-[0.2em] md:text-7xl">LIZUSH</h2>
          <p className="mt-2 text-sm tracking-[0.42em] md:text-[1.75rem]">ARCHITECT STUDIO</p>

          <div className="mt-5 h-px w-36 bg-[#c9a978] mx-auto" />
          <p className="mt-5 text-sm leading-relaxed tracking-[0.2em] md:text-[1.95rem]">
            ARQUITECTURA • INTERIORISMO
            <br />
            CONCEPTO & DESARROLLO DE MARCA
          </p>

          <p className="mt-7 max-w-xl font-serif text-4xl italic leading-tight md:text-6xl mx-auto">
            From brand identity to spatial experience
          </p>

          <Image
            src="/lizush-badge.png"
            alt="Sello Lizush Architect Studio"
            width={220}
            height={220}
            className="mt-6 h-20 w-20 rounded-full object-cover shadow-[0_8px_16px_rgba(0,0,0,0.24)] md:h-24 md:w-24 mx-auto"
          />

          <p className="mt-6 text-sm tracking-[0.35em] md:text-[2rem]">CIUDAD DE MEXICO, MX</p>
          <div className="mt-3 h-px w-20 bg-[#c9a978] mx-auto" />
          </div>
        </div>
      </article>
    </section>
  );
}
