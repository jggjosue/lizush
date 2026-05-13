import { Leaf } from "../_components/Leaf";

const swatches = [
  { color: "#e8ddd0", label: "BEIGE\nCLARO" },
  { color: "#c8bfb0", label: "PIEDRA\nNATURAL" },
  { color: "#7a4a28", label: "ROBLE\nCÁLIDO" },
  { color: "#5a6a48", label: "OLIVO\nSUAVE" },
  { color: "#c8b070", label: "CHAMPAGNE\nMETÁLICO" },
];

const steps = [
  {
    num: "01",
    title: "CONCEPTO\nY ESTRATEGIA",
    bullets: ["Análisis del sitio", "Visión del cliente", "Concepto espacial"],
    desc: "Entendemos el contexto, la esencia del lugar y la visión para construir el concepto que guía cada decisión.",
  },
  {
    num: "02",
    title: "DESARROLLO\nDE DISEÑO",
    bullets: ["Distribución espacial", "Selección de materiales", "Definición de atmósfera"],
    desc: "Materialidad, iluminación y detalles que dan vida a la atmósfera del proyecto.",
  },
  {
    num: "03",
    title: "VISUALIZACIÓN",
    bullets: ["Renders fotorrealistas", "Validación del diseño", "Presentación al cliente"],
    desc: "Visualizamos cada espacio para anticipar experiencias y asegurar decisiones con precisión.",
  },
  {
    num: "04",
    title: "PROYECTO\nEJECUTIVO",
    bullets: ["Planos arquitectónicos", "Coordinación de obra", "Factibilidad y ejecución"],
    desc: "Documentamos, coordinamos y llevamos a cabo cada detalle para materializar la visión.",
  },
];

function StepText({ step }: { step: typeof steps[number] }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-serif text-[#b08654]/70 text-2xl sm:text-[clamp(1.1rem,1.8vw,1.5rem)]">
        {step.num}
      </span>
      <h2 className="font-serif font-semibold whitespace-pre-line leading-tight text-base sm:text-[clamp(0.7rem,1vw,0.85rem)]">
        {step.title}
      </h2>
      <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
      <ul className="flex flex-col gap-1">
        {step.bullets.map(b => (
          <li key={b} className="flex items-start gap-2 font-serif text-sm sm:text-[clamp(0.5rem,0.72vw,0.63rem)]">
            <span className="mt-[0.4em] h-1.5 w-1.5 rounded-full bg-[#3a2611]/60 shrink-0 sm:h-1 sm:w-1" />
            {b}
          </li>
        ))}
      </ul>
      <p className="font-serif italic text-[#3a2611]/70 leading-relaxed text-sm sm:text-[clamp(0.5rem,0.7vw,0.62rem)]">
        {step.desc}
      </p>
    </div>
  );
}

