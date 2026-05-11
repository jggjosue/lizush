import { Leaf } from "../../_components/Leaf";

const conceptItems = [
  { label: "CONECTIVIDAD\nPEATONAL" },
  { label: "MOVILIDAD\nSUSTENTABLE" },
  { label: "PLAZAS\nPÚBLICAS" },
  { label: "PAISAJE\nVERDE" },
  { label: "AMENIDADES\nDEPORTIVAS" },
];

const circleIcons = [
  { bg: "#6b7a55", label: "PAISAJE" },
  { bg: "#c4a882", label: "ESPACIO PÚBLICO" },
  { bg: "#9aaa98", label: "MOVILIDAD" },
  { bg: "#7a9aaa", label: "COMUNIDAD" },
];

const ConceptIcon = ({ i }: { i: number }) => {
  const paths = [
    <path key={0} d="M12 4v16M8 8h8M7 12h10M8 16h8" strokeLinecap="round" />,
    <><circle key={0} cx="6" cy="15" r="2" /><circle key={1} cx="18" cy="15" r="2" /><path key={2} d="M6 15h12M9 15l3-7 3 7" strokeLinecap="round" /></>,
    <><circle key={0} cx="9" cy="7" r="2" /><circle key={1} cx="15" cy="7" r="2" /><path key={2} d="M5 20c0-2.5 1.8-4 4-4h6c2.2 0 4 1.5 4 4" strokeLinecap="round" /></>,
    <path key={0} d="M12 2c-4 6-6 9-6 13a6 6 0 0012 0c0-4-2-7-6-13zM12 9v7" strokeLinecap="round" />,
    <><rect key={0} x="4" y="10" width="16" height="10" rx="1" /><path key={1} d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round" /></>,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="h-full w-full">
      {paths[i]}
    </svg>
  );
};

const CircleIcon = ({ i }: { i: number }) => {
  const icons = [
    <path key={0} d="M12 2c-4 6-6 9-6 13a6 6 0 0012 0c0-4-2-7-6-13zM12 9v7" strokeLinecap="round" />,
    <><circle key={0} cx="9" cy="8" r="2" /><circle key={1} cx="15" cy="8" r="2" /><path key={2} d="M5 20c0-2.8 1.8-4 4-4h6c2.2 0 4 1.2 4 4" strokeLinecap="round" /></>,
    <><circle key={0} cx="6" cy="15" r="2" /><circle key={1} cx="18" cy="15" r="2" /><path key={2} d="M6 15h12M9 15l3-7 3 7" strokeLinecap="round" /></>,
    <><circle key={0} cx="12" cy="7" r="2.5" /><circle key={1} cx="6" cy="11" r="1.5" /><circle key={2} cx="18" cy="11" r="1.5" /><path key={3} d="M9 20c0-2 1.3-3 3-3s3 1 3 3" strokeLinecap="round" /></>,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} className="h-full w-full">
      {icons[i]}
    </svg>
  );
};

