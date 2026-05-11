export function SiteFooter() {
  const socialLinks = [
    { label: "@lizush_architect", href: "https://instagram.com" },
    { label: "@lizush_architect", href: "https://pinterest.com" },
    { label: "@lizush_architect", href: "https://behance.net" },
    { label: "Lizush Architect Studio", href: "https://linkedin.com" },
  ];

  const contactDetails = [
    "Arq. Elizabeth Guzman",
    "elizabethguzman@lizusharchitect.com",
    "Ciudad de Mexico, MX",
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 scale-110 bg-cover blur-[1.5px] brightness-50"
        style={{
          backgroundImage: "url('/footer-background-new.png')",
          backgroundPosition: "center 75%",
          backgroundSize: "125% auto",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <section className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-7 text-sm md:grid-cols-2 md:px-8 md:text-base">
        <div className="space-y-3 rounded-md bg-black/20 p-3 backdrop-blur-[1px]">
          <h2 className="text-xs tracking-[0.35em] md:text-sm">SIGUENOS</h2>
          <ul className="space-y-2 text-white/95">
            {socialLinks.map((social) => (
              <li key={`${social.label}-${social.href}`}>
                <a
                  className="transition hover:text-[#f6f0e7]"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-md bg-black/20 p-3 backdrop-blur-[1px]">
          <h2 className="text-xs tracking-[0.35em] md:text-sm">CONTACTO</h2>
          <ul className="space-y-2 text-white/95">
            {contactDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
