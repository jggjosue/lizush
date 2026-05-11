import type { ReactNode } from "react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contacto"
      className="border-t border-sand/10 bg-[#0e0805] text-sand"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 sm:px-10 py-12 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-2xl font-light tracking-[0.42em] text-sand">
            LIZUSH
          </span>
          <span className="font-serif text-[0.7rem] tracking-[0.5em] text-sand-soft">
            ARCHITECT STUDIO
          </span>
          <p className="mt-4 max-w-xs font-serif italic text-sm leading-relaxed text-sand-soft">
            &ldquo;Designing spaces that communicate, inspire and connect.&rdquo;
          </p>
        </div>

        <Column heading="SÍGUENOS">
          <Link
            className="hover:text-sand transition-colors"
            href="https://instagram.com/lizush_architect"
          >
            Instagram — @lizush_architect
          </Link>
          <Link
            className="hover:text-sand transition-colors"
            href="https://pinterest.com/lizush_architect"
          >
            Pinterest — @lizush_architect
          </Link>
          <Link
            className="hover:text-sand transition-colors"
            href="https://behance.net/lizush_architect"
          >
            Behance — @lizush_architect
          </Link>
          <Link
            className="hover:text-sand transition-colors"
            href="https://www.linkedin.com/company/lizush-architect-studio"
          >
            LinkedIn — Lizush Architect Studio
          </Link>
        </Column>

        <Column heading="CONTACTO">
          <span>Arq. Elizabeth Guzmán</span>
          <Link
            className="hover:text-sand transition-colors"
            href="mailto:elizabethguzman@lizusharchitect.com"
          >
            elizabethguzman@lizusharchitect.com
          </Link>
          <span>Ciudad de México, MX</span>
        </Column>
      </div>

      <div className="border-t border-sand/10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-2 px-6 sm:px-10 py-5 text-[0.7rem] tracking-[0.32em] text-sand-soft/80 sm:flex-row">
          <span>© {year} LIZUSH ARCHITECT STUDIO</span>
          <span>ARCHITECTURE | INTERIOR DESIGN | VISUALIZATION</span>
        </div>
      </div>
    </footer>
  );
}

function Column({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 text-sm text-sand-soft">
      <h2 className="font-serif text-[0.78rem] tracking-[0.45em] text-sand">
        {heading}
      </h2>
      <div className="flex flex-col gap-2 leading-tight">{children}</div>
    </div>
  );
}
