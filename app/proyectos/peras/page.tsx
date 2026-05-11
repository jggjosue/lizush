import { Leaf } from "../../_components/Leaf";

export default function Peras() {
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
          background-position: center;
        }
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(8,5,3,0.25) 0%,
            rgba(8,5,3,0.04) 30%,
            rgba(8,5,3,0.04) 55%,
            rgba(8,5,3,0.55) 80%,
            rgba(8,5,3,0.85) 100%
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

      <div className="flex flex-1 flex-col items-center justify-end text-sand text-center px-8 pb-14 sm:pb-20 min-h-[calc(100vh-0px)]">

        <FlankedLabel>
          <span
            className="font-serif tracking-[0.55em] text-sand-soft"
            style={{ fontSize: "clamp(0.72rem,1.05vw,0.92rem)" }}
          >
            RESIDENCIAL
          </span>
        </FlankedLabel>

        <h1
          className="mt-4 font-serif font-light leading-none tracking-[0.04em] text-sand"
          style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}
        >
          PERAS
        </h1>

        <p
          className="mt-4 font-serif tracking-[0.55em] text-sand-soft"
          style={{ fontSize: "clamp(0.72rem,1.05vw,0.92rem)" }}
        >
          HIDALGO, PACHUCA
        </p>

        <Leaf className="mt-8 h-6 w-6 text-[#c9a978]" />

        <span
          className="mt-3 font-serif font-light tracking-[0.42em] text-sand"
          style={{ fontSize: "clamp(1.3rem,2.2vw,1.8rem)" }}
        >
          LIZUSH
        </span>
        <span
          className="font-serif tracking-[0.42em] text-sand-soft"
          style={{ fontSize: "clamp(0.62rem,0.92vw,0.82rem)" }}
        >
          ARCHITECT STUDIO
        </span>

      </div>
    </>
  );
}

function FlankedLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-[420px] items-center justify-center gap-4">
      <span className="h-px flex-1 bg-[#c9a978]/55" />
      {children}
      <span className="h-px flex-1 bg-[#c9a978]/55" />
    </div>
  );
}
