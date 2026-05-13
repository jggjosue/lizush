"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../_context/LanguageContext";
import { t } from "../_i18n/translations";

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
  "/proyectos/urbanos",
  "/proyectos/diseno-urbano",
  "/servicios-1",
];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);
  const { lang } = useLanguage();
  const T = t[lang].footer;

  const footerCls = isLight
    ? "border-t border-[#b08654]/20 bg-[#ece2cc] text-[#3a2611]"
    : "border-t border-sand/10 bg-[#0e0805] text-sand";
  const headingCls = isLight
    ? "font-serif text-[0.78rem] tracking-[0.45em] text-[#3a2611]"
    : "font-serif text-[0.78rem] tracking-[0.45em] text-sand";
  const bodyCls = isLight
    ? "flex flex-col gap-3 text-sm text-[#3a2611]/75"
    : "flex flex-col gap-3 text-sm text-sand-soft";
  const linkHover = isLight
    ? "hover:text-[#3a2611] transition-colors"
    : "hover:text-sand transition-colors";
  const italicCls = isLight
    ? "mt-4 max-w-xs font-serif italic text-sm leading-relaxed text-[#3a2611]/75"
    : "mt-4 max-w-xs font-serif italic text-sm leading-relaxed text-sand-soft";
  const brandCls = isLight
    ? "font-serif text-2xl font-light tracking-[0.42em] text-[#3a2611]"
    : "font-serif text-2xl font-light tracking-[0.42em] text-sand";
  const tagCls = isLight
    ? "font-serif text-[0.7rem] tracking-[0.5em] text-[#3a2611]/70"
    : "font-serif text-[0.7rem] tracking-[0.5em] text-sand-soft";
  const bottomBorder = isLight ? "border-t border-[#b08654]/20" : "border-t border-sand/10";
  const bottomText = isLight
    ? "mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-2 px-6 sm:px-10 py-5 text-[0.7rem] tracking-[0.32em] text-[#3a2611]/70 sm:flex-row"
    : "mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-2 px-6 sm:px-10 py-5 text-[0.7rem] tracking-[0.32em] text-sand-soft/80 sm:flex-row";

  return (
    <footer id="contacto" className={footerCls}>
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 sm:px-10 py-12 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <span className={brandCls}>LIZUSH</span>
          <span className={tagCls}>ARCHITECT STUDIO</span>
          <p className={italicCls}>{T.quote}</p>
        </div>

        <Column heading={T.follow} headingCls={headingCls} bodyCls={bodyCls}>
          <Link className={linkHover} href="https://instagram.com/lizush_architect" target="_blank" rel="noopener noreferrer">
            Instagram — @lizush_architect
          </Link>
          <Link className={linkHover} href="https://www.pinterest.com/lizusharch/" target="_blank" rel="noopener noreferrer">
            Pinterest — @lizush_architect
          </Link>
          <Link className={linkHover} href="https://www.linkedin.com/company/lizush-architect" target="_blank" rel="noopener noreferrer">
            LinkedIn — Lizush Architect Studio
          </Link>
        </Column>

        <Column heading={T.contact} headingCls={headingCls} bodyCls={bodyCls}>
          <span>Arq. Elizabeth Guzmán</span>
          <Link className={linkHover} href="mailto:elizabethguzman@lizusharchitect.com">
            elizabethguzman@lizusharchitect.com
          </Link>
          <span>{T.city}</span>
        </Column>
      </div>

      <div className={bottomBorder}>
        <div className={bottomText}>
          <span>© {year} LIZUSH ARCHITECT STUDIO</span>
          <span>{T.rights}</span>
        </div>
      </div>
    </footer>
  );
}

function Column({
  heading,
  children,
  headingCls,
  bodyCls,
}: {
  heading: string;
  children: ReactNode;
  headingCls: string;
  bodyCls: string;
}) {
  return (
    <div className={bodyCls}>
      <h2 className={headingCls}>{heading}</h2>
      <div className="flex flex-col gap-2 leading-tight">{children}</div>
    </div>
  );
}
