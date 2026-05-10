import { SiteFooter } from "../components/SiteFooter";

const reasons = [
  {
    title: "EXPERIENCIA Y TRAYECTORIA",
    description:
      "Años de experiencia en proyectos residenciales, comerciales e institucionales, garantizando un servicio profesional y confiable.",
  },
  {
    title: "DISEÑO PERSONALIZADO",
    description:
      "Cada proyecto es único. Escuchamos tus necesidades para crear espacios que reflejen tu estilo y personalidad.",
  },
  {
    title: "CALIDAD Y DETALLE",
    description:
      "Nos enfocamos en la excelencia constructiva y en los acabados, asegurando durabilidad y sofisticación.",
  },
  {
    title: "COMPROMISO Y TRANSPARENCIA",
    description:
      "Comunicación clara durante todo el proceso, con tiempos y presupuestos definidos desde el inicio.",
  },
  {
    title: "INNOVACIÓN Y CREATIVIDAD",
    description:
      "Combinamos tendencias contemporáneas con soluciones funcionales para espacios que inspiran.",
  },
];

export default function PorQueElegirnos() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden text-[#f6f0e7]">
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: "url('/img/20.png')",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <section className="relative z-10 min-h-screen px-5 py-16 md:px-8 md:py-20">
          <header className="mb-16 text-center md:mb-20">
            <p className="mb-3 font-serif text-2xl tracking-[0.3em] md:text-3xl">
              LIZUSH
            </p>
            <h1 className="font-serif text-4xl tracking-[0.2em] md:text-6xl">
              POR QUÉ ELEGIRNOS
            </h1>
          </header>

          <div className="mx-auto grid max-w-5xl gap-8 md:gap-10">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="border-l-2 border-[#f6f0e7]/30 pl-6 md:pl-8"
              >
                <h2 className="mb-3 font-serif text-xl tracking-[0.15em] md:text-2xl">
                  {reason.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#f6f0e7]/80 md:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center md:mt-20">
            <p className="mb-6 font-serif text-2xl italic md:text-3xl">
              "Diseñamos espacios que cuentan tu historia"
            </p>
            <a
              href="/contacto"
              className="inline-block border border-[#f6f0e7] px-8 py-3 text-sm tracking-[0.2em] transition-colors hover:bg-[#f6f0e7] hover:text-[#1a1a1a] md:px-10 md:py-4 md:text-base"
            >
              CONTÁCTANOS
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}