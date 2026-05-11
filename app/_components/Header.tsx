"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

// Pages that use a light (beige) background — header/footer switch to dark brown text
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

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const links: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "About" },
  {
    href: "/servicios",
    label: "Servicios",
    children: [
      { href: "/por-que-elegirnos", label: "Por qué" },
      { href: "/proceso-diseno", label: "Proceso de Diseño" },
    ],
  },
  {
    href: "/proyectos/lomas-tecamachalco",
    label: "Proyectos",
    children: [
      { href: "/proyectos/lomas-tecamachalco", label: "Lomas Tecamachalco" },
      { href: "/proyectos/peras", label: "Peras" },
      { href: "/proyectos/peras-comedor", label: "Peras — Comedor" },
      { href: "/proyectos/materialidad", label: "Materialidad" },
      { href: "/proyectos/iglesia-nayarit", label: "Iglesia Nayarit" },
      { href: "/proyectos/iglesia-nayarit-interior", label: "Iglesia — Interior" },
      { href: "/proyectos/wellness-salon", label: "Wellness Salon" },
      { href: "/proyectos/wellness-salon-espera", label: "Wellness — Espera" },
      { href: "/proyectos/interior-design", label: "Interior Design" },
      { href: "/proyectos/luna-suite", label: "Luna Suite" },
      { href: "/proyectos/corporativos", label: "Corporativos" },
      { href: "/proyectos/lomas-virreyes", label: "Lomas de Virreyes" },
      { href: "/proyectos/community-plaza", label: "Community Plaza" },
      { href: "/proyectos/experiencia-gastronomica", label: "Exp. Gastronómica" },
      { href: "/proyectos/urbanos", label: "Proyectos Urbanos" },
      { href: "/proyectos/sala-polivalente", label: "Sala Polivalente" },
      { href: "/proyectos/diseno-urbano", label: "Diseño Urbano" },
      { href: "/proyectos/estadio-tenis-mtq", label: "Estadio Tenis MTQ" },
    ],
  },
  { href: "/contacto", label: "Contacto" },
];

function DropdownItem({ item, isLight }: { item: NavItem; isLight: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }

  const linkCls = isLight
    ? "font-serif text-[0.72rem] tracking-[0.28em] text-[#3a2611]/80 uppercase whitespace-nowrap transition-colors hover:text-[#3a2611]"
    : "font-serif text-[0.72rem] tracking-[0.28em] text-sand-soft uppercase whitespace-nowrap transition-colors hover:text-sand";

  if (!item.children) {
    return <Link href={item.href} className={linkCls}>{item.label}</Link>;
  }

  const arrowColor = isLight ? "#e8ddd0" : "#1c1208";
  const panelCls = isLight
    ? "min-w-[170px] rounded-sm border border-[#b08654]/25 bg-[#e8ddd0]/97 py-2 shadow-lg backdrop-blur"
    : "min-w-[170px] rounded-sm border border-[#c9a978]/20 bg-[#1c1208]/95 py-2 shadow-xl backdrop-blur";
  const itemCls = isLight
    ? "block px-5 py-2 font-serif text-[0.66rem] tracking-[0.26em] text-[#3a2611]/80 uppercase whitespace-nowrap transition-colors hover:bg-[#b08654]/12 hover:text-[#3a2611]"
    : "block px-5 py-2 font-serif text-[0.66rem] tracking-[0.26em] text-sand-soft uppercase whitespace-nowrap transition-colors hover:bg-[#c9a978]/10 hover:text-sand";

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`flex items-center gap-1 ${linkCls}`}>
        {item.label}
        <svg
          viewBox="0 0 10 6"
          className={`h-2 w-2 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2">
          <div
            className="mx-auto mb-px h-0 w-0 border-x-[5px] border-b-[5px] border-x-transparent"
            style={{ borderBottomColor: arrowColor }}
          />
          <ul className={panelCls}>
            {item.children.map((child) => (
              <li key={child.href}>
                <Link href={child.href} className={itemCls}>
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);

  const headerBg = isLight
    ? "bg-[#e8ddd0]/88 border-[#b08654]/22 backdrop-blur-md"
    : "bg-[#0e0805]/85 border-sand/10 backdrop-blur supports-[backdrop-filter]:bg-[#0e0805]/70";

  return (
    <header className={`sticky top-0 z-50 border-b ${headerBg}`}>
      <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          aria-label="Lizush Architect Studio — Inicio"
          className="flex items-baseline gap-3"
        >
          <span className={`font-serif text-xl font-light tracking-[0.42em] ${isLight ? "text-[#3a2611]" : "text-sand"}`}>
            LIZUSH
          </span>
          <span className={`hidden text-[0.6rem] tracking-[0.4em] xl:inline ${isLight ? "text-[#3a2611]/70" : "text-sand-soft"}`}>
            ARCHITECT STUDIO
          </span>
        </Link>

        <ul className="flex items-center gap-4 sm:gap-7">
          {links.map((item) => (
            <li key={item.href} className="relative">
              <DropdownItem item={item} isLight={isLight} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
