export default function LomasTecamachalco() {
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
          background-image: url('/img/47.png');
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
            rgba(8,5,3,0.52) 0%,
            rgba(8,5,3,0.10) 22%,
            rgba(8,5,3,0.04) 55%,
            rgba(8,5,3,0.55) 82%,
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

      <div className="flex flex-1 flex-col items-center justify-between text-sand px-8 pt-10 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top header */}
        <header className="flex flex-col items-center text-center mt-10 sm:mt-16 gap-4">
          <Leaf />
          <FlankedLabel>
            <span
              className="font-serif tracking-[0.55em] text-sand-soft"
              style={{ fontSize: "clamp(0.72rem,1.05vw,0.92rem)" }}
            >
              RESIDENCIAL
            </span>
          </FlankedLabel>
          <h1
            className="mt-2 font-serif font-light leading-[0.95] tracking-[0.02em] text-sand"
            style={{ fontSize: "clamp(2.6rem,7vw,5.8rem)" }}
          >
            LOMAS
            <br />
            TECAMACHALCO
          </h1>
          <span aria-hidden className="block h-px w-20 bg-[#c9a978]/65" />
          <p
            className="font-serif tracking-[0.55em] text-sand-soft"
            style={{ fontSize: "clamp(0.68rem,1vw,0.88rem)" }}
          >
            HUIXQUILUCAN
          </p>
        </header>

        {/* Bottom branding */}
        <footer className="flex flex-col items-center gap-1 text-center pb-4">
          <span
            className="font-serif font-light tracking-[0.42em] text-sand"
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
        </footer>

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

function Leaf() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 text-[#c9a978]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M16 4v24" />
      <path d="M16 14c-4-2-7-2-9 0 1 4 4 6 9 5" />
      <path d="M16 14c4-2 7-2 9 0-1 4-4 6-9 5" />
    </svg>
  );
}
