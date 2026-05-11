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

    <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-xl text-[#3a2611]"
        style={{ background: "rgba(232,221,208,0.60)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(176,134,84,0.22)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-6 sm:px-9 pt-4 pb-3 gap-2">

          {/* TOP: title left + moodboard right */}
          <div className="grid grid-cols-[48%_52%] gap-4 flex-[2.2] min-h-0">
            {/* Left */}
            <div className="flex flex-col gap-2 pt-1">
              <Leaf className="h-5 w-5 text-[#b08654]" />
              <h1
                className="font-serif font-semibold tracking-[0.06em] leading-[1.0]"
                style={{ fontSize: "clamp(1.8rem,4.8vw,3.8rem)" }}
              >
                PROCESO
                <br />DE DISEÑO
              </h1>
              <span aria-hidden className="block h-px w-10 bg-[#b08654]/60" />
              <p
                className="font-serif tracking-[0.18em] text-[#3a2611]/65 leading-relaxed"
                style={{ fontSize: "clamp(0.52rem,0.75vw,0.65rem)" }}
              >
                DEL CONCEPTO A LA EJECUCIÓN.
                <br />UN FLUJO CLARO Y ESTRUCTURADO.
              </p>
              {/* Step 01 */}
              <div className="mt-2 flex gap-2">
                <span className="font-serif text-[#b08654]/70 shrink-0" style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)" }}>
                  {steps[0].num}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-serif font-semibold whitespace-pre-line leading-tight" style={{ fontSize: "clamp(0.7rem,1vw,0.85rem)" }}>
                    {steps[0].title}
                  </h2>
                  <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
                  <ul className="flex flex-col gap-0.5">
                    {steps[0].bullets.map(b => (
                      <li key={b} className="flex items-start gap-1 font-serif" style={{ fontSize: "clamp(0.52rem,0.75vw,0.65rem)" }}>
                        <span className="mt-[0.4em] h-1 w-1 rounded-full bg-[#3a2611]/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="font-serif italic text-[#3a2611]/70 leading-relaxed" style={{ fontSize: "clamp(0.52rem,0.72vw,0.63rem)" }}>
                    {steps[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: moodboard + swatches */}
            <div className="flex gap-2 h-full">
              <div
                role="img"
                aria-label="Moodboard de materiales"
                className="flex-1 rounded-sm shadow-md"
                style={{ backgroundImage: "url(/img/32.png)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="flex flex-col justify-center gap-2">
                {swatches.map(s => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <span className="rounded-full shrink-0 shadow-sm" style={{ background: s.color, width: "clamp(12px,1.8vw,16px)", height: "clamp(12px,1.8vw,16px)" }} aria-hidden />
                    <span className="font-serif whitespace-pre-line leading-tight text-[#3a2611]/75" style={{ fontSize: "clamp(0.38rem,0.55vw,0.48rem)" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 02 + restaurant photos */}
          <div className="grid grid-cols-[68%_32%] gap-3 flex-[1.8] min-h-0">
            <div className="flex flex-col gap-1.5 h-full">
              <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
                <div className="h-full rounded-sm shadow-sm overflow-hidden" style={{ backgroundImage: "url(/img/52.png)", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Restaurante interior" />
                <div className="h-full rounded-sm shadow-sm overflow-hidden" style={{ backgroundImage: "url(/img/53.png)", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Bar interior" />
              </div>
              <div className="grid grid-cols-4 gap-1.5 flex-[0.7] min-h-0">
                {["52","53","52","53"].map((img, i) => (
                  <div key={i} className="h-full rounded-sm shadow-sm overflow-hidden" style={{ backgroundImage: `url(/img/${img}.png)`, backgroundSize: "cover", backgroundPosition: i%2===0 ? "left center" : "right center" }} role="img" aria-label={`Detalle ${i+1}`} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <span className="font-serif text-[#b08654]/70" style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)" }}>{steps[1].num}</span>
              <h2 className="font-serif font-semibold whitespace-pre-line leading-tight" style={{ fontSize: "clamp(0.7rem,1vw,0.85rem)" }}>{steps[1].title}</h2>
              <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
              <ul className="flex flex-col gap-0.5">
                {steps[1].bullets.map(b => (
                  <li key={b} className="flex items-start gap-1 font-serif" style={{ fontSize: "clamp(0.5rem,0.72vw,0.63rem)" }}>
                    <span className="mt-[0.4em] h-1 w-1 rounded-full bg-[#3a2611]/60 shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-[#3a2611]/70 leading-relaxed" style={{ fontSize: "clamp(0.5rem,0.7vw,0.62rem)" }}>{steps[1].desc}</p>
            </div>
          </div>

          {/* Step 03 + store photos */}
          <div className="grid grid-cols-[32%_68%] gap-3 flex-[1.4] min-h-0">
            <div className="flex flex-col gap-1 pt-1">
              <span className="font-serif text-[#b08654]/70" style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)" }}>{steps[2].num}</span>
              <h2 className="font-serif font-semibold whitespace-pre-line leading-tight" style={{ fontSize: "clamp(0.7rem,1vw,0.85rem)" }}>{steps[2].title}</h2>
              <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
              <ul className="flex flex-col gap-0.5">
                {steps[2].bullets.map(b => (
                  <li key={b} className="flex items-start gap-1 font-serif" style={{ fontSize: "clamp(0.5rem,0.72vw,0.63rem)" }}>
                    <span className="mt-[0.4em] h-1 w-1 rounded-full bg-[#3a2611]/60 shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-[#3a2611]/70 leading-relaxed" style={{ fontSize: "clamp(0.5rem,0.7vw,0.62rem)" }}>{steps[2].desc}</p>
            </div>
            <div className="grid grid-cols-3 gap-1.5 h-full">
              {["22","23","14"].map(img => (
                <div key={img} className="h-full rounded-sm shadow-sm overflow-hidden" style={{ backgroundImage: `url(/img/${img}.png)`, backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Vista comercial" />
              ))}
            </div>
          </div>

          {/* Step 04 + technical photos */}
          <div className="grid grid-cols-[32%_68%] gap-3 flex-[1.4] min-h-0">
            <div className="flex flex-col gap-1 pt-1">
              <span className="font-serif text-[#b08654]/70" style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)" }}>{steps[3].num}</span>
              <h2 className="font-serif font-semibold whitespace-pre-line leading-tight" style={{ fontSize: "clamp(0.7rem,1vw,0.85rem)" }}>{steps[3].title}</h2>
              <span aria-hidden className="block h-px w-6 bg-[#b08654]/50" />
              <ul className="flex flex-col gap-0.5">
                {steps[3].bullets.map(b => (
                  <li key={b} className="flex items-start gap-1 font-serif" style={{ fontSize: "clamp(0.5rem,0.72vw,0.63rem)" }}>
                    <span className="mt-[0.4em] h-1 w-1 rounded-full bg-[#3a2611]/60 shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-[#3a2611]/70 leading-relaxed" style={{ fontSize: "clamp(0.5rem,0.7vw,0.62rem)" }}>{steps[3].desc}</p>
            </div>
            <div className="grid grid-cols-3 gap-1.5 h-full">
              {["51","17","13"].map(img => (
                <div key={img} className="h-full rounded-sm shadow-sm overflow-hidden" style={{ backgroundImage: `url(/img/${img}.png)`, backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Documentación técnica" />
              ))}
            </div>
          </div>

          {/* Footer quote */}
          <footer className="flex flex-col items-center text-center gap-1 border-t border-[#b08654]/25 pt-2">
            <p className="font-serif italic text-[#3a2611]/75" style={{ fontSize: "clamp(0.65rem,0.95vw,0.82rem)" }}>
              &ldquo;Diseñamos atmósferas que trascienden lo funcional y construyen identidad.&rdquo;
            </p>
            <span className="font-serif font-light tracking-[0.38em] text-[#3a2611]" style={{ fontSize: "clamp(0.85rem,1.4vw,1.1rem)" }}>LIZUSH</span>
            <span className="font-serif tracking-[0.32em] text-[#3a2611]/70" style={{ fontSize: "clamp(0.44rem,0.62vw,0.54rem)" }}>ARCHITECT STUDIO</span>
            <p className="flex items-center gap-2 font-serif tracking-[0.22em] text-[#3a2611]/60" style={{ fontSize: "clamp(0.42rem,0.6vw,0.52rem)" }}>
              <span>ARQUITECTURA</span><span aria-hidden>•</span><span>INTERIORISMO</span><span aria-hidden>•</span><span>VISUALIZACIÓN</span>
            </p>
          </footer>
        </div>
      </article>
    </div>
    </>
  );
}
