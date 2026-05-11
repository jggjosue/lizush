import { Badge } from "../../_components/Badge";

export default function IglesiaNayaritInterior() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-2xl"
        style={{ background: "linear-gradient(180deg, #f1e2c8 0%, #ede0c4 100%)" }}
      >
        {/* Border frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(180,140,80,0.35)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-6 sm:px-10 pt-6 sm:pt-8 pb-6 sm:pb-8 gap-4">

          {/* Main photo — large */}
          <div
            role="img"
            aria-label="Interior nave principal Iglesia Nayarit"
            className="w-full rounded-sm shadow-lg flex-[5] min-h-0"
            style={{
              backgroundImage: "url(/img/30.png)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />

          {/* Two detail photos side by side */}
          <div className="grid grid-cols-2 gap-4 flex-[3] min-h-0">
            <div
              role="img"
              aria-label="Detalle banca y pasillo"
              className="w-full h-full rounded-sm shadow-md"
              style={{
                backgroundImage: "url(/img/28.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              role="img"
              aria-label="Detalle banca de madera"
              className="w-full h-full rounded-sm shadow-md"
              style={{
                backgroundImage: "url(/img/28.png)",
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            />
          </div>

          {/* Text block + Badge */}
          <footer className="flex flex-col items-center text-center text-[#3a2611] flex-[2] justify-center gap-2">
            <h1
              className="font-serif font-light tracking-[0.18em] leading-none"
              style={{ fontSize: "clamp(1.6rem,4vw,3.2rem)" }}
            >
              ESPACIOS SAGRADOS
            </h1>

            <span aria-hidden className="block h-px w-16 bg-[#b08654]/70 my-1" />

            <h2
              className="font-serif tracking-[0.32em]"
              style={{ fontSize: "clamp(0.8rem,1.4vw,1.1rem)" }}
            >
              IGLESIA NAYARIT
            </h2>
            <p
              className="font-serif tracking-[0.32em] text-[#b08654]"
              style={{ fontSize: "clamp(0.6rem,0.9vw,0.78rem)" }}
            >
              NAYARIT, MÉXICO
            </p>

            <p
              className="mt-2 font-serif italic text-[#3a2611]/80 leading-relaxed"
              style={{ fontSize: "clamp(0.75rem,1.1vw,0.95rem)" }}
            >
              Diseño espiritual contemporáneo donde la luz,
              <br />
              la materia y la calma se encuentran.
            </p>

            <div className="mt-3">
              <Badge size={64} subtitle="ARCHITECT" />
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
