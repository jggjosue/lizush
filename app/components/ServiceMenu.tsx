export function ServiceMenu() {
  const services = [
    { label: "ARQUITECTURA", href: "#arquitectura" },
    { label: "INTERIORISMO", href: "#interiorismo" },
    { label: "VISUALIZACION", href: "#visualizacion" },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-6 text-[11px] tracking-[0.3em] md:text-sm md:gap-8">
      {services.map((service, index) => (
        <div key={service.label} className="flex items-center gap-6 md:gap-8">
          <a
            href={service.href}
            className="transition-opacity hover:opacity-70"
          >
            {service.label}
          </a>
          {index < services.length - 1 && <span className="text-[#f6f0e7]/40">•</span>}
        </div>
      ))}
    </nav>
  );
}
