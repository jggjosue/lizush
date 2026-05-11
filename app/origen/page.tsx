import type { ReactNode } from "react";
import { Badge } from "../_components/Badge";

export default function Origen() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative grid w-full max-w-[1024px] aspect-[1024/1500] grid-cols-1 overflow-hidden rounded-sm bg-[#f1e2c8] shadow-2xl ring-1 ring-[#c9a978]/40 sm:grid-cols-[42%_58%]"
      >
        <Left />
        <Right />
      </article>
    </div>
  );
}

function Left() {
  return (
    <section className="relative flex flex-col bg-[#f1e2c8] px-8 sm:px-12 py-10 sm:py-14 text-[#3a2611]">
      <Badge size={88} />

      <h1
        className="mt-10 font-serif font-light leading-none tracking-[-0.01em] text-[#2c1d0e]"
        style={{ fontSize: "clamp(3rem,7.2vw,5.5rem)" }}
      >
        LiZUSH
      </h1>

      <Divider />

      <Paragraph>
        <span className="italic">Lizush,</span>
        <br />
        a name derived from Elizabeth,
        <br />
        reinterpreted into a softer,
        <br />
        more intimate expression.
      </Paragraph>

      <Divider />

      <Paragraph>
        A refined transformation
        <br />
        of identity—
        <br />
        where personal meaning
        <br />
        becomes spatial language.
      </Paragraph>

      <Divider />

      <Paragraph>
        A gesture between cultures,
        <br />
        translated into design.
      </Paragraph>

      <Divider />

      <Paragraph>
        Lizush embodies a sensibility
        <br />
        where emotion, intention,
        <br />
        and space converge
        <br />
        with clarity and elegance.
      </Paragraph>

      <div className="flex-1" />

      <Footer />
    </section>
  );
}

function Right() {
  return (
    <div
      className="relative min-h-[260px]"
      style={{
        backgroundImage: "url(/img/12.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-hidden
    />
  );
}

function Divider() {
  return (
    <span
      aria-hidden
      className="my-5 block h-px w-10 bg-[#b08654]/70"
    />
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-serif text-[#3a2611] leading-relaxed"
      style={{ fontSize: "clamp(0.95rem,1.35vw,1.15rem)" }}
    >
      {children}
    </p>
  );
}

function Footer() {
  return (
    <div className="mt-10 flex flex-col gap-3">
      <LMonogram />
      <p className="font-serif tracking-[0.32em] text-[#3a2611]/85 text-[clamp(0.7rem,1vw,0.85rem)]">
        ARCHITECTURE | INTERIOR DESIGN | VISUALIZATION
      </p>
      <p className="font-serif tracking-[0.32em] text-[#3a2611]/85 text-[clamp(0.7rem,1vw,0.85rem)]">
        LIZUSH — MX
      </p>
    </div>
  );
}

function LMonogram() {
  return (
    <svg
      viewBox="0 0 40 48"
      className="h-10 w-auto text-[#b08654]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-label="Lizush mark"
    >
      <path d="M8 6v34" />
      <path d="M8 40h22" />
      <path d="M30 36v8" />
    </svg>
  );
}
