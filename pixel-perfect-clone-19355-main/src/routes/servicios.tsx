import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Gocres" },
      {
        name: "description",
        content:
          "Branding, UX/UI, Diseño Web y Diseño Gráfico. Cuatro disciplinas al servicio de una sola idea: transmitir el verdadero valor de tu negocio.",
      },
      { property: "og:title", content: "Servicios — Gocres" },
      {
        property: "og:description",
        content: "Branding, UX/UI, Diseño Web y Diseño Gráfico para empresas en crecimiento.",
      },
    ],
  }),
  component: Servicios,
});

const services = [
  {
    n: "01",
    t: "Branding",
    lead: "Cuando tu marca ya no representa el valor real de tu negocio.",
    d: "Construimos identidades visuales preparadas para acompañar el crecimiento de tu empresa. Estrategia, naming, sistema visual, guidelines y aplicaciones.",
    deliverables: ["Territorio de marca", "Sistema visual", "Guidelines", "Aplicaciones clave"],
  },
  {
    n: "02",
    t: "UX/UI",
    lead: "Cuando utilizar un producto debería resultar tan sencillo como parece.",
    d: "Diseñamos experiencias digitales intuitivas, útiles y centradas en las personas. Research, arquitectura, wireframes, UI system y prototipado.",
    deliverables: ["Research y auditoría", "Arquitectura", "UI System", "Prototipos"],
  },
  {
    n: "03",
    t: "Diseño Web",
    lead: "Cuando tu web necesita convertirse en una herramienta para generar confianza y oportunidades.",
    d: "Creamos experiencias digitales que combinan estrategia, claridad y conversión. Diseño, copy, desarrollo y medición.",
    deliverables: ["Estrategia y copy", "Diseño editorial", "Desarrollo", "Analítica"],
  },
  {
    n: "04",
    t: "Diseño Gráfico",
    lead: "Cuando necesitas mantener una comunicación coherente en cada punto de contacto.",
    d: "Piezas que refuerzan la identidad de tu marca más allá de la pantalla. Editorial, packaging, comunicación y campañas.",
    deliverables: ["Editorial", "Packaging", "Comunicación", "Campañas"],
  },
];

function Servicios() {
  return (
    <div className="pt-24 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-40">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Servicios</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-xl mt-8 max-w-5xl text-foreground">
            Cuatro disciplinas.{" "}
            <span className="text-muted-foreground">Una sola manera de trabajar.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Cada servicio funciona por separado. Pero es cuando se combinan cuando el
            diseño se convierte en un sistema capaz de transmitir el valor real de tu
            negocio.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border">
        {services.map((s, i) => (
          <div
            key={s.t}
            className={`border-b border-border ${
              i % 2 === 1 ? "bg-secondary" : "bg-background"
            }`}
          >
            <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-32">
              <div className="md:col-span-4">
                <Reveal>
                  <p className="font-display text-sm text-muted-foreground">{s.n}</p>
                  <h2 className="display-lg mt-6 text-foreground">{s.t}</h2>
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <Reveal delay={120}>
                  <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                    {s.lead}
                  </p>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-6 max-w-2xl text-muted-foreground">{s.d}</p>
                </Reveal>
                <Reveal delay={320}>
                  <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="border-t border-border pt-4 text-sm text-foreground"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="display-lg text-foreground">
              ¿No estás seguro por dónde empezar?
            </h2>
          </div>
          <div className="md:col-span-6 md:pt-4">
            <p className="text-lg text-muted-foreground">
              Cuéntanos el punto en el que está tu negocio. Te ayudaremos a definir el
              siguiente paso, con o sin nosotros.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Hablemos <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
