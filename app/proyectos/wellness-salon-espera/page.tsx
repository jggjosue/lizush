import { Leaf } from "../../_components/Leaf";

export default function WellnessSalonEspera() {
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
          background-image: url('/img/40.png');
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
            rgba(8,5,3,0.45) 0%,
            rgba(8,5,3,0.08) 20%,
            rgba(8,5,3,0.04) 55%,
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

      <div className="flex flex-1 flex-col items-center justify-between text-sand px-8 pt-10 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top label */}
        <header className="flex flex-col items-center text-center mt-8 sm:mt-14 gap-3">
          <div className="flex items-center gap-3 w-full max-w-[320px]">
            <span className="h-px flex-1 bg-[#c9a978]/45" />
            <span
              className="font-serif tracking-[0.44em] text-[#c9a978]"
              style={{ fontSize: "clamp(0.54rem,0.82vw,0.70rem)" }}
            >
              WELLNESS STUDIO
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/45" />
          </div>
          <h1
            className="font-serif font-light leading-tight tracking-[0.04em] text-sand"
            style={{ fontSize: "clamp(2rem,5.5vw,4.4rem)" }}
          >
            SALÓN DE ESPERA
          </h1>
          <span aria-hidden className="block h-px w-14 bg-[#c9a978]/55" />
          <p
            className="font-serif tracking-[0.32em] text-sand-soft/80"
            style={{ fontSize: "clamp(0.58rem,0.88vw,0.76rem)" }}
          >
            LUCERNA, SUIZA
          </p>
        </header>

        {/* Center concept caption */}
        <section className="text-center max-w-[480px]">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-[#c9a978]/40" />
            <Leaf className="h-4 w-4 text-[#c9a978]" />
            <span className="h-px w-8 bg-[#c9a978]/40" />
          </div>
          <p
            className="font-serif italic text-sand/80 leading-relaxed"
            style={{ fontSize: "clamp(0.85rem,1.3vw,1.1rem)" }}
          >
            &ldquo;Concepto Auroras Boreales&rdquo;
          </p>
          <p
            className="mt-3 font-serif tracking-[0.20em] text-sand-soft/65"
            style={{ fontSize: "clamp(0.56rem,0.84vw,0.72rem)" }}
          >
            SALÓN DE ESPERA WELLNESS STUDIO
            <br />
            CONCEPTO AURORAS BOREALES · LUCERNA SUIZA
          </p>
        </section>

        {/* Bottom branding */}
        <footer className="flex flex-col items-center gap-1 text-center pb-4">
          <span
            className="font-serif font-light tracking-[0.42em] text-sand"
            style={{ fontSize: "clamp(1.2rem,2vw,1.7rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.42em] text-sand-soft/75"
            style={{ fontSize: "clamp(0.58rem,0.88vw,0.76rem)" }}
          >
            ARCHITECT STUDIO
          </span>
        </footer>

      </div>
    </>
  );
}
