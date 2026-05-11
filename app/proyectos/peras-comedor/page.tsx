import { Leaf } from "../../_components/Leaf";

export default function PerasComedor() {
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
          background-image: url('/img/33.png');
          background-size: cover;
          background-position: center top;
        }
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(8,5,3,0.52) 0%,
            rgba(8,5,3,0.10) 22%,
            rgba(8,5,3,0.05) 55%,
            rgba(8,5,3,0.50) 82%,
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

      <div className="flex flex-1 flex-col items-center justify-between text-sand text-center px-8 sm:px-14 pt-10 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top: project label + title */}
        <header className="flex flex-col items-center mt-8 sm:mt-14 gap-3">
          <Leaf className="h-5 w-5 text-[#c9a978]/85 mb-1" />
          <div className="flex w-full max-w-[300px] items-center gap-4">
            <span className="h-px flex-1 bg-[#c9a978]/55" />
            <span
              className="font-serif tracking-[0.58em] text-[#c9a978]"
              style={{ fontSize: "clamp(0.58rem,0.85vw,0.72rem)" }}
            >
              RESIDENCIAL
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/55" />
          </div>

          <h1
            className="font-serif font-light leading-none tracking-[0.08em] text-sand"
            style={{ fontSize: "clamp(3rem,8.5vw,6.8rem)", textShadow: "0 2px 28px rgba(8,5,3,0.60)" }}
          >
            PERAS
          </h1>

          <span aria-hidden className="block h-px w-20 bg-[#c9a978]/80" />

          <p
            className="font-serif tracking-[0.58em] text-[#c9a978]"
            style={{ fontSize: "clamp(0.65rem,1vw,0.85rem)" }}
          >
            HIDALGO, PACHUCA
          </p>

          <p
            className="font-serif tracking-[0.42em] text-sand-soft/65"
            style={{ fontSize: "clamp(0.60rem,0.88vw,0.76rem)" }}
          >
            COMEDOR
          </p>
        </header>

        {/* Bottom branding */}
        <footer className="flex flex-col items-center gap-2 pb-4">
          <Leaf className="h-6 w-6 text-[#c9a978]" />
          <span
            className="font-serif font-light tracking-[0.42em] text-sand"
            style={{ fontSize: "clamp(1.2rem,2.2vw,1.8rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.42em] text-sand-soft/80"
            style={{ fontSize: "clamp(0.62rem,0.92vw,0.80rem)" }}
          >
            ARCHITECT STUDIO
          </span>
        </footer>

      </div>
    </>
  );
}
