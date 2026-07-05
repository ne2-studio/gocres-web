import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Paw, PawTrail } from "@/components/paw";
import { cases } from "@/lib/cases";
import huskyHero from "@/assets/husky-hero.jpg";
import footprints from "@/assets/footprints-path.jpg";
import texturePaper from "@/assets/texture-paper.jpg";
import founder from "@/assets/founder-jaime.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gocres — La confianza se diseña" },
      {
        name: "description",
        content:
          "Estudio boutique de branding, UX/UI y diseño digital. Ayudamos a empresas en crecimiento a transmitir el valor real de su negocio.",
      },
      { property: "og:title", content: "Gocres — La confianza se diseña" },
      {
        property: "og:description",
        content:
          "Diseñamos identidades y experiencias digitales que generan confianza desde el primer contacto.",
      },
    ],
  }),
  component: Home,
});

/* ============ Data ============ */
const benefits = [
  { t: "Genera confianza", d: "Haz que la primera impresión juegue a tu favor." },
  { t: "Diferénciate", d: "Construye una identidad difícil de confundir con la competencia." },
  { t: "Aumenta el valor percibido", d: "Una marca sólida ayuda a justificar mejores precios y atraer mejores oportunidades." },
  { t: "Reduce fricciones", d: "Experiencias más claras significan usuarios más satisfechos." },
  { t: "Crece con coherencia", d: "Construye un sistema preparado para evolucionar con tu negocio." },
  { t: "Convierte mejor", d: "Una comunicación clara facilita que los visitantes den el siguiente paso." },
];

const services = [
  { n: "01", t: "Branding", d: "Cuando tu marca ya no representa el valor real de tu negocio.", l: "Construimos identidades visuales preparadas para acompañar el crecimiento de tu empresa." },
  { n: "02", t: "UX/UI", d: "Cuando utilizar un producto debería resultar tan sencillo como parece.", l: "Diseñamos experiencias digitales intuitivas, útiles y centradas en las personas." },
  { n: "03", t: "Diseño Web", d: "Cuando tu web necesita convertirse en una herramienta para generar confianza y oportunidades.", l: "Creamos experiencias digitales que combinan estrategia, claridad y conversión." },
  { n: "04", t: "Diseño Gráfico", d: "Cuando necesitas mantener una comunicación coherente en cada punto de contacto.", l: "Diseñamos piezas que refuerzan la identidad de tu marca más allá de la pantalla." },
];

const method = [
  { n: "01", t: "Descubrir", d: "Entendemos el punto en el que está tu negocio." },
  { n: "02", t: "Comprender", d: "Analizamos el contexto antes de tomar decisiones." },
  { n: "03", t: "Definir", d: "Trazamos una dirección clara." },
  { n: "04", t: "Construir", d: "Convertimos la estrategia en una solución sólida." },
  { n: "05", t: "Evolucionar", d: "Porque una buena marca nunca deja de crecer." },
];

const mirror = [
  ["Tu empresa ha evolucionado.", "Tu marca no."],
  ["Tu producto es bueno.", "Pero no lo parece."],
  ["Tu web explica lo que haces.", "Pero no consigue transmitir por qué deberían elegirte."],
  ["Cada nuevo material parece hecho", "por una persona distinta."],
  ["Sabes que ha llegado el momento de mejorar.", "Solo necesitas saber por dónde empezar."],
];

const opportunity = [
  "Tu marca transmite confianza antes incluso de la primera reunión.",
  "Tu web explica el valor de tu negocio sin que tengas que hacerlo tú.",
  "Cada punto de contacto comunica el mismo mensaje.",
  "Tus clientes entienden rápidamente quién eres y por qué deberían confiar en ti.",
  "Tu empresa parece tan profesional como realmente es.",
];

