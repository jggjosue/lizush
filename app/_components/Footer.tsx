"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Must stay in sync with Header.tsx
const LIGHT_PAGES = [
  "/servicios",
  "/about",
  "/por-que-elegirnos",
  "/proceso-diseno",
  "/proyectos/materialidad",
  "/proyectos/iglesia-nayarit",
  "/proyectos/iglesia-nayarit-interior",
  "/proyectos/wellness-salon",
  "/proyectos/interior-design",
  "/proyectos/community-plaza",
  "/proyectos/urbanos",
  "/proyectos/diseno-urbano",
];

export function Footer() {
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);
  const year = new Date().getFullYear();

  // Color tokens
  const heading  = isLight ? "text-[#3a2611]"      : "text-sand";
  const body     = isLight ? "text-[#3a2611]/75"    : "text-sand-soft";
  const hover    = isLight ? "hover:text-[#3a2611]" : "hover:text-sand";
  const divider  = isLight ? "border-[#b08654]/20"  : "border-sand/10";
  const caption  = isLight ? "text-[#3a2611]/60"    : "text-sand-soft/80";
  const accent   = isLight ? "text-[#b08654]"       : "text-[#c9a978]";

  return (
    <footer
      id="contacto"
      className={`border-t ${divider}`}
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 sm:px-10 py-12 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <span className={`font-serif text-2xl font-light tracking-[0.42em] ${heading}`}>
            LIZUSH
          </span>
          <span className={`font-serif text-[0.7rem] tracking-[0.5em] ${body}`}>
            ARCHITECT STUDIO
          </span>
          <p className={`mt-4 max-w-xs font-serif italic text-sm leading-relaxed ${body}`}>
            &ldquo;Designing spaces that communicate, inspire and connect.&rdquo;
          </p>
        </div>

        <Column heading="SÍGUENOS" headingCls={`font-serif text-[0.78rem] tracking-[0.45em] ${accent}`} bodyCls={`flex flex-col gap-2 leading-tight text-sm ${body}`} hoverCls={hover}>
          <Link className={`transition-colors ${hover}`} href="https://instagram.com/lizush_architect">
            Instagram — @lizush_architect
          </Link>
          <Link className={`transition-colors ${hover}`} href="https://pinterest.com/lizush_architect">
            Pinterest — @lizush_architect
          </Link>
          <Link className={`transition-colors ${hover}`} href="https://behance.net/lizush_architect">
            Behance — @lizush_architect
          </Link>
          <Link className={`transition-colors ${hover}`} href="https://www.linkedin.com/company/lizush-architect-studio">
            LinkedIn — Lizush Architect Studio
          </Link>
        </Column>

        <Column heading="CONTACTO" headingCls={`font-serif text-[0.78rem] tracking-[0.45em] ${accent}`} bodyCls={`flex flex-col gap-2 leading-tight text-sm ${body}`} hoverCls={hover}>
          <span>Arq. Elizabeth Guzmán</span>
          <Link className={`transition-colors ${hover}`} href="mailto:elizabethguzman@lizusharchitect.com">
            elizabethguzman@lizusharchitect.com
          </Link>
          <span>Ciudad de México, MX</span>
        </Column>
      </div>

      <div className={`border-t ${divider}`}>
        <div className={`mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-2 px-6 sm:px-10 py-5 text-[0.7rem] tracking-[0.32em] ${caption} sm:flex-row`}>
          <span>© {year} LIZUSH ARCHITECT STUDIO</span>
          <span>ARCHITECTURE | INTERIOR DESIGN | VISUALIZATION</span>
        </div>
      </div>
    </footer>
  );
}

function Column({
  heading,
  headingCls,
  bodyCls,
  hoverCls,
  children,
}: {
  heading: string;
  headingCls: string;
  bodyCls: string;
  hoverCls: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className={headingCls}>{heading}</h2>
      <div className={bodyCls}>{children}</div>
    </div>
  );
}