export default function ProcesoDiseño() {
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
          background-color: #e8ddd0;
        }
        body::after {
          content: none;
        }
        body > header,
        body header:first-of-type {
          background: rgba(232,221,208,0.85) !important;
          border-bottom-color: rgba(176,134,84,0.20) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        #contacto,
        body > footer {
          background: rgba(200,185,165,0.90) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        #contacto .border-t {
          border-color: rgba(176,134,84,0.20) !important;
        }
      `}</style>

      {/* ── MOBILE: scrollable card ── DESKTOP: fixed-ratio poster ── */}
      <div className="flex flex-1 items-start justify-center p-3 sm:p-8 sm:items-center">
        <article
          className="relative flex w-full max-w-[1024px] flex-col overflow-hidden rounded-sm shadow-xl text-[#3a2611]
                     sm:aspect-[1024/1500]"
          style={{ background: "rgba(232,221,208,0.60)" }}
        >
          {/* Frame border — hidden on very small screens */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[6px] sm:inset-[10px] z-10 rounded-[2px] hidden sm:block"
            style={{ border: "1px solid rgba(176,134,84,0.22)" }}
          />

          <div className="relative z-20 flex h-full flex-col px-4 sm:px-9 pt-5 pb-4 sm:pt-4 sm:pb-3 gap-4 sm:gap-2">

            {/* ── TOP: título + moodboard ── */}
            <div className="grid grid-cols-1 sm:grid-cols-[48%_52%] gap-4 sm:flex-[2.2] sm:min-h-0">

              {/* Título + step 01 */}
              <div className="flex flex-col gap-2 pt-1">
                <Leaf className="h-5 w-5 text-[#b08654]" />
                <h1
                  className="font-serif font-semibold tracking-[0.06em] leading-[1.0] text-4xl sm:text-[clamp(1.8rem,4.8vw,3.8rem)]"
                >
                  PROCESO
                  <br />DE DISEÑO
                </h1>
                <span aria-hidden className="block h-px w-10 bg-[#b08654]/60" />
                <p className="font-serif tracking-[0.18em] text-[#3a2611]/65 leading-relaxed text-xs sm:text-[clamp(0.52rem,0.75vw,0.65rem)]">
                  DEL CONCEPTO A LA EJECUCIÓN.
                  <br />UN FLUJO CLARO Y ESTRUCTURADO.
                </p>

                {/* Step 01 */}
                <div className="mt-2 flex gap-2">
                  <span className="font-serif text-[#b08654]/70 shrink-0 text-2xl sm:text-[clamp(1.2rem,2vw,1.6rem)]">
                    {steps[0].num}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-serif font-semibold whitespace-pre-line leading-tight text-base sm:text-[clamp(0.7rem,1vw,0.85rem)]">
                      {steps[0].title}
                    </h2>
                    <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
                    <ul className="flex flex-col gap-1">
                      {steps[0].bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 font-serif text-sm sm:text-[clamp(0.52rem,0.75vw,0.65rem)]">
                          <span className="mt-[0.4em] h-1.5 w-1.5 rounded-full bg-[#3a2611]/60 shrink-0 sm:h-1 sm:w-1" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="font-serif italic text-[#3a2611]/70 leading-relaxed text-sm sm:text-[clamp(0.52rem,0.72vw,0.63rem)]">
                      {steps[0].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Moodboard + swatches */}
              <div className="flex gap-2 h-48 sm:h-full">
                <div
                  role="img"
                  aria-label="Moodboard de materiales"
                  className="flex-1 rounded-sm shadow-md"
                  style={{ backgroundImage: "url(/img/32.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div className="flex flex-col justify-center gap-2">
                  {swatches.map(s => (
                    <div key={s.label} className="flex items-center gap-1.5">
                      <span
                        className="rounded-full shrink-0 shadow-sm"
                        style={{ background: s.color, width: 14, height: 14 }}
                        aria-hidden
                      />
                      <span className="font-serif whitespace-pre-line leading-tight text-[#3a2611]/75 text-[10px] sm:text-[clamp(0.38rem,0.55vw,0.48rem)]">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Step 02 + imagen ── */}
            <div className="flex flex-col sm:grid sm:grid-cols-[60%_40%] gap-3 sm:flex-[1.8] sm:min-h-0">
              <div
                role="img"
                aria-label="El Buen Pez — proyecto"
                className="h-52 sm:h-full w-full rounded-sm shadow-md"
                style={{ backgroundImage: "url(/img/52.png)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <StepText step={steps[1]} />
            </div>

            {/* ── Step 03 + imagen ── */}
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-[32%_68%] gap-3 sm:flex-[1.4] sm:min-h-0">
              <StepText step={steps[2]} />
              <div className="h-52 sm:h-full rounded-sm shadow-sm overflow-hidden"
                style={{ backgroundImage: "url(/img/22.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                role="img" aria-label="Vista comercial"
              />
            </div>

            {/* ── Step 04 + imagen ── */}
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-[32%_68%] gap-3 sm:flex-[1.4] sm:min-h-0">
              <StepText step={steps[3]} />
              <div className="h-52 sm:h-full rounded-sm shadow-sm overflow-hidden"
                style={{ backgroundImage: "url(/img/51.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                role="img" aria-label="Documentación técnica"
              />
            </div>

            {/* ── Footer ── */}
            <footer className="flex flex-col items-center text-center gap-1 border-t border-[#b08654]/25 pt-3 sm:pt-2 mt-2 sm:mt-0">
              <p className="font-serif italic text-[#3a2611]/75 text-sm sm:text-[clamp(0.65rem,0.95vw,0.82rem)]">
                &ldquo;Diseñamos atmósferas que trascienden lo funcional y construyen identidad.&rdquo;
              </p>
              <span className="font-serif font-light tracking-[0.38em] text-[#3a2611] text-lg sm:text-[clamp(0.85rem,1.4vw,1.1rem)]">
                LIZUSH
              </span>
              <span className="font-serif tracking-[0.32em] text-[#3a2611]/70 text-[10px] sm:text-[clamp(0.44rem,0.62vw,0.54rem)]">
                ARCHITECT STUDIO
              </span>
              <p className="flex items-center gap-2 font-serif tracking-[0.22em] text-[#3a2611]/60 text-[10px] sm:text-[clamp(0.42rem,0.6vw,0.52rem)]">
                <span>ARQUITECTURA</span><span aria-hidden>•</span><span>INTERIORISMO</span><span aria-hidden>•</span><span>VISUALIZACIÓN</span>
              </p>
            </footer>

          </div>
        </article>
      </div>
    </>
  );
}
