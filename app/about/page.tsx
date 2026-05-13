"use client";

import { Badge } from "../_components/Badge";
import { useLanguage } from "../_context/LanguageContext";
import { t } from "../_i18n/translations";

export default function About() {
  const { lang } = useLanguage();
  const T = t[lang].about;

  return (
    <>
      <style>{`
        body { background-color: transparent !important; }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -2;
          background-color: #e8ddd0;
        }
        body::after { content: none; }
        body > header, body header:first-of-type {
          background: rgba(232,221,208,0.82) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom-color: rgba(176,134,84,0.20) !important;
        }
        body header a, body header span, body header button { color: #3a2611 !important; }
        body header svg { stroke: #3a2611 !important; }
        body header ul {
          background: rgba(232,221,208,0.97) !important;
          border-color: rgba(176,134,84,0.28) !important;
          box-shadow: 0 8px 24px rgba(58,38,17,0.12) !important;
        }
        body header ul a { color: #3a2611 !important; }
        body header ul a:hover {
          background: rgba(176,134,84,0.14) !important;
          color: #3a2611 !important;
        }
        body header [class*="border-b-"] { border-bottom-color: rgba(232,221,208,0.97) !important; }
        #contacto, body > footer {
          background: rgba(200,185,165,0.90) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #3a2611 !important;
        }
        #contacto .border-t, body > footer .border-t { border-color: rgba(176,134,84,0.25) !important; }
        #contacto a, #contacto span, body > footer a, body > footer span, body > footer p { color: #3a2611cc !important; }
        #contacto h2, body > footer h2 { color: #3a2611 !important; }
      `}</style>

      <div className="flex flex-1 flex-col items-center justify-between text-[#3a2611] px-8 pt-10 pb-10 min-h-[calc(100vh-0px)]">
        <header className="flex flex-col items-center text-center mt-8 sm:mt-12 gap-3">
          <div className="flex items-center gap-4 w-full max-w-[280px]">
            <span className="h-px flex-1 bg-[#c9a978]/45" />
            <span className="font-serif tracking-[0.44em] text-[#b08654]" style={{ fontSize: "clamp(0.55rem,0.85vw,0.72rem)" }}>
              {T.studio}
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/45" />
          </div>
          <h1 className="font-serif font-light tracking-[0.06em] text-[#3a2611] leading-none" style={{ fontSize: "clamp(3rem,8vw,6rem)" }}>
            {T.title}
          </h1>
          <span aria-hidden className="block h-px w-14 bg-[#c9a978]/55" />
        </header>

        <section className="flex flex-col items-center gap-8 text-center max-w-[640px] py-8">
          <div
            className="rounded-sm shadow-xl ring-1 ring-[#c9a978]/25"
            style={{ width: "clamp(200px, 45vw, 420px)", aspectRatio: "560 / 420", backgroundImage: "url(/img/34.png)", backgroundSize: "cover", backgroundPosition: "center" }}
            aria-label="Materials and design palette"
            role="img"
          />
          <div className="flex flex-col gap-5 font-serif leading-relaxed text-[#3a2611]/85">
            <p style={{ fontSize: "clamp(0.9rem,1.3vw,1.12rem)" }}>{T.p1}</p>
            <p style={{ fontSize: "clamp(0.9rem,1.3vw,1.12rem)" }}>{T.p2}</p>
            <p style={{ fontSize: "clamp(0.9rem,1.3vw,1.12rem)" }}>{T.p3}</p>
            <p className="italic text-[#3a2611]/65 mt-1" style={{ fontSize: "clamp(0.92rem,1.35vw,1.15rem)" }}>
              {T.tagline}
            </p>
          </div>
        </section>

        <div className="flex flex-col items-center gap-3 pb-4">
          <Badge size={88} subtitle="ARCHITECT STUDIO" />
          <span className="font-serif tracking-[0.42em] text-[#3a2611]/60" style={{ fontSize: "clamp(0.6rem,0.88vw,0.75rem)" }}>
            {T.city}
          </span>
        </div>
      </div>
    </>
  );
}
