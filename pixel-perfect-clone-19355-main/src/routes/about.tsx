import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import founder from "@/assets/founder-jaime.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "El estudio — Gocres" },
      {
        name: "description",
        content:
          "Gocres es un estudio boutique fundado por Jaime. Diseño con estrategia, escucha y colaboración.",
      },
      { property: "og:title", content: "El estudio — Gocres" },
      {
        property: "og:description",
        content: "Sobre Gocres, la filosofía y las personas detrás del estudio.",
      },
    ],
  }),
  component: About,
});

const values = [
  { t: "Claridad", d: "Antes que belleza, comprensión. Antes que decoración, propósito." },
  { t: "Estrategia", d: "El diseño solo funciona cuando parte de una decisión razonada." },
  { t: "Escucha", d: "Cada proyecto empieza preguntando, no proponiendo." },
  { t: "Sistema", d: "Diseñamos para que pueda vivir y crecer sin nosotros." },
  { t: "Cuidado", d: "El detalle es la diferencia entre lo correcto y lo memorable." },
  { t: "Compromiso", d: "Trabajamos con pocos clientes al mismo tiempo. A propósito." },
];

function About() {
  return (
    <div className="pt-24 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <p className="eyebrow text-muted-foreground">El estudio</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-xl mt-8 max-w-5xl text-foreground">
            Un estudio pequeño{" "}
            <span className="text-muted-foreground">
              con una idea muy grande sobre el diseño.
            </span>
          </h1>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src={founder}
                alt="Jaime, fundador de Gocres"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Jaime · Fundador y director creativo
            </p>
          </Reveal>
          <div className="md:col-span-7 md:pt-8">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Carta del fundador</p>
              <h2 className="display-lg mt-6 text-foreground">
                El diseño debería ayudar a transmitir el valor que ya existe.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 space-y-6 text-lg text-foreground/85">
                <p>
                  Fundé Gocres después de años trabajando con empresas que tenían un
                  producto extraordinario y una marca que no lo estaba a la altura.
                </p>
                <p>
                  Me di cuenta de que el problema casi nunca era estético. Era de
                  claridad. De estrategia. De coherencia. De cuidado.
                </p>
                <p>
                  Por eso Gocres no vende diseño. Diseñamos confianza. Y la confianza,
                  como el camino, se construye paso a paso.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-32 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Principios</p>
            <h2 className="display-lg mt-6 max-w-3xl text-foreground">
              Cómo tomamos decisiones cuando diseñamos.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-[color:var(--ink)]/12 bg-[color:var(--ink)]/12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.t}
                delay={i * 60}
                className="flex min-h-[240px] flex-col justify-between gap-8 bg-secondary p-8 md:p-10"
              >
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display-md text-foreground">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display-lg md:col-span-7">
            ¿Te gustaría trabajar juntos?
          </h2>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-muted-foreground">
              Trabajamos con pocos clientes al mismo tiempo. Si es tu momento, hablemos.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground"
            >
              Hablemos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