export default function DisenoUrbano() {
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
          background-color: #ede5d0;
        }
        body::after {
          content: none;
        }
        body > header,
        body header:first-of-type {
          background: rgba(237,229,208,0.88) !important;
          border-bottom-color: rgba(176,134,84,0.20) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        #contacto,
        body > footer {
          background: rgba(205,190,165,0.92) !important;
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
          style={{ background: "rgba(237,229,208,0.45)" }}
        >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(180,140,80,0.28)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-6 sm:px-10 pt-4 pb-3 gap-2.5">

          {/* Header */}
          <header className="flex flex-col items-center text-center gap-0.5">
            <div className="flex w-full items-center gap-3 max-w-[420px] mx-auto">
              <span className="h-px flex-1 bg-[#b08654]/55" />
              <span className="font-serif tracking-[0.38em] text-[#b08654]" style={{ fontSize: "clamp(0.56rem,0.8vw,0.7rem)" }}>
                ESPACIOS DEPORTIVOS
              </span>
              <span className="h-px flex-1 bg-[#b08654]/55" />
            </div>
            <h1
              className="font-serif font-light tracking-[0.10em] leading-[1.0] text-[#3a2611]"
              style={{ fontSize: "clamp(1.8rem,4.8vw,3.8rem)" }}
            >
              DISEÑO URBANO
              <br />Y PLAN MAESTRO
            </h1>
            <span aria-hidden className="mt-1.5 block h-px w-20 bg-[#b08654]/60" />
            <p className="mt-1 font-serif italic text-[#3a2611]/70" style={{ fontSize: "clamp(0.58rem,0.85vw,0.75rem)" }}>
              Entornos estratégicos, humanos y sostenibles que integran paisaje, arquitectura y experiencia.
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-px w-6 bg-[#b08654]/55" />
              <Leaf className="h-4 w-4 text-[#b08654]" />
              <span className="h-px w-6 bg-[#b08654]/55" />
            </div>
          </header>

          {/* Main: 2 rows of photos + right panel */}
          <div className="grid grid-cols-[62%_38%] gap-3 flex-[4.2] min-h-0">
            {/* Left: stadium + aerial stacked */}
            <div className="flex flex-col gap-2 h-full">
              <div
                role="img" aria-label="Estadio deportivo al atardecer"
                className="w-full flex-1 rounded-sm shadow-md"
                style={{ backgroundImage: "url(/img/50.png)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div
                role="img" aria-label="Vista aérea plan maestro"
                className="w-full flex-1 rounded-sm shadow-md"
                style={{ backgroundImage: "url(/img/42.png)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>

            {/* Right: CONCEPTO + icons + compass + plan */}
            <div className="flex flex-col gap-2 pt-1">
              <h2 className="font-serif font-light tracking-[0.10em]" style={{ fontSize: "clamp(0.78rem,1.2vw,1rem)" }}>
                CONCEPTO
              </h2>
              <p className="font-serif leading-relaxed text-[#3a2611]/85" style={{ fontSize: "clamp(0.56rem,0.8vw,0.7rem)" }}>
                Diseñamos ciudades como sistemas vivos, donde la arquitectura, la naturaleza y las personas coexisten en armonía.
              </p>
              <span aria-hidden className="block h-px w-8 bg-[#b08654]/55" />
              <ul className="flex flex-col gap-1.5">
                {conceptItems.map((item, i) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center rounded-full bg-[#3a2611]/10 text-[#3a2611]/65 shrink-0"
                      style={{ width: "clamp(16px,2.5vw,22px)", height: "clamp(16px,2.5vw,22px)", padding: "2px" }}
                    >
                      <ConceptIcon i={i} />
                    </div>
                    <span className="font-serif tracking-[0.14em] text-[#b08654] whitespace-pre-line leading-tight" style={{ fontSize: "clamp(0.46rem,0.65vw,0.58rem)" }}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Compass + site plan */}
              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className="text-[#3a2611]/45" style={{ width: "clamp(16px,2.5vw,22px)", height: "clamp(16px,2.5vw,22px)" }}>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                      <path d="M12 8l2 4-2 4-2-4 2-4z" fill="currentColor" opacity="0.3" />
                    </svg>
                    <span className="font-serif text-[#3a2611]/45" style={{ fontSize: "clamp(0.36rem,0.5vw,0.44rem)" }}>N</span>
                  </div>
                </div>
                <div
                  className="w-full rounded-sm border border-[#b08654]/40 overflow-hidden"
                  style={{ height: "clamp(50px,8vw,75px)" }}
                >
                  <div
                    role="img" aria-label="Plano maestro"
                    className="h-full w-full"
                    style={{ backgroundImage: "url(/img/43.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Italic quote */}
          <p className="text-center font-serif italic text-[#3a2611]/70" style={{ fontSize: "clamp(0.6rem,0.88vw,0.78rem)" }}>
            Construimos comunidad a través del deporte, la naturaleza y el diseño.
          </p>

          {/* 4 circle icons */}
          <div className="grid grid-cols-4 gap-2">
            {circleIcons.map((c, i) => (
              <div key={c.label} className="flex flex-col items-center gap-1">
                <div
                  className="rounded-full flex items-center justify-center p-3"
                  style={{ background: c.bg, width: "clamp(32px,5.5vw,50px)", height: "clamp(32px,5.5vw,50px)" }}
                >
                  <CircleIcon i={i} />
                </div>
                <span className="font-serif tracking-[0.16em] text-[#3a2611]/70 text-center" style={{ fontSize: "clamp(0.44rem,0.62vw,0.55rem)" }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center text-center gap-0.5 border-t border-[#b08654]/25 pt-2">
            <span className="font-serif font-light tracking-[0.38em] text-[#3a2611]" style={{ fontSize: "clamp(0.9rem,1.5vw,1.2rem)" }}>
              LIZUSH
            </span>
            <span className="font-serif tracking-[0.36em] text-[#3a2611]/70" style={{ fontSize: "clamp(0.46rem,0.66vw,0.58rem)" }}>
              ARCHITECT STUDIO
            </span>
            <Leaf className="mt-0.5 h-4 w-4 text-[#b08654]/70" />
          </footer>
        </div>
      </article>
    </div>
    </>
  );
}
