import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Paw, PawTrail } from "@/components/paw";
import footprints from "@/assets/footprints-path.jpg";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método — Gocres" },
      {
        name: "description",
        content:
          "Descubrir, Comprender, Definir, Construir, Evolucionar. Un método simple y calmado que reduce incertidumbre en cada paso.",
      },
      { property: "og:title", content: "Método — Gocres" },
      {
        property: "og:description",
        content: "Cinco fases para convertir tu marca en un sistema preparado para crecer.",
      },
    ],
  }),
  component: Metodo,
});

const phases = [
  {
    n: "01",
    t: "Descubrir",
    d: "Entendemos el punto en el que está tu negocio.",
    long: "Auditoría del contexto actual, conversaciones con equipo y clientes, análisis de mercado y competencia. Antes de proponer nada, escuchamos.",
    outputs: ["Auditoría", "Entrevistas", "Benchmarks"],
  },
  {
    n: "02",
    t: "Comprender",
    d: "Analizamos el contexto antes de tomar decisiones.",
    long: "Sintetizamos hallazgos en una lectura clara del negocio. Insights, oportunidades y riesgos sobre los que construir la estrategia.",
    outputs: ["Insights", "Prioridades", "Riesgos"],
  },
  {
    n: "03",
    t: "Definir",
    d: "Trazamos una dirección clara.",
    long: "Estrategia de marca, territorio verbal y visual, arquitectura de la experiencia. Consenso antes de mover un solo píxel.",
    outputs: ["Estrategia", "Territorio", "Arquitectura"],
  },
  {
    n: "04",
    t: "Construir",
    d: "Convertimos la estrategia en una solución sólida.",
    long: "Sistema visual, UI, copy, desarrollo. Iteración honesta, sin sorpresas. Entregamos algo listo para vivir en el mundo real.",
    outputs: ["Sistema visual", "UI · Web", "Guidelines"],
  },
  {
    n: "05",
    t: "Evolucionar",
    d: "Porque una buena marca nunca deja de crecer.",
    long: "Medición, iteración y acompañamiento. Nuestro trabajo no termina en la entrega: seguimos ayudándote a evolucionar el sistema.",
    outputs: ["Medición", "Iteración", "Acompañamiento"],
  },
];

function Metodo() {
  return (
    <div className="pt-24 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:pb-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Método</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-xl mt-8 text-foreground">
              El camino no se improvisa.{" "}
              <span className="text-muted-foreground">Se recorre.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Un método simple, calmado y probado. Cada fase reduce incertidumbre y
              acerca tu marca al lugar donde quiere estar.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} className="mt-14 md:col-span-5 md:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src={footprints}
              alt="Huellas de un camino"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border">
        {phases.map((p, i) => (
          <div key={p.t} className="border-b border-border">
            <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
              <div className="md:col-span-3">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <Paw
                      className="h-5 w-5 text-foreground/50"
                      rotate={i % 2 ? 14 : -14}
                    />
                    <p className="font-display text-sm text-muted-foreground">
                      {p.n} / 05
                    </p>
                  </div>
                  <h2 className="display-lg mt-4 text-foreground">{p.t}</h2>
                </Reveal>
              </div>
              <div className="md:col-span-6">
                <Reveal delay={120}>
                  <p className="font-display text-2xl leading-snug text-foreground">
                    {p.d}
                  </p>
                  <p className="mt-6 text-muted-foreground">{p.long}</p>
                </Reveal>
              </div>
              <div className="md:col-span-3">
                <Reveal delay={200}>
                  <p className="eyebrow mb-4 text-muted-foreground">Entregables</p>
                  <ul className="space-y-3 text-sm text-foreground">
                    {p.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <Paw
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/50"
                          rotate={-8}
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                {i < phases.length - 1 && (
                  <PawTrail count={5} className="mt-10 md:hidden" />
                )}
                {i === phases.length - 1 && (
                  <Reveal delay={300} className="mt-8">
                    <Link
                      to="/contacto"
                      className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
                    >
                      Empecemos →
                    </Link>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
