import { Leaf } from "../../_components/Leaf";

const palette = [
  {
    swatch: "linear-gradient(135deg, #6f4a2a 0%, #8a5d33 60%, #5b3a1f 100%)",
    title: "WARM OAK",
    subtitle: "MADERA CÁLIDA",
  },
  {
    swatch: "radial-gradient(circle at 35% 35%, #ecdcc1 0%, #c8a77f 70%, #a07d52 100%)",
    title: "SOFT STONE",
    subtitle: "PIEDRA NATURAL",
  },
  {
    swatch: "radial-gradient(circle at 35% 35%, #f1e3c9 0%, #d8c3a2 70%, #b29675 100%)",
    title: "BOUCLÉ",
    subtitle: "TEXTILES SUAVES",
  },
  {
    swatch: "radial-gradient(circle at 30% 30%, #f3d590 0%, #c69c4a 60%, #8a6520 100%)",
    title: "BRUSHED BRASS",
    subtitle: "METAL CEPILLADO",
  },
];

export default function MaterialidadProyecto() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#ece2cc] p-4 sm:p-8">
      <article className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm bg-[#f1e2c8] px-8 sm:px-14 py-10 sm:py-14 shadow-2xl ring-1 ring-[#c9a978]/40 text-[#3a2611]">

        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Leaf className="h-6 w-6 text-[#b08654]" />
          <h1
            className="mt-3 font-serif font-light tracking-[0.04em] leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem,6vw,4.8rem)" }}
          >
            MATERIALIDAD
            <br />
            <span className="relative inline-block">
              SIGNATURE
              <span
                aria-hidden
                className="absolute left-1/2 -bottom-2 block h-px w-3/4 -translate-x-1/2 bg-[#b08654]/70"
              />
            </span>
          </h1>
          <p
            className="mt-6 font-serif italic"
            style={{ fontSize: "clamp(0.95rem,1.4vw,1.2rem)" }}
          >
            Texturas atemporales, composición refinada.
          </p>
        </header>

        {/* Moodboard + sidebar text */}
        <section className="mt-8 grid grid-cols-[28%_72%] items-start gap-5">
          <aside className="flex flex-col gap-5 pt-2">
            <p
              className="font-serif leading-relaxed"
              style={{ fontSize: "clamp(0.75rem,1vw,0.92rem)" }}
            >
              Una selección de
              <br />
              materiales que
              <br />
              construyen atmósferas
              <br />
              cálidas, atemporales
              <br />y profundamente
              <br />
              sensoriales.
            </p>
            <p
              className="font-serif leading-relaxed"
              style={{ fontSize: "clamp(0.75rem,1vw,0.92rem)" }}
            >
              La esencia Lizush
              <br />
              se define en la coherencia
              <br />
              entre textura, luz
              <br />y proporción.
            </p>

            <Leaf className="mt-3 h-5 w-5 text-[#b08654]/70" />

            <p
              className="mt-1 font-serif tracking-[0.28em] text-[#3a2611]/80"
              style={{ fontSize: "clamp(0.65rem,0.85vw,0.78rem)" }}
            >
              MATERIALIDAD
              <br />
              COMO LENGUAJE
              <br />
              ESPACIAL.
            </p>
          </aside>

          {/* Flat-lay moodboard image */}
          <div
            role="img"
            aria-label="Moodboard de materiales"
            className="aspect-[4/3] w-full rounded-sm shadow-md"
            style={{
              backgroundImage: "url(/img/32.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>

        {/* Paleta Natural */}
        <section className="mt-7 flex flex-col items-center">
          <span aria-hidden className="block h-px w-12 bg-[#b08654]/60" />
          <h2
            className="mt-3 font-serif tracking-[0.42em]"
            style={{ fontSize: "clamp(0.85rem,1.2vw,1.05rem)" }}
          >
            PALETA NATURAL
          </h2>

          <ul className="mt-5 grid w-full grid-cols-4 gap-3">
            {palette.map((p) => (
              <li key={p.title} className="flex flex-col items-center text-center">
                <span
                  aria-hidden
                  className="h-12 w-12 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.18)]"
                  style={{ background: p.swatch }}
                />
                <span
                  className="mt-3 font-serif tracking-[0.22em]"
                  style={{ fontSize: "clamp(0.65rem,0.9vw,0.8rem)" }}
                >
                  {p.title}
                </span>
                <span
                  className="mt-1 font-serif tracking-[0.22em] text-[#3a2611]/75"
                  style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)" }}
                >
                  {p.subtitle}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Dining room photo with circular detail overlay */}
        <section className="relative mt-7 flex-1">
          <div
            role="img"
            aria-label="Comedor con mesa de travertino y péndulos de latón"
            className="h-full w-full rounded-sm shadow-md overflow-hidden"
            style={{
              backgroundImage: "url(/img/33.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 200,
            }}
          />
          {/* Circular detail image overlay */}
          <div
            aria-hidden
            className="absolute bottom-3 left-3 rounded-full border-2 border-[#c9a978]/80 shadow-lg overflow-hidden"
            style={{
              width: "clamp(60px,10vw,90px)",
              height: "clamp(60px,10vw,90px)",
              backgroundImage: "url(/img/35.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>

        {/* Footer */}
        <footer className="mt-6 flex flex-col items-center gap-1 text-center">
          <Leaf className="h-5 w-5 text-[#b08654]/80" />
          <span
            className="font-serif font-light tracking-[0.42em]"
            style={{ fontSize: "clamp(1.2rem,1.9vw,1.6rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.42em] text-[#3a2611]/85"
            style={{ fontSize: "clamp(0.65rem,0.9vw,0.78rem)" }}
          >
            ARCHITECT STUDIO
          </span>
          <p
            className="mt-1 flex items-center gap-3 font-serif tracking-[0.32em] text-[#3a2611]/85"
            style={{ fontSize: "clamp(0.6rem,0.85vw,0.72rem)" }}
          >
            <span>ARQUITECTURA</span>
            <span aria-hidden>•</span>
            <span>INTERIORISMO</span>
            <span aria-hidden>•</span>
            <span>VISUALIZACIÓN</span>
          </p>
          <span
            className="mt-2 font-serif tracking-[0.42em] text-[#3a2611]/85"
            style={{ fontSize: "clamp(0.6rem,0.85vw,0.72rem)" }}
          >
            CIUDAD DE MÉXICO, MX
          </span>
        </footer>
      </article>
    </div>
  );
}
