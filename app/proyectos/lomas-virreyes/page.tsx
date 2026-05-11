export default function LomasVirreyes() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative w-full max-w-[1024px] aspect-[1024/1500] overflow-hidden rounded-sm shadow-2xl"
        style={{ background: "#0e0805" }}
      >
        {/* Top photo — podcast studio */}
        <div
          role="img"
          aria-label="Estudio podcast Lomas de Virreyes — mesa y micrófonos"
          className="absolute inset-x-0 top-0"
          style={{
            height: "52%",
            backgroundImage: "url(/img/41.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Gradient between photos */}
        <div
          aria-hidden
          className="absolute inset-x-0 z-10"
          style={{
            top: "46%",
            height: "12%",
            background: "linear-gradient(180deg, transparent 0%, #0e0805 100%)",
          }}
        />

        {/* Bottom photo — lounge */}
        <div
          role="img"
          aria-label="Lounge Lomas de Virreyes — sofá y sillón rojo"
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "52%",
            backgroundImage: "url(/img/8.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Top gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-20"
          style={{
            height: "52%",
            background:
              "linear-gradient(180deg, rgba(8,5,3,0.78) 0%, rgba(8,5,3,0.30) 45%, rgba(8,5,3,0.0) 100%)",
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-20"
          style={{
            height: "52%",
            background:
              "linear-gradient(180deg, rgba(8,5,3,0.0) 0%, rgba(8,5,3,0.40) 100%)",
          }}
        />

        {/* Branding — top center */}
        <div className="absolute inset-x-0 top-0 z-30 flex flex-col items-center text-center px-8 sm:px-14 pt-10 sm:pt-14">
          {/* OFICINA label flanked */}
          <div className="flex w-full max-w-[420px] items-center gap-4">
            <span className="h-px flex-1 bg-[#c9a978]/60" />
            <span
              className="font-serif tracking-[0.52em] text-[#c9a978]"
              style={{ fontSize: "clamp(0.6rem,0.9vw,0.78rem)" }}
            >
              OFICINA
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/60" />
          </div>

          {/* Title */}
          <h1
            className="mt-2 font-serif font-light leading-none tracking-[0.04em] text-sand"
            style={{ fontSize: "clamp(2.2rem,6.5vw,5.2rem)" }}
          >
            LOMAS DE
            <br />
            VIRREYES
          </h1>

          {/* LIZUSH branding */}
          <div className="mt-4 flex flex-col items-center gap-0.5">
            <span
              className="font-serif font-light tracking-[0.42em] text-sand"
              style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)" }}
            >
              LIZUSH
            </span>
            <span
              className="font-serif tracking-[0.38em] text-sand-soft"
              style={{ fontSize: "clamp(0.55rem,0.8vw,0.7rem)" }}
            >
              ARCHITECT STUDIO
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
