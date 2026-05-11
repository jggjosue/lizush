import { SiteFooter } from "../components/SiteFooter";

export default function Residencial() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden text-[#f6f0e7]">
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: "url('/img/25.jpeg')",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <section className="relative z-10 min-h-screen px-5 py-16 md:px-8 md:py-20">
          <header className="mb-16 text-center md:mb-20">
            <p className="mb-3 font-serif text-2xl tracking-[0.3em] md:text-3xl">
              LIZUSH
            </p>
            <h1 className="font-serif text-4xl tracking-[0.2em] md:text-6xl">
              RESIDENCIAL
            </h1>
          </header>

          <section className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
            <p className="font-serif text-2xl leading-relaxed md:text-4xl">
              Transformamos casas en hogares, creando espacios donde la vida
              اليومية cobra significado.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="space-y-4">
              <h2 className="font-serif text-xl tracking-[0.15em] md:text-2xl">
                DISEÑO DE VIVIENDAS
              </h2>
              <p className="text-sm leading-relaxed text-[#f6f0e7]/80 md:text-base">
                Proyectos arquitectónicos personalizados que reflejan tu estilo de
                vida y necesidades. Desde casas individuales hasta complejos
                residenciales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl tracking-[0.15em] md:text-2xl">
                INTERIORISMO RESIDENCIAL
              </h2>
              <p className="text-sm leading-relaxed text-[#f6f0e7]/80 md:text-base">
                Amueblamiento, decoración y distribución de espacios interiores
                que maximizan la funcionalidad y el confort de tu hogar.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl tracking-[0.15em] md:text-2xl">
                REMODELACIONES
              </h2>
              <p className="text-sm leading-relaxed text-[#f6f0e7]/80 md:text-base">
                Renovamos y reinventamos espacios existentes, optimizando
                distribución y creando ambientes modernos sin perder calidez.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl tracking-[0.15em] md:text-2xl">
                PAISAJISMO
              </h2>
              <p className="text-sm leading-relaxed text-[#f6f0e7]/80 md:text-base">
                Diseño de espacios exteriores, jardines y terrazas que
                complementan la arquitectura y crean ambientes de serenity.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center md:mt-20">
            <a
              href="/contacto"
              className="inline-block border border-[#f6f0e7] px-8 py-3 text-sm tracking-[0.2em] transition-colors hover:bg-[#f6f0e7] hover:text-[#1a1a1a] md:px-10 md:py-4 md:text-base"
            >
              VER PROYECTOS
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}