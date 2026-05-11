import Image from "next/image";

export function OrigenSection() {
  const originPhrases = [
    "Lizush, a name derived from Elizabeth, reinterpreted into a sober, intimate expression.",
    "A refined transformation of identity where personal meaning becomes spatial language.",
    "A gesture between cultures, translated into design.",
    "Lizush embodies a sensibility where emotion, intention, and space converge with clarity and elegance.",
  ];

  return (
    <section className="bg-[#f2ece2] pb-14 text-[#5f4631] md:pb-20">
      <div className="w-full border-y border-[#cbb296] bg-[#f8f3ea] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.12)] md:p-6">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.35fr]">
          <article className="flex flex-col border border-[#cfb89d] bg-[#f6efe4] p-6">
            <p className="text-xs tracking-[0.35em]">ORIGEN</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[0.16em] md:text-5xl">LIZUSH</h2>
            <div className="mt-6 space-y-5 font-serif text-xl leading-relaxed md:text-2xl">
              {originPhrases.map((phrase) => (
                <p key={phrase}>{phrase}</p>
              ))}
            </div>
            <p className="mt-8 text-xs tracking-[0.35em] md:text-sm">
              ARCHITECTURE | INTERIOR DESIGN | VISUALIZATION
            </p>
          </article>

          <div className="overflow-hidden border border-[#cfb89d]">
            <Image
              src="/origen-lizush.png"
              alt="Arquitectura exterior de proyecto Lizush"
              width={1152}
              height={1632}
              className="h-full min-h-[420px] w-full object-cover object-right-top"
            />
          </div>
        </div>

        <div className="mt-8 border border-[#cfb89d] bg-[#f6efe4] px-4 py-8 text-center md:px-10">
          <p className="font-serif text-2xl leading-snug md:text-4xl">
            &quot;We design spaces that communicate, inspire and connect.&quot;
          </p>
          <p className="mt-5 text-xs tracking-[0.35em] md:text-sm">MEXICO CITY, MX</p>
        </div>
      </div>
    </section>
  );
}
