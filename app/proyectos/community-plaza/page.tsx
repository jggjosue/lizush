import { Leaf } from "../../_components/Leaf";

const conceptItems = [
  { label: "ENCUENTRO\nSOCIAL" },
  { label: "COMERCIO\nLOCAL" },
  { label: "PAISAJE\nNATURAL" },
  { label: "MOVILIDAD\nSOSTENIBLE" },
  { label: "EXPERIENCIAS\nGASTRONÓMICAS" },
];

const footerFeatures = [
  { label: "DISEÑO\nBIOFÍLICO" },
  { label: "ILUMINACIÓN\nCÁLIDA" },
  { label: "USO EFICIENTE\nDEL AGUA" },
  { label: "VENTILACIÓN\nNATURAL" },
  { label: "ESPACIOS PARA\nTODOS" },
];

const ConceptIcon = ({ index }: { index: number }) => {
  const icons = [
    // Encuentro Social
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <circle cx="9" cy="8" r="2.5" /><circle cx="15" cy="8" r="2.5" />
      <path d="M4 20c0-3.3 2.2-5 5-5h6c2.8 0 5 1.7 5 5" />
    </svg>,
    // Comercio Local
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M3 9l1-5h16l1 5" /><rect x="2" y="9" width="20" height="12" rx="1" />
      <path d="M8 21v-6h8v6" />
    </svg>,
    // Paisaje Natural
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M12 2v20M8 6c0 0-4 3-4 7h8M16 6c0 0 4 3 4 7h-8" />
    </svg>,
    // Movilidad Sostenible
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <circle cx="6" cy="16" r="2" /><circle cx="18" cy="16" r="2" />
      <path d="M6 16h12M8 16l3-6h4l3 6M12 10V7" />
    </svg>,
    // Gastronomia
    <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M3 11h18M12 3v8M5 3v8M19 3v3a4 4 0 01-4 4h-1" />
      <path d="M12 11v10M9 21h6" />
    </svg>,
  ];
  return icons[index] || icons[0];
};

const FooterIcon = ({ index }: { index: number }) => {
  const icons = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M12 2c-4 6-6 9-6 13a6 6 0 0012 0c0-4-2-7-6-13z" />
      <path d="M12 9v7" />
    </svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <circle cx="12" cy="10" r="4" />
      <path d="M6 8l-1.5-1.5M18 8l1.5-1.5M4 13H2M22 13h-2M12 4V2M12 18v2" />
    </svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M12 2v20M7 7c2-2 5-2 5 0s3 2 5 0" />
    </svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <path d="M3 8c3-3 6-3 9 0s6 3 9 0M3 14c3-3 6-3 9 0s6 3 9 0" />
    </svg>,
    <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className="h-full w-full">
      <circle cx="8" cy="10" r="2" /><circle cx="16" cy="10" r="2" />
      <path d="M4 20c0-2.8 1.8-4 4-4h8c2.2 0 4 1.2 4 4" />
    </svg>,
  ];
  return icons[index] || icons[0];
};

