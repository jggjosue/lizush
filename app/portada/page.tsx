export default function Portada() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative w-full max-w-[1024px] aspect-[1024/1500] overflow-hidden rounded-sm shadow-2xl"
        style={{
          backgroundImage: "url(/img/20.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,5,3,0.55) 0%, rgba(8,5,3,0.15) 30%, rgba(8,5,3,0.15) 55%, rgba(8,5,3,0.82) 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col px-10 sm:px-16 py-10 sm:py-14 text-sand">
          {/* Header */}
          <header className="flex flex-col items-center text-center">
            <div className="flex w-full items-center gap-4 max-w-[480px] mx-auto">
              <span className="h-px flex-1 bg-[#c9a978]/70" />
              <span
                className="font-serif font-light tracking-[0.52em] text-sand"
                style={{ fontSize: "clamp(1.6rem,3.8vw,3rem)" }}
              >
                LIZUSH
              </span>
              <span className="h-px flex-1 bg-[#c9a978]/70" />
            </div>
            <span
              className="mt-1 font-serif tracking-[0.42em] text-sand-soft"
              style={{ fontSize: "clamp(0.6rem,0.9vw,0.78rem)" }}
            >
              ARCHITECT STUDIO
            </span>
            <p
              className="mt-2 font-serif tracking-[0.28em] text-sand-soft"
              style={{ fontSize: "clamp(0.55rem,0.8vw,0.7rem)" }}
            >
              ARQUITECTURA&nbsp;&nbsp;•&nbsp;&nbsp;INTERIORISMO&nbsp;&nbsp;•&nbsp;&nbsp;VISUALIZACIÓN
            </p>
          </header>

          {/* Center quote */}
          <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
            <span aria-hidden className="block h-px w-14 bg-[#c9a978]/60 mb-6" />
            <p
              className="font-serif italic font-light leading-relaxed text-sand"
              style={{ fontSize: "clamp(0.9rem,1.6vw,1.35rem)" }}
            >
              &ldquo;Designing spaces that communicate,
              <br />
              inspire and connect.&rdquo;
            </p>
            <span aria-hidden className="block h-px w-14 bg-[#c9a978]/60 mt-6" />
          </div>

          {/* Bottom section: SÍGUENOS + CONTACTO */}
          <footer className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start">
            {/* SÍGUENOS */}
            <div className="flex flex-col gap-3">
              <h2
                className="font-serif tracking-[0.38em] text-sand-soft"
                style={{ fontSize: "clamp(0.6rem,0.85vw,0.75rem)" }}
              >
                SÍGUENOS
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Instagram", handle: "@lizush.studio" },
                  { label: "Pinterest", handle: "lizush.studio" },
                  { label: "Behance", handle: "lizushstudio" },
                  { label: "LinkedIn", handle: "Lizush Studio" },
                ].map(({ label, handle }) => (
                  <li key={label} className="flex items-baseline gap-2">
                    <span
                      className="font-serif tracking-[0.2em] text-[#c9a978]"
                      style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-serif text-sand-soft"
                      style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)" }}
                    >
                      {handle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical divider + Badge */}
            <div className="flex flex-col items-center gap-3 self-stretch">
              <span aria-hidden className="block w-px flex-1 bg-[#c9a978]/40" />
              {/* Badge */}
              <div
                className="flex flex-col items-center justify-center rounded-full shrink-0"
                style={{
                  width: "clamp(56px,7vw,80px)",
                  height: "clamp(56px,7vw,80px)",
                  background:
                    "radial-gradient(circle at 30% 30%, #efd9b1 0%, #c9a978 60%, #8c6a44 100%)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                }}
              >
                <span
                  className="font-script text-[#3a2611] leading-none"
                  style={{ fontSize: "clamp(0.85rem,1.4vw,1.1rem)" }}
                >
                  Lizush
                </span>
                <span
                  className="font-serif tracking-[0.18em] text-[#3a2611]/80 leading-none mt-0.5"
                  style={{ fontSize: "clamp(0.35rem,0.5vw,0.45rem)" }}
                >
                  ARCHITECT
                </span>
              </div>
              <span aria-hidden className="block w-px flex-1 bg-[#c9a978]/40" />
            </div>

            {/* CONTACTO */}
            <div className="flex flex-col gap-3 items-end text-right">
              <h2
                className="font-serif tracking-[0.38em] text-sand-soft"
                style={{ fontSize: "clamp(0.6rem,0.85vw,0.75rem)" }}
              >
                CONTACTO
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Nombre", value: "Lizush Architect Studio" },
                  { label: "Email", value: "hola@lizush.studio" },
                  { label: "Ubicación", value: "Ciudad de México, MX" },
                ].map(({ label, value }) => (
                  <li key={label} className="flex flex-col">
                    <span
                      className="font-serif tracking-[0.2em] text-[#c9a978]"
                      style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-serif text-sand-soft"
                      style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)" }}
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
