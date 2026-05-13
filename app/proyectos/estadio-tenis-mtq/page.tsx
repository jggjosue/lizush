import { Leaf } from "../../_components/Leaf";

export default function EstadioTenisMTQ() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#0e0805] p-4 sm:p-8">
      <article
        className="relative w-full max-w-[1024px] aspect-[1024/1500] overflow-hidden rounded-sm shadow-2xl"
        style={{
          backgroundImage: "url(/img/50.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Gradient: dark top fading to clear, subtle bottom */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,5,3,0.68) 0%, rgba(8,5,3,0.22) 28%, rgba(8,5,3,0.0) 55%, rgba(8,5,3,0.30) 100%)",
          }}
        />

        {/* Content — top center */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 sm:px-14 pt-10 sm:pt-14">
          {/* Leaf */}
          <Leaf className="h-6 w-6 text-[#c9a978]" />

          {/* PROYECTO flanked */}
          <div className="mt-4 flex w-full max-w-[340px] items-center gap-4">
            <span className="h-px flex-1 bg-[#c9a978]/65" />
            <span
              className="font-serif tracking-[0.52em] text-[#c9a978]"
              style={{ fontSize: "clamp(0.6rem,0.88vw,0.76rem)" }}
            >
              PROYECTO
            </span>
            <span className="h-px flex-1 bg-[#c9a978]/65" />
          </div>

          {/* Title */}
          <h1
            className="mt-3 font-serif font-light leading-[1.0] tracking-[0.04em] text-sand"
            style={{ fontSize: "clamp(2.8rem,8.2vw,6.6rem)" }}
          >
            ESTADIO
            <br />
            DE TENIS MQ
          </h1>

          {/* Gold rule */}
          <span aria-hidden className="mt-5 block h-px w-16 bg-[#c9a978]/75" />

          {/* Location */}
          <p
            className="mt-4 font-serif tracking-[0.52em] text-sand-soft"
            style={{ fontSize: "clamp(0.68rem,1vw,0.88rem)" }}
          >
            GUADALAJARA
          </p>
        </div>
      </article>
    </div>
  );
}
