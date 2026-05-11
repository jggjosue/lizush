import type { ReactNode } from "react";
import { Badge } from "./_components/Badge";

export default function Home() {
  return (
    <>
      {/* Full-page background: image + gradient fixed behind everything */}
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
            rgba(8,5,3,0.45) 0%,
            rgba(8,5,3,0.10) 20%,
            rgba(8,5,3,0.05) 50%,
            rgba(8,5,3,0.35) 80%,
            rgba(8,5,3,0.72) 100%
          );
        }
        /* Make header fully transparent on home */
        body > header,
        body header:first-of-type {
          background: rgba(8,5,3,0.20) !important;
          border-bottom-color: rgba(201,169,120,0.12) !important;
        }
        /* Make footer semi-transparent on home */
        #contacto,
        body > footer {
          background: rgba(8,5,3,0.62) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        #contacto .border-t {
          border-color: rgba(201,169,120,0.15) !important;
        }
      `}</style>

      {/* Page content */}
      <div className="flex flex-1 flex-col items-center justify-between text-sand px-8 pt-16 pb-10 min-h-[calc(100vh-0px)]">

        {/* Top branding */}
        <header className="flex flex-col items-center text-center mt-10 sm:mt-16 gap-4">
          <FlankedTitle>
            <span
              className="font-serif font-light tracking-[0.38em] text-sand"
              style={{ fontSize: "clamp(3rem,9vw,6.5rem)" }}
            >
              LIZUSH
            </span>
          </FlankedTitle>
          <p
            className="font-serif tracking-[0.55em] text-sand-soft"
            style={{ fontSize: "clamp(0.75rem,1.6vw,1.2rem)" }}
          >
            ARCHITECT STUDIO
          </p>
          <span aria-hidden className="block h-px w-16 bg-[#c9a978]/50" />
          <p
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-serif tracking-[0.28em] text-sand-soft/80"
            style={{ fontSize: "clamp(0.6rem,1.2vw,0.95rem)" }}
          >
            <span>ARQUITECTURA</span>
            <span aria-hidden className="text-[#c9a978]">•</span>
            <span>INTERIORISMO</span>
            <span aria-hidden className="text-[#c9a978]">•</span>
            <span>VISUALIZACIÓN</span>
          </p>
        </header>

        {/* Center quote */}
        <section className="text-center px-4 max-w-[36ch]">
          <p
            className="font-serif italic leading-snug text-sand"
            style={{ fontSize: "clamp(1.2rem,2.4vw,2rem)" }}
          >
            &ldquo;Designing spaces that communicate, inspire and connect.&rdquo;
          </p>
        </section>

        {/* Bottom badge */}
        <div className="flex items-center justify-center gap-6 pb-4">
          <span className="h-px w-full max-w-[160px] bg-sand/25" />
          <Badge />
          <span className="h-px w-full max-w-[160px] bg-sand/25" />
        </div>

      </div>
    </>
  );
}

function FlankedTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
      <span className="h-px flex-1 max-w-[160px] bg-sand/35" />
      {children}
      <span className="h-px flex-1 max-w-[160px] bg-sand/35" />
    </div>
  );
}
