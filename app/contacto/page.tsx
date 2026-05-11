import { Leaf } from "../_components/Leaf";

const contactItems = [
  { icon: "phone", label: "TELÉFONO", value: "+52 55 1234 5678" },
  { icon: "mail", label: "EMAIL", value: "hola@lizush.com" },
  { icon: "pin", label: "UBICACIÓN", value: "Ciudad de México, MX" },
  { icon: "ig", label: "INSTAGRAM", value: "@lizush_architect" },
];

const socialLinks = ["INSTAGRAM", "PINTEREST", "BEHANCE", "LINKEDIN"];

function ContactIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    phone: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></>,
    pin: <><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></>,
    ig: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      {icons[type]}
    </svg>
  );
}

export default function Contacto() {
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
          background-image: url('/img/20.png');
          background-size: cover;
          background-position: center;
        }
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(8,5,3,0.68) 0%,
            rgba(8,5,3,0.38) 22%,
            rgba(8,5,3,0.28) 55%,
            rgba(8,5,3,0.58) 80%,
            rgba(8,5,3,0.82) 100%
          );
        }
        body > header,
        body header:first-of-type {
          background: rgba(8,5,3,0.22) !important;
          border-bottom-color: rgba(201,169,120,0.12) !important;
        }
        #contacto,
        body > footer {
          background: rgba(8,5,3,0.68) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        #contacto .border-t {
          border-color: rgba(201,169,120,0.15) !important;
        }
      `}</style>

      <div className="flex flex-1 flex-col items-center justify-between text-sand px-8 sm:px-14 pt-10 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top branding */}
        <header className="flex flex-col items-center text-center mt-8 sm:mt-12 gap-2">
          <div className="flex items-center gap-3 w-full max-w-[280px]">
            <span className="h-px flex-1 bg-[#c9a978]/45" />
            <Leaf className="h-4 w-4 text-[#c9a978]" />
            <span className="h-px flex-1 bg-[#c9a978]/45" />
          </div>
          <h1
            className="font-serif font-light tracking-[0.42em] text-sand leading-none mt-2"
            style={{ fontSize: "clamp(2.6rem,7.5vw,6rem)" }}
          >
            LIZUSH
          </h1>
          <p
            className="font-serif tracking-[0.38em] text-sand-soft"
            style={{ fontSize: "clamp(0.6rem,0.95vw,0.82rem)" }}
          >
            ARCHITECT STUDIO
          </p>
          <span aria-hidden className="mt-2 block h-px w-12 bg-[#c9a978]/55" />
          <p
            className="mt-1 font-serif tracking-[0.22em] text-sand-soft/65"
            style={{ fontSize: "clamp(0.46rem,0.7vw,0.6rem)" }}
          >
            ARQUITECTURA&nbsp;&nbsp;•&nbsp;&nbsp;INTERIORISMO&nbsp;&nbsp;•&nbsp;&nbsp;VISUALIZACIÓN
          </p>
        </header>

        {/* Center: two-column panels */}
        <section className="grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-[720px] py-8">

          {/* Left: Digital Presence */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-[#c9a978]/55" />
              <span
                className="font-serif tracking-[0.30em] text-[#c9a978]"
                style={{ fontSize: "clamp(0.5rem,0.76vw,0.66rem)" }}
              >
                DIGITAL PRESENCE
              </span>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center mt-1">
              <div
                className="rounded-[12px] border border-[#c9a978]/30 shadow-xl overflow-hidden"
                style={{ width: "clamp(80px,13vw,130px)", height: "clamp(145px,22vw,220px)" }}
              >
                <div
                  className="h-full w-full"
                  style={{ backgroundImage: "url(/img/39.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                  role="img"
                  aria-label="Instagram @lizush_architect"
                />
              </div>
            </div>

            <p
              className="text-center font-serif tracking-[0.20em] text-sand-soft/60 mt-1"
              style={{ fontSize: "clamp(0.42rem,0.62vw,0.54rem)" }}
            >
              @lizush_architect
            </p>

            <div className="mt-2 flex flex-col gap-1.5">
              <span
                className="font-serif tracking-[0.26em] text-[#c9a978]/80"
                style={{ fontSize: "clamp(0.46rem,0.68vw,0.58rem)" }}
              >
                SÍGUENOS
              </span>
              {socialLinks.map(s => (
                <div key={s} className="flex items-center gap-2">
                  <span className="h-px w-3 bg-[#c9a978]/40" />
                  <span
                    className="font-serif tracking-[0.20em] text-sand-soft/70"
                    style={{ fontSize: "clamp(0.42rem,0.62vw,0.54rem)" }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contacto */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-[#c9a978]/55" />
              <span
                className="font-serif tracking-[0.30em] text-[#c9a978]"
                style={{ fontSize: "clamp(0.5rem,0.76vw,0.66rem)" }}
              >
                CONTACTO
              </span>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {contactItems.map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="shrink-0 text-[#c9a978]/75 mt-0.5"
                    style={{ width: "clamp(13px,1.8vw,16px)", height: "clamp(13px,1.8vw,16px)" }}
                  >
                    <ContactIcon type={item.icon} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="font-serif tracking-[0.24em] text-[#c9a978]/60"
                      style={{ fontSize: "clamp(0.38rem,0.54vw,0.47rem)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="font-serif text-sand-soft/85 leading-tight"
                      style={{ fontSize: "clamp(0.48rem,0.70vw,0.62rem)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5 border-t border-[#c9a978]/20">
              <p
                className="font-serif italic text-sand-soft/65 leading-relaxed"
                style={{ fontSize: "clamp(0.5rem,0.72vw,0.62rem)" }}
              >
                &ldquo;Designing spaces that communicate,<br />inspire and connect.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Bottom branding */}
        <footer className="flex flex-col items-center text-center gap-1 pb-4">
          <span
            className="font-serif font-light tracking-[0.38em] text-sand"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1.2rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.32em] text-sand-soft/65"
            style={{ fontSize: "clamp(0.42rem,0.6vw,0.52rem)" }}
          >
            ARCHITECT STUDIO
          </span>
        </footer>

      </div>
    </>
  );
}
