import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/servicios", label: "Servicios" },
  { to: "/metodo", label: "Método" },
  { to: "/casos", label: "Casos" },
  { to: "/about", label: "Estudio" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Gocres
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:inline">
            Estudio
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contacto"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Hablemos
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-6 bg-foreground" />
            <span className="block h-px w-6 bg-foreground" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="display-md text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Hablemos →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
