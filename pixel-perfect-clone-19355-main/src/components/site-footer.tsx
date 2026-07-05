import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-[color:var(--sand)]/70">Gocres · Estudio</p>
            <h2 className="display-lg mt-8 max-w-xl text-[color:var(--cream)]">
              La confianza se diseña. Y se camina paso a paso.
            </h2>
            <Link
              to="/contacto"
              className="mt-10 inline-flex h-12 items-center gap-3 rounded-full bg-[color:var(--cream)] px-7 text-sm font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--sand)]"
            >
              Empecemos <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">
            <FooterCol title="Estudio">
              <FooterLink to="/about">Sobre nosotros</FooterLink>
              <FooterLink to="/metodo">Método</FooterLink>
              <FooterLink to="/casos">Casos</FooterLink>
            </FooterCol>
            <FooterCol title="Servicios">
              <FooterLink to="/servicios">Branding</FooterLink>
              <FooterLink to="/servicios">UX/UI</FooterLink>
              <FooterLink to="/servicios">Diseño Web</FooterLink>
              <FooterLink to="/servicios">Gráfico</FooterLink>
            </FooterCol>
            <FooterCol title="Contacto">
              <a
                href="mailto:hola@gocres.studio"
                className="text-sm text-[color:var(--cream)]/80 transition hover:text-[color:var(--sand)]"
              >
                hola@gocres.studio
              </a>
              <a
                href="https://linkedin.com"
                className="text-sm text-[color:var(--cream)]/80 transition hover:text-[color:var(--sand)]"
              >
                LinkedIn
              </a>
              <a
                href="https://behance.net"
                className="text-sm text-[color:var(--cream)]/80 transition hover:text-[color:var(--sand)]"
              >
                Behance
              </a>
              <a
                href="https://instagram.com"
                className="text-sm text-[color:var(--cream)]/80 transition hover:text-[color:var(--sand)]"
              >
                Instagram
              </a>
            </FooterCol>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-24 border-t border-[color:var(--cream)]/15 pt-10">
          <div
            aria-hidden
            className="select-none overflow-hidden font-display font-semibold leading-none tracking-tight text-[color:var(--cream)]/95"
            style={{ fontSize: "clamp(4rem, 18vw, 18rem)", letterSpacing: "-0.04em" }}
          >
            Gocres
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 text-xs text-[color:var(--cream)]/60 md:flex-row">
          <p>© {new Date().getFullYear()} Gocres Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/aviso-legal" className="transition hover:text-[color:var(--sand)]">Aviso legal</a>
            <a href="/privacidad" className="transition hover:text-[color:var(--sand)]">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-[color:var(--sand)]/70">{title}</p>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-[color:var(--cream)]/80 transition hover:text-[color:var(--sand)]"
    >
      {children}
    </Link>
  );
}