export default function CommunityPlaza() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-2xl text-[#3a2611]"
        style={{ background: "linear-gradient(180deg,#f2e4cc 0%,#ede0c4 100%)" }}
      >
        {/* Frame border */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(180,140,80,0.28)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-5 sm:px-9 pt-4 pb-3 gap-2">

          {/* Header */}
          <header className="flex flex-col items-center text-center gap-0.5">
            <div className="flex w-full items-center gap-3 max-w-[520px] mx-auto">
              <span className="h-px flex-1 bg-[#b08654]/55" />
              <span
                className="font-serif tracking-[0.36em] text-[#b08654]"
                style={{ fontSize: "clamp(0.58rem,0.82vw,0.72rem)" }}
              >
                PROYECTOS COMERCIALES
              </span>
              <span className="h-px flex-1 bg-[#b08654]/55" />
            </div>
            <h1
              className="font-serif font-semibold tracking-[0.06em] leading-none text-[#3a2611]"
              style={{ fontSize: "clamp(1.9rem,5vw,4rem)" }}
            >
              COMMUNITY PLAZA
            </h1>
            <span aria-hidden className="mt-1.5 block h-px w-10 bg-[#b08654]/60" />
            <p
              className="mt-1 font-serif tracking-[0.22em] text-[#3a2611]/65"
              style={{ fontSize: "clamp(0.52rem,0.75vw,0.65rem)" }}
            >
              ESPACIOS QUE CONECTAN, EXPERIENCIAS QUE PERDURAN.
            </p>
            {/* ornament */}
            <Leaf className="mt-1 h-4 w-4 text-[#b08654]" />
          </header>

          {/* Main section: photo + concepto */}
          <div className="grid grid-cols-[62%_38%] gap-3 flex-[2.8] min-h-0">
            <div
              role="img"
              aria-label="Community Plaza — plaza principal con iluminación"
              className="h-full w-full rounded-sm shadow-md"
              style={{
                backgroundImage: "url(/img/49.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex flex-col gap-2 pt-1">
              <h2
                className="font-serif font-semibold tracking-[0.06em]"
                style={{ fontSize: "clamp(0.82rem,1.3vw,1.05rem)" }}
              >
                CONCEPTO
              </h2>
              <p
                className="font-serif leading-relaxed text-[#3a2611]/85"
                style={{ fontSize: "clamp(0.58rem,0.82vw,0.72rem)" }}
              >
                Un espacio comercial diseñado para reunir, convivir y disfrutar.
                <br /><br />
                Donde la naturaleza, la arquitectura y las experiencias crean comunidad.
              </p>
              <span aria-hidden className="block h-px w-8 bg-[#b08654]/55" />
              <ul className="flex flex-col gap-1.5">
                {conceptItems.map((item, i) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center rounded-full bg-[#3a2611]/10 text-[#3a2611]/70 shrink-0"
                      style={{ width: "clamp(18px,2.8vw,26px)", height: "clamp(18px,2.8vw,26px)", padding: "3px" }}
                    >
                      <ConceptIcon index={i} />
                    </div>
                    <span
                      className="font-serif tracking-[0.16em] text-[#3a2611]/80 whitespace-pre-line leading-tight"
                      style={{ fontSize: "clamp(0.48rem,0.68vw,0.6rem)" }}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Compass + plan */}
              <div className="mt-auto flex items-end gap-2">
                <div className="flex flex-col items-center gap-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className="text-[#3a2611]/50" style={{ width: "clamp(18px,2.8vw,26px)", height: "clamp(18px,2.8vw,26px)" }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                    <path d="M12 8l2 4-2 4-2-4 2-4z" fill="currentColor" opacity="0.3" />
                  </svg>
                  <span className="font-serif text-[#3a2611]/50" style={{ fontSize: "clamp(0.38rem,0.52vw,0.46rem)" }}>N</span>
                </div>
                <div
                  className="flex-1 rounded-sm border border-[#b08654]/40 overflow-hidden"
                  style={{ height: "clamp(36px,6vw,55px)" }}
                >
                  <div
                    role="img"
                    aria-label="Plano de conjunto"
                    className="h-full w-full"
                    style={{
                      backgroundImage: "url(/img/43.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Aerial view */}
          <div
            role="img"
            aria-label="Vista aérea Community Plaza"
            className="w-full flex-[1.8] min-h-0 rounded-sm shadow-md"
            style={{
              backgroundImage: "url(/img/42.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Bottom strip — 4 photos */}
          <div className="grid grid-cols-4 gap-2 flex-[1.2] min-h-0">
            {[
              { img: "49", pos: "left center" },
              { img: "49", pos: "center bottom" },
              { img: "50", pos: "center top" },
              { img: "44", pos: "center" },
            ].map(({ img, pos }, i) => (
              <div
                key={i}
                role="img"
                aria-label={`Vista ${i + 1}`}
                className="h-full w-full rounded-sm shadow-sm"
                style={{
                  backgroundImage: `url(/img/${img}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: pos,
                }}
              />
            ))}
          </div>

          {/* Footer icons */}
          <footer className="flex flex-col gap-2 border-t border-[#b08654]/25 pt-2">
            <div className="grid grid-cols-5 gap-1">
              {footerFeatures.map((f, i) => (
                <div key={f.label} className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="text-[#3a2611]/60"
                    style={{ width: "clamp(18px,3vw,26px)", height: "clamp(18px,3vw,26px)" }}
                  >
                    <FooterIcon index={i} />
                  </div>
                  <span
                    className="font-serif tracking-[0.14em] text-[#3a2611]/65 whitespace-pre-line leading-tight"
                    style={{ fontSize: "clamp(0.4rem,0.58vw,0.52rem)" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center text-center gap-0.5">
              <span
                className="font-serif font-light tracking-[0.38em] text-[#3a2611]"
                style={{ fontSize: "clamp(0.9rem,1.5vw,1.2rem)" }}
              >
                LIZUSH
              </span>
              <span
                className="font-serif tracking-[0.36em] text-[#3a2611]/70"
                style={{ fontSize: "clamp(0.48rem,0.68vw,0.6rem)" }}
              >
                ARCHITECT STUDIO
              </span>
              <Leaf className="mt-1 h-4 w-4 text-[#b08654]/70" />
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
