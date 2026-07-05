import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Paw, PawTrail } from "@/components/paw";
import { cases } from "@/lib/cases";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: "Casos — Gocres" },
      {
        name: "description",
        content:
          "Empresas que decidieron dar un paso adelante. Historias de marca, producto y crecimiento.",
      },
      { property: "og:title", content: "Casos — Gocres" },
      {
        property: "og:description",
        content: "Selección de proyectos de branding, UX/UI y diseño digital.",
      },
    ],
  }),
  component: Casos,
});

function Casos() {
  return (
    <div className="pt-24 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <Paw className="h-4 w-4 text-foreground/50" rotate={-12} />
            <p className="eyebrow text-muted-foreground">Casos</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-xl mt-8 max-w-5xl text-foreground">
            Cada proyecto deja{" "}
            <em className="not-italic text-muted-foreground">una huella.</em>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            No mostramos trabajos. Mostramos empresas que decidieron dar un paso
            adelante. Cada caso cuenta dónde estaban, qué necesitaban, qué construimos
            juntos y qué cambió después.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <PawTrail count={12} className="mt-14" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-32 md:px-10 md:pb-40">
        <div className="grid gap-8 md:grid-cols-12">
          {cases.map((c, i) => (
            <Reveal
              key={c.slug}
              delay={(i % 3) * 100}
              className={
                i % 3 === 0
                  ? "md:col-span-7"
                  : i % 3 === 1
                    ? "md:col-span-5"
                    : "md:col-span-12"
              }
            >
              <Link
                to="/casos/$slug"
                params={{ slug: c.slug }}
                className="group block"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-sm bg-secondary ${c.ratio} ${
                    i % 3 === 2 ? "md:aspect-[21/9]" : ""
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
                      c.dark
                        ? "from-[color:var(--ink)]/70"
                        : "from-[color:var(--ink)]/40"
                    } via-transparent to-transparent`}
                  />
                  <span className="absolute right-5 top-5 inline-flex h-10 items-center gap-2 rounded-full bg-[color:var(--cream)]/90 px-4 text-xs font-medium text-[color:var(--ink)] opacity-0 backdrop-blur transition group-hover:opacity-100">
                    Ver caso <span aria-hidden>→</span>
                  </span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-12">
                  <div className="flex items-center gap-3 md:col-span-3">
                    <Paw
                      className="h-3.5 w-3.5 text-foreground/40"
                      rotate={i % 2 ? 10 : -10}
                    />
                    <p className="eyebrow text-muted-foreground">{c.tag}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="display-md text-foreground transition group-hover:translate-x-1">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{c.excerpt}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                      {c.meta}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-t border-border px-6 py-32 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display-lg md:col-span-7">
            ¿Tu proyecto podría ser el siguiente?
          </h2>
          <div className="md:col-span-5 md:pt-4">
            <Link
              to="/contacto"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground"
            >
              Cuéntanos tu momento →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
