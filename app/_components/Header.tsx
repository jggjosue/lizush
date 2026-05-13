"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

function useNavLinks() {
  const { lang } = useLanguage();
  const n = t[lang].nav;
  return [
    { href: "/", label: n.home },
    { href: "/about", label: n.about },
    {
      href: "/servicios",
      label: n.services,
      children: [
        { href: "/servicios-1", label: n.servicesPage },
        { href: "/por-que-elegirnos", label: n.whatWeDo },
        { href: "/proceso-diseno", label: n.designProcess },
      ],
    },
    {
      href: "/proyectos/lomas-tecamachalco",
      label: n.projects,
      children: [
        { href: "/proyectos/materialidad", label: n.materialidad },
        { href: "/proyectos/lomas-tecamachalco", label: n.lomasTecamachalco },
        { href: "/proyectos/peras", label: n.peras },
        { href: "/proyectos/peras-comedor", label: n.perasComedor },
        { href: "/proyectos/iglesia-nayarit", label: n.iglesiaNav },
        { href: "/proyectos/iglesia-nayarit-interior", label: n.iglesiaNavInterior },
        { href: "/proyectos/wellness-salon", label: n.wellnessSalon },
        { href: "/proyectos/wellness-salon-espera", label: n.wellnessEspera },
        { href: "/proyectos/interior-design", label: n.interiorDesign },
        { href: "/proyectos/luna-suite", label: n.lunaSuite },
        { href: "/proyectos/corporativos", label: n.corporativos },
        { href: "/proyectos/lomas-virreyes", label: n.lomasVirreyes },
        { href: "/proyectos/community-plaza", label: n.communityPlaza },
        { href: "/proyectos/experiencia-gastronomica", label: n.expGastronomica },
        { href: "/proyectos/urbanos", label: n.urbanos },
        { href: "/proyectos/sala-polivalente", label: n.salaPolivalente },
        { href: "/proyectos/diseno-urbano", label: n.disenoUrbano },
        { href: "/proyectos/estadio-tenis-mtq", label: n.estadioTenis },
      ],
    },
    { href: "/contacto", label: n.contact },
  ] satisfies NavItem[];
}

