import { Leaf } from "../../_components/Leaf";

type Project = {
  image: string;
  imgPos: string;
  name: string;
  subtitle: string;
  description: string;
  palette: string[];
  materiales: string[];
  detalles: string[];
};

const projects: Project[] = [
  {
    image: "45",
    imgPos: "center",
    name: "Cocina M&R",
    subtitle: "Interior Design · Materialidad",
    description:
      "Cocina contemporánea donde el mármol verde se convierte en el elemento protagonista, equilibrado con madera clara y luz cálida.",
    palette: [
      "#6b8a6a",
      "#e8dcc8",
      "#c48a60",
      "#d4c0a8",
      "#c8a030",
    ],
    materiales: [
      "linear-gradient(135deg,#5a7a58 0%,#8aaa80 100%)",
      "radial-gradient(circle,#ede0c8 0%,#c8b090 100%)",
      "linear-gradient(135deg,#a07040 0%,#c89060 100%)",
      "radial-gradient(circle,#f0d870 0%,#c8a030 100%)",
    ],
    detalles: [
      "radial-gradient(circle,#c8a030 0%,#8a6010 100%)",
      "radial-gradient(circle,#5a7a58 0%,#3a5a38 100%)",
      "radial-gradient(circle,#a07040 0%,#704020 100%)",
      "radial-gradient(circle,#6a8a60 0%,#4a6a40 100%)",
    ],
  },
  {
    image: "46",
    imgPos: "center",
    name: "Lunar Suite",
    subtitle: "Interior Design · Atmósfera",
    description:
      "Espacio diseñado como un refugio sensorial, donde la iluminación, las curvas y los materiales naturales generan una experiencia envolvente.",
    palette: [
      "#5a7a5a",
      "#c8a878",
      "#e8e0d0",
      "#7a6a5a",
      "#e0d0b8",
    ],
    materiales: [
      "linear-gradient(135deg,#8a6030 0%,#c09050 100%)",
      "radial-gradient(circle,#e8e0d0 0%,#c8c0b0 100%)",
      "linear-gradient(135deg,#5a7a5a 0%,#3a5a3a 100%)",
      "radial-gradient(circle,#e0d0b8 0%,#c0b098 100%)",
    ],
    detalles: [
      "radial-gradient(circle,#c8a030 0%,#8a6010 100%)",
      "radial-gradient(circle,#5a7a5a 0%,#3a5a3a 100%)",
      "radial-gradient(circle,#c8a878 0%,#a08858 100%)",
      "radial-gradient(circle,#8a6030 0%,#5a4020 100%)",
    ],
  },
];

