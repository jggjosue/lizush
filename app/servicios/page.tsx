import { Badge } from "../_components/Badge";
import { Leaf } from "../_components/Leaf";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "INTERIORISMO",
    description:
      "Diseño integral de espacios residenciales y comerciales, con enfoque en atmósfera, materialidad y detalle.",
    image: "/img/45.png",
  },
  {
    number: "02",
    title: "VISUALIZACIÓN\nARQUITECTÓNICA",
    description:
      "Representación fotorealista para validar diseño y comunicar el proyecto previo a su ejecución.",
    image: "/img/19.png",
  },
  {
    number: "03",
    title: "PROYECTO\nARQUITECTÓNICO",
    description:
      "Desarrollo ejecutivo e integración técnica que aseguran la viabilidad y ejecución del proyecto.",
    image: "/img/47.png",
  },
];

export default function Servicios() {
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
        /* Header: transparente sobre el beige */
        body > header,
        body header:first-of-type {
          background: rgba(232,221,208,0.82) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom-color: rgba(176,134,84,0.20) !important;
        }
        /* Nav links en tono oscuro sobre beige */
        body header a,
        body header span,
        body header button {
          color: #3a2611 !important;
        }
        body header svg {
          stroke: #3a2611 !important;
        }
        /* Dropdown panel beige */
        body header ul {
          background: rgba(232,221,208,0.97) !important;
          border-color: rgba(176,134,84,0.28) !important;
          box-shadow: 0 8px 24px rgba(58,38,17,0.12) !important;
        }
        body header ul a {
          color: #3a2611 !important;
        }
        body header ul a:hover {
          background: rgba(176,134,84,0.14) !important;
          color: #3a2611 !important;
        }
        /* Dropdown arrow */
        body header [class*="border-b-"] {
          border-bottom-color: rgba(232,221,208,0.97) !important;
        }
        /* Footer: beige oscuro semi-transparente */
        #contacto,
        body > footer {
          background: rgba(200,185,165,0.90) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #3a2611 !important;
        }
        #contacto .border-t,
        body > footer .border-t {
          border-color: rgba(176,134,84,0.25) !important;
        }
        #contacto a,
        #contacto span,
        body > footer a,
        body > footer span,
        body > footer p {
          color: #3a2611cc !important;
        }
        #contacto h2,
        body > footer h2 {
          color: #3a2611 !important;
        }
      `}</style>

      <div className="flex flex-1 flex-col text-[#3a2611] px-6 sm:px-10 pt-10 pb-10">

        {/* Header */}
        <header className="flex flex-col items-center text-center mt-6 sm:mt-10 gap-3">
          <div className="flex items-center gap-3 max-w-[260px] w-full mx-auto">
            <span className="h-px flex-1 bg-[#b08654]/45" />
            <Leaf className="h-4 w-4 text-[#b08654]" />
            <span className="h-px flex-1 bg-[#b08654]/45" />
          </div>
          <h1
            className="font-serif font-light tracking-[0.04em] text-[#3a2611]"
            style={{ fontSize: "clamp(2.2rem,5.5vw,4.2rem)" }}
          >
            QUÉ HACEMOS
          </h1>
          <span aria-hidden className="block h-px w-14 bg-[#b08654]/55" />
          <p
            className="max-w-md font-serif italic leading-snug text-[#3a2611]/75"
            style={{ fontSize: "clamp(0.88rem,1.3vw,1.1rem)" }}
          >
            Diseño de alto nivel, visualización
            <br />
            y desarrollo arquitectónico.
          </p>
        </header>

        {/* Services list */}
        <div className="mt-10 flex flex-col gap-10 max-w-[900px] mx-auto w-full">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              divider={index < services.length - 1}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-3">
          <Badge size={86} subtitle="ARCHITECT STUDIO" />
          <span
            className="font-serif tracking-[0.42em] text-[#3a2611]/70"
            style={{ fontSize: "clamp(0.62rem,0.9vw,0.78rem)" }}
          >
            CIUDAD DE MÉXICO, MX
          </span>
        </footer>

      </div>
    </>
  );
}

function ServiceRow({
  service,
  divider,
}: {
  service: Service;
  divider: boolean;
}) {
  return (
    <>
      <div className="grid grid-cols-[42%_58%] items-start gap-6 sm:gap-8">
        <div
          role="img"
          aria-label={service.title}
          className="aspect-[4/3] w-full rounded-sm shadow-md"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="flex flex-col pt-1">
          <span
            className="font-serif text-[#b08654] leading-none"
            style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)" }}
          >
            {service.number}
          </span>
          <h2
            className="mt-2 font-serif font-medium leading-tight whitespace-pre-line text-[#3a2611]"
            style={{ fontSize: "clamp(1rem,1.7vw,1.4rem)" }}
          >
            {service.title}
          </h2>
          <span aria-hidden className="mt-3 block h-px w-10 bg-[#b08654]/55" />
          <p
            className="mt-3 font-serif leading-relaxed text-[#3a2611]/80"
            style={{ fontSize: "clamp(0.82rem,1.15vw,0.98rem)" }}
          >
            {service.description}
          </p>
        </div>
      </div>
      {divider && (
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-[#b08654]/20" />
        </div>
      )}
    </>
  );
}
