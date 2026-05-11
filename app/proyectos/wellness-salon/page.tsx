import { Leaf } from "../../_components/Leaf";
import { Badge } from "../../_components/Badge";

const materiales = [
  {
    swatch: "radial-gradient(circle at 35% 35%, #f0e8dc 0%, #d8cfc4 70%, #b8afa4 100%)",
    label: "TELA BOUCLÉ",
  },
  {
    swatch: "radial-gradient(circle at 35% 35%, #f4ece0 0%, #ddd0bc 60%, #c4b09a 100%)",
    label: "ÓNIX VETEADO",
  },
  {
    swatch: "radial-gradient(circle at 30% 30%, #c8dcc8 0%, #a0c4a0 60%, #6a9a6a 100%)",
    label: "ÓNIX VERDE",
  },
  {
    swatch: "linear-gradient(135deg, #8a5a2a 0%, #a06c38 50%, #6b4420 100%)",
    label: "MADERA CÁLIDA",
  },
  {
    swatch: "radial-gradient(circle at 30% 30%, #f0d870 0%, #c8a030 60%, #8a6a10 100%)",
    label: "METAL CEPILLADO",
  },
];

export default function WellnessSalon() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#ece2cc] p-4 sm:p-8">
      <article
        className="relative flex w-full max-w-[1024px] aspect-[1024/1500] flex-col overflow-hidden rounded-sm shadow-2xl text-[#3a2611]"
        style={{ background: "linear-gradient(180deg, #f2e4cc 0%, #ede0c4 100%)" }}
      >
        {/* Frame border */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10px] z-10 rounded-[2px]"
          style={{ border: "1px solid rgba(180,140,80,0.30)" }}
        />

        <div className="relative z-20 flex h-full flex-col px-6 sm:px-10 pt-6 sm:pt-8 pb-5 sm:pb-7 gap-3">

          {/* Header */}
          <header className="flex flex-col items-center text-center gap-1">
            <Leaf className="h-5 w-5 text-[#b08654]" />
            <h1
              className="font-serif font-light tracking-[0.14em] leading-none text-[#3a2611]"
              style={{ fontSize: "clamp(1.8rem,4.8vw,3.8rem)" }}
            >
              WELLNESS SALON
            </h1>
            <p
              className="font-serif tracking-[0.36em] text-[#b08654]"
              style={{ fontSize: "clamp(0.58rem,0.85vw,0.72rem)" }}
            >
              LUCERNE, SWITZERLAND
            </p>
          </header>

          {/* Main photo */}
          <div
            role="img"
            aria-label="Recepción Wellness Salon"
            className="w-full rounded-sm shadow-lg flex-[4] min-h-0"
            style={{
              backgroundImage: "url(/img/27.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Three detail photos */}
          <div className="grid grid-cols-3 gap-3 flex-[2.2] min-h-0">
            {[
              { img: "31", pos: "center top", label: "Lobby" },
              { img: "48", pos: "center", label: "Wellness room" },
              { img: "3",  pos: "center", label: "Lounge" },
            ].map(({ img, pos, label }) => (
              <div
                key={img}
                role="img"
                aria-label={label}
                className="w-full h-full rounded-sm shadow-md"
                style={{
                  backgroundImage: `url(/img/${img}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: pos,
                }}
              />
            ))}
          </div>

          {/* Tagline + description */}
          <div className="flex flex-col items-center text-center gap-1.5 pt-1">
            <p
              className="font-serif tracking-[0.26em] text-[#b08654]"
              style={{ fontSize: "clamp(0.6rem,0.9vw,0.78rem)" }}
            >
              DISEÑO QUE NUTRE CUERPO, MENTE Y ALMA.
            </p>
            <span aria-hidden className="block h-px w-12 bg-[#b08654]/60" />
            <p
              className="font-serif text-[#3a2611]/85 leading-relaxed"
              style={{ fontSize: "clamp(0.7rem,1vw,0.88rem)" }}
            >
              Un espacio dedicado al bienestar emocional y físico
              <br />
              a través de la materialidad, la iluminación y la
              <br />
              armonía espacial.
            </p>
          </div>

          {/* Material swatches */}
          <div className="grid grid-cols-5 gap-2 w-full">
            {materiales.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1">
                <span
                  className="w-full rounded-sm shadow-sm"
                  style={{ background: m.swatch, aspectRatio: "1/0.75" }}
                  aria-hidden
                />
                <span
                  className="font-serif tracking-[0.14em] text-[#3a2611]/75 text-center leading-tight"
                  style={{ fontSize: "clamp(0.42rem,0.6vw,0.54rem)" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Badge + city */}
          <div className="flex flex-col items-center gap-1.5 pb-1">
            <Badge size={56} subtitle="ARCHITECT" />
            <span
              className="font-serif tracking-[0.32em] text-[#3a2611]/75"
              style={{ fontSize: "clamp(0.55rem,0.78vw,0.68rem)" }}
            >
              CIUDAD DE MÉXICO, MX
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
