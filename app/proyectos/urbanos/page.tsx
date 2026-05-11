import { Leaf } from "../../_components/Leaf";

const circleIcons = [
  {
    bg: "#6b7a55",
    label: "PAISAJE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} strokeLinecap="round" className="h-full w-full">
        <path d="M12 2c-4 6-6 9-6 13a6 6 0 0012 0c0-4-2-7-6-13z" />
        <path d="M12 9v7" />
      </svg>
    ),
  },
  {
    bg: "#c4a882",
    label: "ESPACIO PÚBLICO",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} strokeLinecap="round" className="h-full w-full">
        <circle cx="8" cy="8" r="2" /><circle cx="16" cy="8" r="2" />
        <path d="M4 20c0-2.8 1.8-4 4-4h8c2.2 0 4 1.2 4 4" />
      </svg>
    ),
  },
  {
    bg: "#9aaa98",
    label: "MOVILIDAD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} strokeLinecap="round" className="h-full w-full">
        <circle cx="6" cy="16" r="2" /><circle cx="18" cy="16" r="2" />
        <path d="M6 16h12M8 16l4-8 4 8M14 10h3" />
      </svg>
    ),
  },
  {
    bg: "#7a9aaa",
    label: "COMUNIDAD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} strokeLinecap="round" className="h-full w-full">
        <circle cx="12" cy="7" r="2" />
        <circle cx="6" cy="11" r="1.5" /><circle cx="18" cy="11" r="1.5" />
        <path d="M9 20c0-2 1.3-3 3-3s3 1 3 3M3 18c0-1.5 1-2.5 3-2.5M21 18c0-1.5-1-2.5-3-2.5" />
      </svg>
    ),
  },
];

export default function ProyectosUrbanos() {
  return (
    <>
      <style>{`
        body {
          background-color: transparent !important;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -2;
          background-color: #e8dcc8;
        }
        body::after {
          content: none;
        }
        body > header,
        body header:first-of-type {
          background: rgba(232,220,200,0.88) !important;
          border-bottom-color: rgba(176,134,84,0.20) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        #contacto,
        body > footer {
          background: rgba(200,182,155,0.92) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        #contacto .border-t {
          border-color: rgba(176,134,84,0.20) !important;
        }
      `}</style>
    <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-2xl text-[#3a2611]"
          style={{ background: "rgba(232,220,200,0.45)" }}
        >
        {/* Frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(180,140,80,0.28)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-6 sm:px-10 pt-5 pb-4 gap-3">

          {/* Header */}
          <header className="flex flex-col items-center text-center gap-0.5">
            <div className="flex w-full items-center gap-3 max-w-[380px] mx-auto">
              <span className="h-px flex-1 bg-[#b08654]/55" />
              <span className="font-serif tracking-[0.38em] text-[#b08654]" style={{ fontSize: "clamp(0.58rem,0.82vw,0.72rem)" }}>
                PROYECTOS
              </span>
              <span className="h-px flex-1 bg-[#b08654]/55" />
            </div>
            <h1
              className="font-serif font-light tracking-[0.10em] leading-none text-[#3a2611]"
              style={{ fontSize: "clamp(2.2rem,5.8vw,4.6rem)" }}
            >
              URBANOS
            </h1>
            <p className="mt-1 font-serif tracking-[0.22em] text-[#3a2611]/65" style={{ fontSize: "clamp(0.52rem,0.75vw,0.65rem)" }}>
              PLANEACIÓN MAESTRA Y DISEÑO URBANO
            </p>
            <span aria-hidden className="mt-1.5 block h-px w-20 bg-[#b08654]/60" />
          </header>

          {/* Main: large photo left + concepto right */}
          <div className="grid grid-cols-[60%_40%] gap-3 flex-[2.6] min-h-0">
            <div
              role="img"
              aria-label="Parque urbano con espejo de agua"
              className="h-full w-full rounded-sm shadow-md"
              style={{
                backgroundImage: "url(/img/36.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex flex-col gap-2 pt-1">
              <h2 className="font-serif font-light tracking-[0.10em]" style={{ fontSize: "clamp(0.82rem,1.3vw,1.05rem)" }}>
                CONCEPTO
              </h2>
              <p className="font-serif leading-relaxed text-[#3a2611]/85" style={{ fontSize: "clamp(0.6rem,0.85vw,0.75rem)" }}>
                Diseño urbano integral enfocado en la conexión entre espacio, naturaleza y comunidad.
              </p>
              <span aria-hidden className="block h-px w-8 bg-[#b08654]/55" />
              <ul className="flex flex-col gap-1.5">
                {["Conectividad peatonal", "Integración de áreas verdes", "Sensibilidad al contexto", "Experiencia urbana"].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-[0.45em] font-serif text-[#b08654]" style={{ fontSize: "clamp(0.58rem,0.82vw,0.72rem)" }}>–</span>
                    <span className="font-serif text-[#b08654]" style={{ fontSize: "clamp(0.58rem,0.82vw,0.72rem)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom photos: 2 small + 1 map */}
          <div className="grid grid-cols-3 gap-3 flex-[1.8] min-h-0">
            <div
              role="img" aria-label="Borde lago urbano"
              className="h-full w-full rounded-sm shadow-md"
              style={{ backgroundImage: "url(/img/44.png)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div
              role="img" aria-label="Ciclovía parque"
              className="h-full w-full rounded-sm shadow-md"
              style={{ backgroundImage: "url(/img/42.png)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div
              role="img" aria-label="Mapa urbano"
              className="h-full w-full rounded-sm shadow-md overflow-hidden"
              style={{ backgroundImage: "url(/img/43.png)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>

          {/* 4 circle icons */}
          <div className="grid grid-cols-4 gap-3">
            {circleIcons.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1.5">
                <div
                  className="rounded-full flex items-center justify-center p-3"
                  style={{
                    background: c.bg,
                    width: "clamp(36px,6vw,56px)",
                    height: "clamp(36px,6vw,56px)",
                  }}
                >
                  {c.icon}
                </div>
                <span className="font-serif tracking-[0.18em] text-[#3a2611]/75 text-center" style={{ fontSize: "clamp(0.48rem,0.68vw,0.6rem)" }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center text-center gap-1 border-t border-[#b08654]/25 pt-2">
            <p className="font-serif tracking-[0.26em] text-[#3a2611]/65" style={{ fontSize: "clamp(0.52rem,0.75vw,0.65rem)" }}>
              DEL TERRITORIO A LA EXPERIENCIA URBANA
            </p>
            <span className="font-serif font-light tracking-[0.38em] text-[#3a2611]" style={{ fontSize: "clamp(0.9rem,1.5vw,1.2rem)" }}>
              LIZUSH
            </span>
            <span className="font-serif tracking-[0.36em] text-[#3a2611]/70" style={{ fontSize: "clamp(0.48rem,0.68vw,0.6rem)" }}>
              ARCHITECT STUDIO
            </span>
            <Leaf className="mt-1 h-4 w-4 text-[#b08654]/70" />
          </footer>
        </div>
      </article>
    </div>
    </>
  );
}
