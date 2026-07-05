import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Gocres" },
      {
        name: "description",
        content:
          "Cuéntanos el momento en el que está tu negocio. Respondemos en menos de 24 horas laborables.",
      },
      { property: "og:title", content: "Contacto — Gocres" },
      {
        property: "og:description",
        content: "Empecemos una conversación. hola@gocres.studio",
      },
    ],
  }),
  component: Contacto,
});

const budgets = ["< 5K€", "5–15K€", "15–30K€", "30K€ +", "Aún no lo sé"];
const services = ["Branding", "UX/UI", "Diseño Web", "Diseño Gráfico", "Todo el sistema"];

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-24 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:pb-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Contacto</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-xl mt-8 text-foreground">
              Empecemos una <em className="not-italic text-muted-foreground">conversación.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Cuéntanos el momento en el que está tu negocio. No tienes que tenerlo todo
              claro para escribir. De hecho, cuanto antes hablemos, mejor podremos
              ayudarte a definirlo.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 md:col-span-5 md:mt-0">
          <Reveal delay={200}>
            <div className="space-y-8 rounded-sm border border-border bg-secondary p-8">
              <div>
                <p className="eyebrow text-muted-foreground">Correo</p>
                <a
                  href="mailto:hola@gocres.studio"
                  className="mt-2 block font-display text-2xl text-foreground"
                >
                  hola@gocres.studio
                </a>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Tiempo de respuesta</p>
                <p className="mt-2 text-foreground">Menos de 24h laborables.</p>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Disponibilidad</p>
                <p className="mt-2 text-foreground">
                  Aceptamos 2–3 nuevos proyectos por trimestre.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          {sent ? (
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow text-muted-foreground">Recibido</p>
                <h2 className="display-lg mt-6 text-foreground">
                  Gracias. Hablamos pronto.
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Te responderemos en menos de 24 horas laborables desde{" "}
                  <span className="text-foreground">hola@gocres.studio</span>.
                </p>
              </div>
            </Reveal>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mx-auto grid max-w-4xl gap-10"
            >
              <Field label="01 · Cómo te llamas" name="name">
                <input
                  required
                  name="name"
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  placeholder="Tu nombre"
                />
              </Field>
              <Field label="02 · Empresa" name="company">
                <input
                  name="company"
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  placeholder="Nombre de la empresa"
                />
              </Field>
              <Field label="03 · Correo" name="email">
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  placeholder="tu@empresa.com"
                />
              </Field>
              <Field label="04 · ¿En qué te podemos ayudar?" name="service">
                <div className="mt-2 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Chip key={s} name="service" value={s} />
                  ))}
                </div>
              </Field>
              <Field label="05 · Presupuesto aproximado" name="budget">
                <div className="mt-2 flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <Chip key={b} name="budget" value={b} />
                  ))}
                </div>
              </Field>
              <Field label="06 · Cuéntanos tu momento" name="message">
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none resize-none"
                  placeholder="Dónde estáis, qué necesitáis, qué habéis probado..."
                />
              </Field>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
                <button
                  type="submit"
                  className="group inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Enviar mensaje
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <div className="mt-3">{children}</div>
    </label>
  );
}

function Chip({ name, value }: { name: string; value: string }) {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setActive((v) => !v)}
      className={`inline-flex h-10 items-center rounded-full border px-4 text-sm transition ${
        active
          ? "border-foreground bg-primary text-primary-foreground"
          : "border-border bg-transparent text-foreground hover:bg-secondary"
      }`}
    >
      <input type="hidden" name={name} value={active ? value : ""} />
      {value}
    </button>
  );
}