const testimonials = [
  {
    q: "Antes de trabajar con Gocres teníamos una marca correcta. Ahora tenemos una marca que abre puertas.",
    a: "María León",
    r: "CEO, Northline SaaS",
  },
  {
    q: "El proceso fue tan claro como el resultado. Por primera vez sentimos que el diseño hablaba nuestro idioma.",
    a: "Alex Ferrer",
    r: "Fundador, Kairos Learning",
  },
  {
    q: "Nuestra tasa de conversión subió, sí. Pero lo más valioso fue dejar de justificar quiénes somos.",
    a: "Elena Ruiz",
    r: "Head of Growth, Mesta",
  },
];

const faq = [
  { q: "¿Solo trabajáis con startups?", a: "No. Trabajamos con startups, scaleups, SaaS, consultoras, profesionales y empresas ya consolidadas que quieren dar un salto en percepción." },
  { q: "¿Puedo contratar un único servicio?", a: "Sí. Aunque solemos trabajar desde una visión integral, cada servicio puede contratarse por separado si encaja con tu momento." },
  { q: "¿Cómo suele ser el proceso?", a: "Comienza con una conversación. A partir de ahí seguimos cinco fases: Descubrir, Comprender, Definir, Construir y Evolucionar." },
  { q: "¿Cuánto dura un proyecto?", a: "Depende del alcance. Un proyecto de branding suele durar entre 4 y 8 semanas; una web entre 6 y 12. Siempre acordamos un calendario claro antes de empezar." },
  { q: "¿Trabajáis en remoto?", a: "Sí. Colaboramos con clientes de toda España, Europa y LATAM. Reuniones estructuradas y comunicación asíncrona diaria." },
  { q: "¿Qué ocurre cuando termina el proyecto?", a: "Entregamos un sistema listo para crecer contigo y ofrecemos acompañamiento en las siguientes fases si lo necesitas." },
];

const clients = ["Northline", "Kairos", "Mesta", "Volta", "Havren", "Osmo", "Índigo", "Meridian"];

