"use client";

import { useLanguage } from "../_context/LanguageContext";

const servicesES = [
  {
    title: "DISEÑO DE INTERIORES",
    desc: "Creación de espacios funcionales, estéticos y atemporales que reflejan la esencia de quienes los habitan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      </svg>
    ),
  },
  {
    title: "DISEÑO ARQUITECTÓNICO",
    desc: "Desarrollo de proyectos arquitectónicos con un enfoque en la forma, la función, la materialidad y el contexto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 9h18M9 9v12M15 9v12" />
      </svg>
    ),
  },
  {
    title: "VISUALIZACIÓN ARQUITECTÓNICA",
    desc: "Imágenes y recorridos fotorrealistas que comunican la visión del proyecto con claridad y emoción.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2" y="4" width="20" height="14" rx="1" />
        <path d="M8 20h8M12 18v2" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    title: "IDENTIDAD DE MARCA",
    desc: "Diseño de identidades visuales auténticas que conectan la esencia de tu marca con su espacio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="10" height="10" rx="1" />
        <rect x="11" y="11" width="10" height="10" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "DIRECCIÓN CREATIVA",
    desc: "Conceptualización y dirección visual de proyectos que cuentan historias coherentes y memorables.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "SELECCIÓN DE MATERIALES",
    desc: "Curaduría de materiales naturales y acabados de alta calidad que aportan textura, calidez y autenticidad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2l3.5 7 7.5 1-5.5 5.3 1.3 7.7L12 19.5l-6.8 3.5 1.3-7.7L1 10l7.5-1z" />
      </svg>
    ),
  },
  {
    title: "DESARROLLO DE CONCEPTO",
    desc: "Exploración y desarrollo de conceptos de diseño que dan vida a ideas únicas y funcionales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "ASESORÍA Y PROPUESTA\nDE CONSTRUCCIÓN",
    desc: "Acompañamiento en la transición del diseño a la construcción, con propuestas viables y eficientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
      </svg>
    ),
  },
];

const servicesEN = [
  { title: "INTERIOR DESIGN", desc: "Creation of functional, aesthetic and timeless spaces that reflect the essence of those who inhabit them." },
  { title: "ARCHITECTURAL DESIGN", desc: "Development of architectural projects with a focus on form, function, materiality and context." },
  { title: "ARCHITECTURAL VISUALIZATION", desc: "Photorealistic images and walkthroughs that communicate the project's vision with clarity and emotion." },
  { title: "BRAND IDENTITY", desc: "Design of authentic visual identities that connect the essence of your brand with its space." },
  { title: "CREATIVE DIRECTION", desc: "Conceptualization and visual direction of projects that tell coherent and memorable stories." },
  { title: "MATERIAL SELECTION", desc: "Curation of natural materials and high-quality finishes that bring texture, warmth and authenticity." },
  { title: "CONCEPT DEVELOPMENT", desc: "Exploration and development of design concepts that bring unique and functional ideas to life." },
  { title: "CONSTRUCTION ADVISORY\n& PROPOSAL", desc: "Accompaniment in the transition from design to construction, with viable and efficient proposals." },
];

export default function Servicios1() {
  const { lang } = useLanguage();

  const services = servicesES.map((s, i) => ({
    ...s,
    title: lang === "en" ? servicesEN[i].title : s.title,
    desc: lang === "en" ? servicesEN[i].desc : s.desc,
  }));

  const headline = lang === "en" ? "SERVICES" : "SERVICIOS";
  const subtext = lang === "en"
    ? "We offer comprehensive architecture, interior design and visualization solutions, designed to transform ideas into meaningful spatial experiences."
    : "Ofrecemos soluciones integrales de arquitectura, interiorismo y visualización, diseñadas para transformar ideas en experiencias espaciales significativas.";
  const footerTag = lang === "en"
    ? "ARCHITECTURE | INTERIOR DESIGN | VISUALIZATION"
    : "ARQUITECTURA | INTERIORISMO | VISUALIZACIÓN";

  return (
    <>
      <style>{`
        body { background-color: #f0e8dc !important; }
        body::before { content: none; }
        body::after { content: none; }
        body > header, body header:first-of-type {
          background: rgba(240,232,220,0.90) !important;
          border-bottom-color: rgba(176,134,84,0.20) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        #contacto, body > footer {
          background: rgba(200,185,165,0.90) !important;
        }
        #contacto .border-t { border-color: rgba(176,134,84,0.20) !important; }
      `}</style>

      <div className="flex flex-1 min-h-[calc(100dvh-4rem)]">

        {/* ── Left panel ── */}
        <div className="flex flex-col w-full md:w-[44%] bg-[#f0e8dc] px-7 sm:px-10 py-8 overflow-y-auto">

          {/* Branding */}
          <div className="mb-6">
            <p className="font-serif font-light tracking-[0.38em] text-[#3a2611]" style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)" }}>
              LIZUSH
            </p>
            <p className="font-serif tracking-[0.4em] text-[#3a2611]/55" style={{ fontSize: "clamp(0.55rem,0.9vw,0.72rem)" }}>
              ARCHITECT STUDIO
            </p>
            <span aria-hidden className="mt-3 block h-px w-8 bg-[#b08654]/50" />
          </div>

          {/* Title */}
          <h1
            className="font-serif font-light tracking-[0.04em] leading-none text-[#3a2611] mb-3"
            style={{ fontSize: "clamp(2.6rem,6vw,4.2rem)" }}
          >
            {headline}
          </h1>
          <span aria-hidden className="block h-px w-10 bg-[#b08654]/60 mb-4" />

          {/* Description */}
          <p className="font-serif text-[#3a2611]/75 leading-relaxed mb-8" style={{ fontSize: "clamp(0.78rem,1.1vw,0.92rem)" }}>
            {subtext}
          </p>

          {/* Services list */}
          <ul className="flex flex-col gap-5 flex-1">
            {services.map((s) => (
              <li key={s.title} className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 text-[#b08654]/80 mt-0.5" style={{ width: "clamp(20px,2.8vw,28px)", height: "clamp(20px,2.8vw,28px)" }}>
                  {s.icon}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <h2
                    className="font-serif font-semibold tracking-[0.12em] text-[#3a2611] whitespace-pre-line leading-tight"
                    style={{ fontSize: "clamp(0.7rem,0.95vw,0.82rem)" }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="font-serif text-[#3a2611]/65 leading-relaxed"
                    style={{ fontSize: "clamp(0.68rem,0.88vw,0.78rem)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t border-[#b08654]/20">
            <p className="font-serif tracking-[0.24em] text-[#3a2611]/50" style={{ fontSize: "clamp(0.52rem,0.7vw,0.6rem)" }}>
              {footerTag}
            </p>
            <p className="mt-1 font-serif tracking-[0.32em] text-[#3a2611]/45" style={{ fontSize: "clamp(0.52rem,0.7vw,0.6rem)" }}>
              LIZUSH — MX
            </p>
          </footer>
        </div>

        {/* ── Right panel: photo ── */}
        <div
          className="hidden md:block md:w-[56%] sticky top-16 h-[calc(100dvh-4rem)]"
          style={{
            backgroundImage: "url(/img/45.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Interior diseño Lizush"
        />
      </div>
    </>
  );
}
