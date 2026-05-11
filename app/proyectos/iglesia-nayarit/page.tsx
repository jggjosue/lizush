import { Leaf } from "../../_components/Leaf";
import { Badge } from "../../_components/Badge";

const materiales = [
  {
    swatch: "radial-gradient(circle at 35% 35%, #ecdcc1 0%, #c8a77f 70%, #a07d52 100%)",
    label: "PIEDRA\nTRAVERTINO",
  },
  {
    swatch: "linear-gradient(135deg, #8a5a2a 0%, #a06c38 50%, #6b4420 100%)",
    label: "MADERA\nNATURAL",
  },
  {
    swatch: "linear-gradient(135deg, #c8dce8 0%, #e4eef5 50%, #b0c8d8 100%)",
    label: "VIDRIO",
  },
  {
    swatch: "radial-gradient(circle at 30% 30%, #e8d070 0%, #c4a030 60%, #8a6a10 100%)",
    label: "METAL\nMATÉ",
  },
];

export default function IglesiaNayarit() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm bg-[#f1e2c8] shadow-2xl ring-1 ring-[#c9a978]/40 text-[#3a2611]">

        {/* Top header */}
        <header className="flex flex-col items-center pt-8 sm:pt-10 px-8 sm:px-14 text-center">
          <Leaf className="h-5 w-5 text-[#b08654]" />
          <h1
            className="mt-3 font-serif font-light tracking-[0.12em] leading-none text-[#3a2611]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.4rem)" }}
          >
            ESPACIOS SAGRADOS
          </h1>
          <span aria-hidden className="mt-3 block h-px w-20 bg-[#b08654]/60" />
        </header>

        {/* Main photo */}
        <div className="mx-6 sm:mx-10 mt-5 flex-1 min-h-0">
          <div
            role="img"
            aria-label="Fachada Iglesia Nayarit"
            className="h-full w-full rounded-sm shadow-lg"
            style={{
              backgroundImage: "url(/img/29.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "clamp(220px, 42%, 480px)",
            }}
          />
        </div>

        {/* Bottom info section */}
        <section className="grid grid-cols-[55%_45%] gap-4 px-8 sm:px-12 pt-5 pb-8 sm:pb-10 items-start">
          {/* Left: text */}
          <div className="flex flex-col gap-3">
            <div>
              <h2
                className="font-serif font-semibold tracking-[0.04em] leading-tight"
                style={{ fontSize: "clamp(1.1rem,2.2vw,1.8rem)" }}
              >
                IGLESIA NAYARIT
              </h2>
              <p
                className="mt-1 font-serif tracking-[0.32em] text-[#b08654]"
                style={{ fontSize: "clamp(0.6rem,0.9vw,0.78rem)" }}
              >
                NAYARIT, MÉXICO
              </p>
            </div>

            <span aria-hidden className="block h-px w-10 bg-[#b08654]/60" />

            <p
              className="font-serif leading-relaxed text-[#3a2611]/90"
              style={{ fontSize: "clamp(0.7rem,1vw,0.88rem)" }}
            >
              Un espacio espiritual contemporáneo
              <br />
              donde la materialidad, la luz y el
              <br />
              simbolismo construyen una atmósfera
              <br />
              de calma, introspección y conexión.
            </p>

            <p
              className="mt-1 font-serif tracking-[0.22em] text-[#3a2611]/70 leading-relaxed"
              style={{ fontSize: "clamp(0.58rem,0.78vw,0.68rem)" }}
            >
              ARQUITECTURA QUE TRASCIENDE
              <br />
              LO FÍSICO Y CONECTA CON LO ESPIRITUAL.
            </p>
          </div>

          {/* Right: material swatches + badge */}
          <div className="flex flex-col items-center gap-3">
            {/* Swatches grid */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {materiales.map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-1.5">
                  <span
                    className="w-full rounded-sm shadow-md"
                    style={{
                      background: m.swatch,
                      aspectRatio: "1/1",
                    }}
                    aria-hidden
                  />
                  <span
                    className="font-serif tracking-[0.14em] text-[#3a2611]/80 text-center whitespace-pre-line leading-tight"
                    style={{ fontSize: "clamp(0.45rem,0.65vw,0.58rem)" }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <Badge size={64} subtitle="ARCHITECT" />

            {/* City */}
            <span
              className="font-serif tracking-[0.32em] text-[#3a2611]/80"
              style={{ fontSize: "clamp(0.58rem,0.8vw,0.7rem)" }}
            >
              CIUDAD DE MÉXICO, MX
            </span>
          </div>
        </section>
      </article>
    </div>
  );
}