/* ── Desktop dropdown ── */
function DropdownItem({ item, isLight }: { item: NavItem; isLight: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); }}
      onMouseLeave={() => { timeoutRef.current = setTimeout(() => setOpen(false), 120); }}
    >
      <button type="button" className={`flex items-center gap-1 ${linkCls}`}>
        {item.label}
        <svg viewBox="0 0 10 6" className={`h-2 w-2 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2">
          <div className="mx-auto mb-px h-0 w-0 border-x-[5px] border-b-[5px] border-x-transparent" style={{ borderBottomColor: arrowColor }} />
          <ul className={panelCls}>
            {item.children.map((child) => (
              <li key={child.href}><Link href={child.href} className={itemCls}>{child.label}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Mobile accordion item ── */
function MobileNavItem({ item, onClose, isLight }: { item: NavItem; onClose: () => void; isLight: boolean }) {
  const [open, setOpen] = useState(false);

  const baseCls = isLight
    ? "font-serif text-sm tracking-[0.22em] uppercase text-[#3a2611]/85"
    : "font-serif text-sm tracking-[0.22em] uppercase text-sand-soft";
  const subCls = isLight
    ? "font-serif text-xs tracking-[0.18em] uppercase text-[#3a2611]/70 pl-4 py-2 block hover:text-[#b08654] transition-colors"
    : "font-serif text-xs tracking-[0.18em] uppercase text-sand-soft/70 pl-4 py-2 block hover:text-[#c9a978] transition-colors";
  const dividerCls = isLight ? "border-[#b08654]/15" : "border-sand/10";

  if (!item.children) {
    return (
      <div className={`border-b ${dividerCls}`}>
        <Link href={item.href} onClick={onClose} className={`${baseCls} flex items-center py-4 px-1 hover:opacity-100 opacity-85`}>
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className={`border-b ${dividerCls}`}>
      <button
        onClick={() => setOpen(v => !v)}
        className={`${baseCls} w-full flex items-center justify-between py-4 px-1`}
      >
        {item.label}
        <svg viewBox="0 0 10 6" className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="pb-2">
          {item.children.map((child) => (
            <Link key={child.href} href={child.href} onClick={onClose} className={subCls}>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Language toggle ── */
function LangToggle({ isLight }: { isLight: boolean }) {
  const { lang, toggleLang } = useLanguage();
  const activeCls = isLight ? "text-[#b08654] font-semibold" : "text-[#c9a978] font-semibold";
  const inactiveCls = isLight ? "text-[#3a2611]/50 hover:text-[#3a2611] transition-colors" : "text-sand-soft/50 hover:text-sand transition-colors";
  const dividerCls = isLight ? "text-[#b08654]/35" : "text-sand/25";

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 font-serif text-[0.72rem] tracking-[0.22em] cursor-pointer select-none"
      aria-label="Toggle language / Cambiar idioma"
    >
      <span className={lang === "es" ? activeCls : inactiveCls}>ES</span>
      <span className={dividerCls}>|</span>
      <span className={lang === "en" ? activeCls : inactiveCls}>EN</span>
    </button>
  );
}

/* ── Hamburger icon ── */
function Hamburger({ open, isLight, onClick }: { open: boolean; isLight: boolean; onClick: () => void }) {
  const cls = isLight ? "text-[#3a2611]" : "text-sand";
  return (
    <button onClick={onClick} aria-label={open ? "Cerrar menú" : "Abrir menú"} className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] ${cls}`}>
      <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
      <span className={`block h-px w-5 bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
      <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
    </button>
  );
}

/* ── Main Header ── */
export function Header() {
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);
  const links = useNavLinks();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = isLight
    ? "bg-[#ece2cc]/90 border-[#b08654]/20 backdrop-blur"
    : "bg-[#0e0805]/85 border-sand/10 backdrop-blur supports-[backdrop-filter]:bg-[#0e0805]/70";

  const drawerBg = isLight
    ? "bg-[#ece2cc] border-r border-[#b08654]/15"
    : "bg-[#0e0805] border-r border-sand/10";

  return (
    <>
      <header className={`sticky top-0 z-50 border-b ${headerBg}`}>
        <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-10">

          {/* Logo */}
          <Link href="/" aria-label="Lizush Architect Studio — Inicio" className="flex items-baseline gap-3 shrink-0">
            <span className={`font-serif text-xl font-light tracking-[0.42em] ${isLight ? "text-[#3a2611]" : "text-sand"}`}>
              LIZUSH
            </span>
            <span className={`hidden text-[0.6rem] tracking-[0.4em] xl:inline ${isLight ? "text-[#3a2611]/70" : "text-sand-soft"}`}>
              ARCHITECT STUDIO
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            <ul className="flex items-center gap-4 lg:gap-7">
              {links.map((item) => (
                <li key={item.href} className="relative">
                  <DropdownItem item={item} isLight={isLight} />
                </li>
              ))}
            </ul>
            <div className={`border-l pl-4 lg:pl-5 ${isLight ? "border-[#b08654]/30" : "border-sand/20"}`}>
              <LangToggle isLight={isLight} />
            </div>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <LangToggle isLight={isLight} />
            <Hamburger open={mobileOpen} isLight={isLight} onClick={() => setMobileOpen(v => !v)} />
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100dvh-4rem)] w-72 max-w-[85vw] overflow-y-auto transition-transform duration-300 md:hidden ${drawerBg} ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-6 pt-4 pb-8">
          {links.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              onClose={() => setMobileOpen(false)}
              isLight={isLight}
            />
          ))}

          {/* Footer del drawer */}
          <div className={`mt-6 pt-4 border-t ${isLight ? "border-[#b08654]/20" : "border-sand/10"}`}>
            <span className={`font-serif text-[0.62rem] tracking-[0.35em] ${isLight ? "text-[#3a2611]/40" : "text-sand-soft/40"}`}>
              LIZUSH ARCHITECT STUDIO
            </span>
          </div>
        </nav>
      </aside>
    </>
  );
}