/* ============ Component ============ */
function Home() {
  return (
    <div className="overflow-hidden">
      {/* 01 · HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-background pt-24 md:pt-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 md:grid-cols-12 md:gap-6 md:px-10 md:pb-32">
          <div className="md:col-span-7 md:pt-10">
            <Reveal>
              <p className="eyebrow text-muted-foreground">
                Branding · UX/UI · Diseño Digital
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-10 text-foreground">
                Haz que tu marca <em className="not-italic text-[color:var(--ink-soft)] italic-alt">transmita</em> la confianza que tu negocio merece.
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 max-w-xl space-y-4 text-base text-muted-foreground md:text-lg">
                <p className="text-foreground/80">Tu negocio está creciendo.</p>
                <p>
                  Ahora hagamos que tu marca, tu web y tu experiencia digital estén a la
                  misma altura.
                </p>
                <p>
                  Construimos identidades y productos digitales que ayudan a startups,
                  empresas en crecimiento y profesionales a generar confianza desde el
                  primer contacto.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  to="/contacto"
                  className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
                >
                  Hablemos
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/casos"
                  className="inline-flex h-14 items-center gap-3 rounded-full border border-border bg-transparent px-7 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  Ver proyectos
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative md:col-span-5">
            <Reveal delay={200} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[color:var(--ink)]">
              <img
                src={huskyHero}
                alt="Retrato editorial de un husky en blanco y negro"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[color:var(--cream)]">
                <p className="eyebrow opacity-80">Nº 01 · El guía</p>
                <p className="font-display text-sm opacity-80">MMXXVI</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="eyebrow text-muted-foreground">Descubre</span>
          <span className="block h-10 w-px animate-pulse bg-foreground/40" />
        </div>

        {/* Trust strip */}
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-[1440px] px-6 py-6 md:px-10">
            <p className="max-w-3xl text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Empresas, startups y profesionales ya han confiado en Gocres para construir
              la siguiente etapa de su marca.
            </p>
          </div>
        </div>
      </section>

      {/* 02 · EL ESPEJO */}
      <section className="relative bg-background py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow text-muted-foreground">02 · El espejo</p>
                <h2 className="display-lg mt-8 text-foreground">¿Te resulta familiar?</h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-border">
                {mirror.map((pair, i) => (
                  <li key={i} className="grid gap-6 py-10 md:grid-cols-12">
                    <Reveal delay={i * 80} className="md:col-span-1">
                      <span className="font-display text-sm text-muted-foreground">
                        0{i + 1}
                      </span>
                    </Reveal>
                    <Reveal delay={i * 80 + 60} className="md:col-span-11">
                      <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                        <span>{pair[0]}</span>{" "}
                        <span className="text-muted-foreground">{pair[1]}</span>
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="mt-12 max-w-xl text-lg text-foreground/80">
                  Si alguna de estas situaciones te resulta familiar, probablemente
                  podamos ayudarte.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · LA OPORTUNIDAD */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${texturePaper})`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-48">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow text-[color:var(--sand)]/70">03 · La oportunidad</p>
                <h2 className="display-lg mt-8 text-[color:var(--cream)]">
                  Imagina que...
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-10">
                {opportunity.map((line, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <p className="font-display text-2xl leading-snug text-[color:var(--cream)] md:text-3xl">
                      <span className="mr-6 font-body text-xs uppercase tracking-[0.28em] text-[color:var(--sand)]/60 align-middle">
                        0{i + 1}
                      </span>
                      {line}
                    </p>
                    <div className="mt-8 h-px w-full bg-[color:var(--cream)]/12" />
                  </Reveal>
                ))}
                <Reveal delay={600}>
                  <p className="pt-4 text-xl italic text-[color:var(--sand)]">
                    Eso es lo que un buen diseño puede conseguir.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · BENEFICIOS */}
      <section className="bg-background py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground">04 · Beneficios</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-lg mt-8 max-w-3xl text-foreground">
              El diseño no cambia un negocio. <span className="text-muted-foreground">La percepción sí.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                key={b.t}
                delay={i * 60}
                className="group flex flex-col justify-between gap-10 bg-background p-8 md:p-10 min-h-[280px] transition-colors hover:bg-secondary"
              >
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display-md text-foreground">{b.t}</h3>
                  <p className="mt-4 text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · SERVICIOS */}
      <section className="bg-secondary py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow text-muted-foreground">05 · Cómo podemos ayudarte</p>
                <h2 className="display-lg mt-8 text-foreground">
                  Soluciones para empresas que quieren crecer con claridad.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-[color:var(--ink)]/15">
                {services.map((s, i) => (
                  <li key={s.t} className="group py-10">
                    <Reveal delay={i * 80}>
                      <Link
                        to="/servicios"
                        className="grid items-baseline gap-6 md:grid-cols-12"
                      >
                        <span className="font-display text-sm text-muted-foreground md:col-span-1">
                          {s.n}
                        </span>
                        <div className="md:col-span-11">
                          <h3 className="display-lg text-foreground transition group-hover:translate-x-1">
                            {s.t}
                          </h3>
                          <p className="mt-3 font-display text-lg text-foreground/70">
                            {s.d}
                          </p>
                          <p className="mt-2 max-w-2xl text-muted-foreground">{s.l}</p>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · EL CAMINO */}
      <section className="relative isolate overflow-hidden bg-background py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow text-muted-foreground">06 · El camino</p>
                <h2 className="display-lg mt-8 text-foreground">
                  Así trabajaremos juntos.
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Un método simple, calmado y probado. Cada paso reduce incertidumbre y
                  acerca tu marca al lugar donde quiere estar.
                </p>
              </Reveal>
              <Reveal delay={200} className="relative mt-16 hidden aspect-[4/3] w-full overflow-hidden rounded-sm md:block">
                <img
                  src={footprints}
                  alt="Huellas sobre arena"
                  width={1600}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Reveal>
            </div>
            <ol className="md:col-span-7">
              {method.map((m, i) => (
                <li key={m.t} className="relative border-t border-border py-10 last:border-b">
                  <Reveal delay={i * 90} className="grid gap-6 md:grid-cols-12">
                    <div className="flex items-center gap-3 md:col-span-1">
                      <Paw
                        className="h-4 w-4 text-foreground/50"
                        rotate={i % 2 ? 14 : -14}
                      />
                      <span className="font-display text-sm text-muted-foreground">
                        {m.n}
                      </span>
                    </div>
                    <div className="md:col-span-11">
                      <h3 className="display-md text-foreground">{m.t}</h3>
                      <p className="mt-3 max-w-2xl text-muted-foreground">{m.d}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 07 · HISTORIAS DE CRECIMIENTO */}
      <section className="bg-background pb-32 md:pb-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 border-t border-border pt-20 md:grid-cols-12 md:pt-32">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow text-muted-foreground">07 · Historias de crecimiento</p>
                <h2 className="display-lg mt-8 text-foreground">
                  Cada proyecto deja una huella.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={150}>
                <p className="font-display text-2xl leading-snug text-foreground/90">
                  No mostramos trabajos. Mostramos empresas que decidieron dar un paso
                  adelante.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <ul className="mt-10 grid grid-cols-2 gap-8 text-sm text-muted-foreground md:grid-cols-4">
                  <li><span className="block text-foreground">Dónde estaban.</span></li>
                  <li><span className="block text-foreground">Qué necesitaban.</span></li>
                  <li><span className="block text-foreground">Qué construimos juntos.</span></li>
                  <li><span className="block text-foreground">Qué cambió después.</span></li>
                </ul>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-12">
                  <Link
                    to="/casos"
                    className="group inline-flex h-14 items-center gap-3 rounded-full border border-border px-7 text-sm font-medium text-foreground transition hover:bg-secondary"
                  >
                    Explorar casos de estudio
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Case grid */}
          <div className="mt-20 grid gap-6 md:grid-cols-12">
            {cases.slice(0, 4).map((c, i) => {
              const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
              return (
                <Reveal key={c.slug} delay={i * 100} className={spans[i]}>
                  <CaseCard
                    slug={c.slug}
                    image={c.image}
                    tag={c.tag}
                    title={c.title}
                    meta={c.meta}
                    dark={c.dark}
                  />
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <PawTrail count={10} className="mt-16 justify-center" />
          </Reveal>
        </div>
      </section>

      {/* 08 · FUNDADOR */}
      <section className="bg-secondary py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <img
                  src={founder}
                  alt="Jaime, fundador de Gocres"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="md:col-span-7 md:pt-10">
              <Reveal>
                <p className="eyebrow text-muted-foreground">08 · Quién guía el camino</p>
                <h2 className="display-lg mt-8 text-foreground">
                  Detrás de cada proyecto hay una conversación.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 space-y-5 text-lg text-foreground/85">
                  <p>Hola. Soy Jaime.</p>
                  <p>Fundé Gocres con una idea muy sencilla:</p>
                  <p className="font-display text-2xl leading-snug text-foreground">
                    El diseño no debería servir únicamente para hacer que una empresa se
                    vea mejor. Debería ayudar a que transmita con claridad el valor que
                    ya existe detrás de ella.
                  </p>
                  <p className="text-muted-foreground">
                    Por eso trabajo desde la estrategia, la escucha y la colaboración.
                    No para imponer soluciones. Sino para construirlas contigo.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10">
                  <Link
                    to="/about"
                    className="group inline-flex h-12 items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground"
                  >
                    Conocer mi historia
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 09 · CLIENTES — Marquee */}
      <section className="border-y border-border bg-background py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">09 · Clientes</p>
              <h2 className="display-md mt-6 text-foreground">
                Empresas que ya decidieron dar el siguiente paso.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-md text-muted-foreground">
                Cada proyecto es diferente. Pero todos parten del mismo objetivo:
                construir una marca preparada para crecer.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 overflow-hidden">
          <div
            className="flex w-max gap-16 whitespace-nowrap px-6"
            style={{ animation: "marquee 40s linear infinite" }}
          >
            {[...clients, ...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="font-display text-3xl font-medium tracking-tight text-foreground/50 md:text-5xl"
              >
                {c}
                <span className="ml-16 text-foreground/20">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 · TESTIMONIOS */}
      <section className="bg-background py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-muted-foreground">10 · Testimonios</p>
            <h2 className="display-lg mt-8 max-w-3xl text-foreground">
              Lo más valioso no es lo que decimos nosotros.{" "}
              <span className="text-muted-foreground">
                Es lo que cambia después de trabajar juntos.
              </span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 120}
                className="flex flex-col justify-between gap-10 rounded-sm border border-border bg-background p-8 md:p-10 min-h-[340px]"
              >
                <p className="font-display text-xl leading-snug text-foreground">
                  “{t.q}”
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.a}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.r}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · FAQ */}
      <section className="bg-background pb-32 md:pb-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">11 · FAQ</p>
              <h2 className="display-lg mt-8 text-foreground">Preguntas frecuentes</h2>
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-border">
                {faq.map((item, i) => (
                  <FaqItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 · CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ink)] py-32 md:py-48">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${footprints})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1) brightness(0.4)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:var(--ink)] via-[color:var(--ink)]/70 to-[color:var(--ink)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-[color:var(--sand)]/70">12 · Empecemos</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-xl mt-10 max-w-5xl text-[color:var(--cream)]">
              Tu negocio ya está creciendo. Ahora hagamos que{" "}
              <em className="not-italic text-[color:var(--sand)]">tu marca</em> también lo haga.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-16 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6 space-y-5 text-lg text-[color:var(--cream)]/80">
                <p>Las mejores marcas no aparecen por casualidad.</p>
                <p>Se construyen paso a paso.</p>
                <p>
                  Si crees que ha llegado el momento de dar el siguiente, me encantará
                  recorrer ese camino contigo.
                </p>
              </div>
              <div className="md:col-span-6 md:pt-2">
                <Link
                  to="/contacto"
                  className="group inline-flex h-16 items-center gap-4 rounded-full bg-[color:var(--cream)] px-10 text-base font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--sand)]"
                >
                  Empecemos
                  <span aria-hidden className="text-2xl transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <p className="mt-6 text-sm text-[color:var(--cream)]/60">
                  Respuesta en menos de 24 horas laborables · hola@gocres.studio
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ============ Subcomponents ============ */
function CaseCard({
  slug,
  image,
  tag,
  title,
  meta,
  dark = false,
}: {
  slug: string;
  image: string;
  tag: string;
  title: string;
  meta: string;
  dark?: boolean;
}) {
  return (
    <Link
      to="/casos/$slug"
      params={{ slug }}
      className="group relative block aspect-[16/11] w-full overflow-hidden rounded-sm bg-secondary"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          dark
            ? "from-[color:var(--ink)]/80 via-[color:var(--ink)]/20 to-transparent"
            : "from-[color:var(--ink)]/70 via-[color:var(--ink)]/10 to-transparent"
        }`}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-[color:var(--cream)]/80">{tag}</p>
          <Paw className="h-4 w-4 text-[color:var(--cream)]/70" rotate={-12} />
        </div>
        <div>
          <h3 className="display-md text-[color:var(--cream)]">{title}</h3>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/70">
              {meta}
            </p>
            <span className="inline-flex items-center gap-2 text-xs text-[color:var(--cream)]/80 opacity-0 transition group-hover:opacity-100">
              Ver caso <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8">
        <span className="font-display text-xl text-foreground md:text-2xl">{q}</span>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pb-8 pr-16 text-muted-foreground">{a}</div>
    </details>
  );
}
