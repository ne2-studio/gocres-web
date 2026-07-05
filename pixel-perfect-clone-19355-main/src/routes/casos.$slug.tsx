import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Paw, PawTrail } from "@/components/paw";
import { cases, getCase } from "@/lib/cases";

export const Route = createFileRoute("/casos/$slug")({
  loader: ({ params }) => {
    const c = getCase(params.slug);
    if (!c) throw notFound();
    return { c };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Caso no encontrado — Gocres" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { c } = loaderData;
    return {
      meta: [
        { title: `${c.title} — Gocres` },
        { name: "description", content: c.excerpt },
        { property: "og:title", content: `${c.title} — Gocres` },
        { property: "og:description", content: c.excerpt },
        { property: "og:image", content: `https://gocres.studio${c.image}` },
      ],
    };
  },
  component: CaseDetail,
  notFoundComponent: CaseNotFound,
  errorComponent: CaseError,
});

function CaseNotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-start justify-center gap-6 px-6 pt-32 md:px-10">
      <p className="eyebrow text-muted-foreground">404</p>
      <h1 className="display-lg">Este caso no existe (todavía).</h1>
      <Link to="/casos" className="underline underline-offset-4">
        Volver a todos los casos
      </Link>
    </div>
  );
}
function CaseError() {
  return <CaseNotFound />;
}

function CaseDetail() {
  const { c } = Route.useLoaderData() as { c: (typeof cases)[number] };
  const idx = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <article className="pt-24 md:pt-32">
      {/* Hero */}
      <header className="mx-auto max-w-[1440px] px-6 pt-10 md:px-10 md:pt-16">
        <Reveal>
          <Link
            to="/casos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <span aria-hidden>←</span> Todos los casos
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex items-center gap-3">
            <Paw className="h-4 w-4 text-foreground/50" rotate={-12} />
            <p className="eyebrow text-muted-foreground">{c.tag}</p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="display-xl mt-8 max-w-5xl">{c.title}</h1>
        </Reveal>
        <Reveal delay={340}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{c.excerpt}</p>
        </Reveal>
        <Reveal delay={460}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["Cliente", c.client],
              ["Sector", c.sector],
              ["Año", c.year],
              ["Duración", c.duration],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-muted-foreground">{k}</dt>
                <dd className="mt-2 font-display text-lg text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      {/* Cover */}
      <Reveal delay={200} className="mx-auto mt-16 max-w-[1440px] px-6 md:px-10">
        <div
          className={`relative w-full overflow-hidden rounded-sm bg-secondary ${c.ratio === "aspect-[4/5]" ? "aspect-[16/10]" : c.ratio}`}
        >
          <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${c.dark ? "from-[color:var(--ink)]/70" : "from-[color:var(--ink)]/30"} via-transparent to-transparent`}
          />
        </div>
      </Reveal>

      {/* Contexto + Reto */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <Paw className="h-4 w-4 text-foreground/40" />
              <p className="eyebrow text-muted-foreground">Contexto</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-6 md:col-span-8 md:mt-0">
          <Reveal delay={120}>
            <p className="font-display text-2xl leading-snug text-foreground">
              {c.context}
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-14 border-t border-border pt-14">
            <div className="mb-6 flex items-center gap-3">
              <Paw className="h-4 w-4 text-foreground/40" rotate={12} />
              <p className="eyebrow text-muted-foreground">El reto</p>
            </div>
            <p className="text-lg text-foreground/85">{c.challenge}</p>
          </Reveal>
        </div>
      </section>

      {/* Trail divider */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <PawTrail count={9} className="justify-center py-4" />
      </div>

      {/* Aproximación */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:grid md:grid-cols-12 md:gap-10 md:px-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Aproximación</p>
              <h2 className="display-lg mt-6">Cómo lo abordamos.</h2>
            </Reveal>
          </div>
          <ol className="mt-10 md:col-span-8 md:mt-0">
            {c.approach.map((step, i) => (
              <li key={i} className="border-b border-[color:var(--ink)]/15 py-6 first:border-t">
                <Reveal delay={i * 80} className="grid gap-6 md:grid-cols-12">
                  <div className="flex items-center gap-3 md:col-span-2">
                    <Paw className="h-4 w-4 text-foreground/50" rotate={i % 2 ? 12 : -12} />
                    <span className="font-display text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="font-display text-xl leading-snug text-foreground md:col-span-10">
                    {step}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Entregables + gallery */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Entregables</p>
            <ul className="mt-8 space-y-3">
              {c.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-foreground">
                  <Paw
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-foreground/50"
                    rotate={-8}
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <p className="eyebrow text-muted-foreground">Servicios</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.15em] text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:col-span-8 md:mt-0">
          {c.gallery.map((g, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className={
                i === 0
                  ? "relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-secondary"
                  : "relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-secondary"
              }
            >
              <img src={g} alt="" className="h-full w-full object-cover" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Resultado */}
      <section className="bg-[color:var(--ink)] py-24 text-[color:var(--cream)] md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <Paw className="h-4 w-4 text-[color:var(--sand)]" />
              <p className="eyebrow text-[color:var(--sand)]/70">Resultado</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-4xl font-display text-3xl leading-tight md:text-5xl">
              {c.outcome}
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px border border-[color:var(--cream)]/15 bg-[color:var(--cream)]/15 md:grid-cols-3">
            {c.metrics.map((m, i) => (
              <Reveal
                key={i}
                delay={i * 120}
                className="flex flex-col justify-between gap-6 bg-[color:var(--ink)] p-8 md:p-10 min-h-[200px]"
              >
                <Paw className="h-4 w-4 text-[color:var(--sand)]/70" rotate={-10} />
                <div>
                  <p className="font-display text-4xl text-[color:var(--cream)] md:text-6xl">
                    {m.k}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--cream)]/70">{m.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonio */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <PawTrail count={5} className="justify-center" />
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="mt-10 font-display text-2xl leading-snug text-foreground md:text-4xl">
            “{c.quote.q}”
          </blockquote>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 text-sm font-medium text-foreground">{c.quote.a}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {c.quote.r}
          </p>
        </Reveal>
      </section>

      {/* Siguiente + CTA */}
      <section className="mx-auto max-w-[1440px] border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-muted-foreground">Siguiente caso</p>
            <Link
              to="/casos/$slug"
              params={{ slug: next.slug }}
              className="group mt-6 block"
            >
              <h3 className="display-lg text-foreground transition group-hover:translate-x-1">
                {next.title} <span aria-hidden>→</span>
              </h3>
              <p className="mt-3 text-muted-foreground">{next.excerpt}</p>
            </Link>
          </div>
          <div className="md:col-span-6 md:pt-2">
            <p className="eyebrow text-muted-foreground">¿Tu turno?</p>
            <h3 className="display-md mt-6">Empecemos por una conversación.</h3>
            <Link
              to="/contacto"
              className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground"
            >
              Cuéntanos tu momento →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
