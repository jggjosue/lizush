import type { ReactNode } from "react";
import { Leaf } from "../_components/Leaf";

type Reason = {
  number: string;
  title: string;
  bullets: string[];
  description: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "CONCEPTO &\nIDENTIDAD",
    bullets: [
      "Desarrollo conceptual sólido",
      "Narrativa de diseño a la medida",
      "Integración de marca + espacio",
    ],
    description:
      "Entendemos el contexto, la esencia del lugar y la visión para construir el concepto que guía cada decisión.",
  },
  {
    number: "02",
    title: "DISEÑO\nPRECISO",
    bullets: [
      "Selección de materiales de alto nivel",
      "Atención al detalle",
      "Interiores guiados por atmósfera",
    ],
    description:
      "Materialidad, iluminación y detalles que dan vida a la atmósfera del proyecto.",
  },
  {
    number: "03",
    title: "VISUALIZACIÓN",
    bullets: [
      "Renders fotorrealistas",
      "Comunicación clara del diseño",
      "Apoyo en la toma de decisiones",
    ],
    description:
      "Visualizamos cada espacio para anticipar experiencias y asegurar decisiones con precisión.",
  },
  {
    number: "04",
    title: "EJECUCIÓN\nY SOPORTE",
    bullets: [
      "Planos técnicos",
      "Coordinación con contratistas",
      "Viabilidad y seguimiento del proyecto",
    ],
    description:
      "Documentamos, coordinamos y llevamos a cabo cada detalle para materializar la visión.",
  },
];

export default function PorQueElegirnos() {
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

      <div className="flex flex-1 flex-col items-center justify-between text-[#3a2611] px-8 sm:px-14 pt-10 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top header */}
        <header className="flex flex-col items-center text-center mt-8 sm:mt-14 gap-2">
          <Leaf className="h-6 w-6 text-[#b08654]" />
          <h1
            className="mt-3 font-serif font-light tracking-[0.06em] leading-[1.05] text-[#3a2611]"
            style={{ fontSize: "clamp(2.2rem,5.6vw,4.2rem)" }}
          >
            ¿POR QUÉ
            <br />
            ELEGIRNOS?
          </h1>
          <p
            className="mt-3 font-serif tracking-[0.32em] text-[#3a2611]/70"
            style={{ fontSize: "clamp(0.62rem,0.92vw,0.78rem)" }}
          >
            UN ENFOQUE ESTRATÉGICO DEL DISEÑO,
            <br />
            DEL CONCEPTO A LA EJECUCIÓN.
          </p>
          <span aria-hidden className="mt-3 block h-px w-16 bg-[#b08654]/60" />
        </header>

        {/* Center: image + reasons */}
        <section className="grid grid-cols-[48%_52%] gap-8 w-full max-w-[860px] py-8 flex-1 items-center">
          <div
            role="img"
            aria-label="Proyectos del estudio"
            className="h-full min-h-[360px] w-full rounded-sm shadow-md"
            style={{
              backgroundImage: "url(/img/19.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="flex flex-col justify-between h-full gap-6">
            {reasons.map((reason) => (
              <ReasonRow key={reason.number} reason={reason} />
            ))}
          </div>
        </section>

        {/* Bottom branding */}
        <footer className="flex flex-col items-center text-center gap-1 pb-4">
          <p
            className="font-serif italic text-[#3a2611]/75 leading-relaxed"
            style={{ fontSize: "clamp(0.78rem,1.1vw,0.92rem)" }}
          >
            &ldquo;Diseñamos espacios que construyen identidad&rdquo;
            <br />y trascienden lo funcional.
          </p>
          <span aria-hidden className="mt-3 block h-px w-16 bg-[#b08654]/55" />
          <span
            className="mt-2 font-serif font-light tracking-[0.42em] text-[#3a2611]"
            style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.42em] text-[#3a2611]/70"
            style={{ fontSize: "clamp(0.58rem,0.85vw,0.72rem)" }}
          >
            ARCHITECT STUDIO
          </span>
        </footer>

      </div>
    </>
  );
}

function ReasonRow({ reason }: { reason: Reason }) {
  return (
    <div className="flex flex-col">
      <span
        className="font-serif text-[#b08654]/80 leading-none"
        style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)" }}
      >
        {reason.number}
      </span>
      <h2
        className="mt-1 font-serif font-medium leading-tight whitespace-pre-line text-[#3a2611]"
        style={{ fontSize: "clamp(0.85rem,1.2vw,1rem)" }}
      >
        {reason.title}
      </h2>
      <span aria-hidden className="mt-2 block h-px w-10 bg-[#b08654]/60" />
      <Bullets items={reason.bullets} />
      <p
        className="mt-2 font-serif italic leading-relaxed text-[#3a2611]/75"
        style={{ fontSize: "clamp(0.62rem,0.88vw,0.76rem)" }}
      >
        {reason.description}
      </p>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-1 text-[#3a2611]">
      {items.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
    </ul>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li
      className="flex items-start gap-2 font-serif text-[#3a2611]/80"
      style={{ fontSize: "clamp(0.62rem,0.88vw,0.76rem)" }}
    >
      <span aria-hidden className="mt-[0.55em] inline-block h-1 w-1 shrink-0 rounded-full bg-[#b08654]" />
      <span>{children}</span>
    </li>
  );
}
