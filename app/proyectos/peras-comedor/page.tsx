import { Leaf } from "../../_components/Leaf";

export default function PerasComedor() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative w-full max-w-[1024px] aspect-[1024/1500] overflow-hidden rounded-sm shadow-2xl"
        style={{
          backgroundImage: "url(/img/33.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Gradient overlay — lighter top, dark bottom */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,5,3,0.18) 0%, rgba(8,5,3,0.0) 38%, rgba(8,5,3,0.0) 52%, rgba(8,5,3,0.88) 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 sm:px-14 pb-12 sm:pb-16 text-sand text-center">
          {/* RESIDENCIAL label with flanking lines */}
          <div className="flex w-full max-w-[420px] items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#c9a978]/60" />
            <span
              className="font-serif tracking-[0.55em] text-sand-soft"
              style={{ fontSize: "clamp(0.75rem,1.1vw,0.95rem)" }}
            >
              RESIDENCIAL
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/60" />
          </div>

          {/* Project title */}
          <h1
            className="mt-4 font-serif font-light leading-none tracking-[0.04em] text-sand"
            style={{ fontSize: "clamp(3.5rem,9vw,7rem)" }}
          >
            PERAS
          </h1>

          {/* Location */}
          <p
            className="mt-4 font-serif tracking-[0.55em] text-sand-soft"
            style={{ fontSize: "clamp(0.75rem,1.05vw,0.95rem)" }}
          >
            HIDALGO, PACHUCA
          </p>

          {/* Leaf + branding */}
          <Leaf className="mt-8 h-6 w-6 text-[#c9a978]" />

          <span
            className="mt-3 font-serif font-light tracking-[0.42em] text-sand"
            style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)" }}
          >
            LIZUSH
          </span>
          <span
            className="font-serif tracking-[0.42em] text-sand-soft"
            style={{ fontSize: "clamp(0.7rem,1vw,0.9rem)" }}
          >
            ARCHITECT STUDIO
          </span>
        </div>
      </article>
    </div>
  );
}