export default function InteriorDesign() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#ece2cc] p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-2xl text-[#3a2611]"
        style={{ background: "linear-gradient(180deg,#f2e4cc 0%,#ede0c4 100%)" }}
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
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#b08654]/60" />
              <span
                className="font-serif tracking-[0.42em] text-[#b08654]"
                style={{ fontSize: "clamp(0.65rem,0.9vw,0.78rem)" }}
              >
                03
              </span>
              <span className="h-px w-8 bg-[#b08654]/60" />
            </div>
            <h1
              className="font-serif font-light tracking-[0.12em] leading-none text-[#3a2611]"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              INTERIOR DESIGN
            </h1>
            <p
              className="font-serif tracking-[0.22em] text-[#3a2611]/75"
              style={{ fontSize: "clamp(0.55rem,0.8vw,0.7rem)" }}
            >
              ESPACIOS QUE TRANSMITEN CALIDEZ, CONFORT Y AUTENTICIDAD.
            </p>
            <span aria-hidden className="mt-1 block h-px w-10 bg-[#b08654]/60" />
          </header>

          {/* Two project rows */}
          {projects.map((p, i) => (
            <div key={p.name} className="grid grid-cols-[58%_42%] gap-4 flex-1 min-h-0">
              {/* Photo */}
              <div
                role="img"
                aria-label={p.name}
                className="h-full w-full rounded-sm shadow-md"
                style={{
                  backgroundImage: `url(/img/${p.image}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: p.imgPos,
                }}
              />

              {/* Info panel */}
              <div className="flex flex-col justify-center gap-2 pr-1">
                <div>
                  <h2
                    className="font-serif leading-tight"
                    style={{ fontSize: "clamp(0.9rem,1.6vw,1.35rem)" }}
                  >
                    {p.name}
                  </h2>
                  <p
                    className="font-serif text-[#3a2611]/70 mt-0.5"
                    style={{ fontSize: "clamp(0.55rem,0.78vw,0.68rem)" }}
                  >
                    {p.subtitle}
                  </p>
                  <span aria-hidden className="mt-1.5 block h-px w-8 bg-[#b08654]/60" />
                </div>

                <p
                  className="font-serif leading-relaxed text-[#3a2611]/85"
                  style={{ fontSize: "clamp(0.6rem,0.85vw,0.75rem)" }}
                >
                  {p.description}
                </p>

                {/* Palette */}
                <div>
                  <p
                    className="font-serif tracking-[0.22em] text-[#3a2611]/60 mb-1"
                    style={{ fontSize: "clamp(0.5rem,0.68vw,0.6rem)" }}
                  >
                    PALETA DE COLORES
                  </p>
                  <div className="flex gap-1.5">
                    {p.palette.map((c, j) => (
                      <span
                        key={j}
                        className="rounded-full shadow-sm"
                        style={{ background: c, width: "clamp(14px,2.2vw,20px)", height: "clamp(14px,2.2vw,20px)" }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>

                {/* Materiales */}
                <div>
                  <p
                    className="font-serif tracking-[0.22em] text-[#3a2611]/60 mb-1"
                    style={{ fontSize: "clamp(0.5rem,0.68vw,0.6rem)" }}
                  >
                    MATERIALES Y TEXTURAS
                  </p>
                  <div className="flex gap-1.5">
                    {p.materiales.map((s, j) => (
                      <span
                        key={j}
                        className="rounded-sm shadow-sm"
                        style={{ background: s, width: "clamp(18px,3vw,28px)", height: "clamp(14px,2.2vw,20px)" }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>

                {/* Detalles */}
                <div>
                  <p
                    className="font-serif tracking-[0.22em] text-[#3a2611]/60 mb-1"
                    style={{ fontSize: "clamp(0.5rem,0.68vw,0.6rem)" }}
                  >
                    DETALLES CLAVE
                  </p>
                  <div className="flex gap-1.5">
                    {p.detalles.map((s, j) => (
                      <span
                        key={j}
                        className="rounded-full shadow-sm"
                        style={{ background: s, width: "clamp(16px,2.5vw,24px)", height: "clamp(16px,2.5vw,24px)" }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Divider strip between rows */}
          {/* Footer */}
          <footer className="flex items-center gap-4 px-2 pt-1 border-t border-[#b08654]/20">
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: "clamp(36px,5vw,50px)",
                height: "clamp(36px,5vw,50px)",
                border: "1.5px solid #b08654",
              }}
            >
              <Leaf className="h-4 w-4 text-[#b08654]" />
            </div>
            <p
              className="font-serif italic leading-relaxed text-[#3a2611]/80 flex-1"
              style={{ fontSize: "clamp(0.6rem,0.85vw,0.75rem)" }}
            >
              Cada proyecto nace del equilibrio entre funcionalidad, belleza y bienestar,
              creando espacios que cuentan historias y transforman la vida cotidiana.
            </p>
            <div className="flex flex-col items-end text-right">
              <span
                className="font-serif font-light tracking-[0.38em]"
                style={{ fontSize: "clamp(0.85rem,1.4vw,1.15rem)" }}
              >
                LIZUSH
              </span>
              <span
                className="font-serif tracking-[0.32em] text-[#3a2611]/70"
                style={{ fontSize: "clamp(0.45rem,0.65vw,0.58rem)" }}
              >
                ARCHITECT STUDIO
              </span>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
