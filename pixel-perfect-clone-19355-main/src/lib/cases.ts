import footprints from "@/assets/footprints-path.jpg";
import texture from "@/assets/texture-paper.jpg";
import husky from "@/assets/husky-hero.jpg";

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  meta: string;
  excerpt: string;
  image: string;
  ratio: "aspect-[16/10]" | "aspect-[4/5]" | "aspect-[21/9]";
  dark?: boolean;
  services: string[];
  duration: string;
  context: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcome: string;
  metrics: { k: string; v: string }[];
  quote: { q: string; a: string; r: string };
  gallery: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "northline",
    tag: "Branding · Web",
    title: "Northline: de startup a categoría",
    client: "Northline",
    sector: "SaaS B2B",
    year: "2025",
    meta: "SaaS · 2025",
    excerpt:
      "Rediseñamos su marca para acompañar la ronda A y prepararla para ser la referencia de su sector.",
    image: footprints,
    ratio: "aspect-[16/10]",
    services: ["Estrategia de marca", "Identidad visual", "Diseño web", "Sistema"],
    duration: "10 semanas",
    context:
      "Northline había pasado de ser una promesa a una realidad. Con más de 200 clientes y una ronda a la vista, su marca seguía siendo la del primer pitch deck: correcta, pero pequeña para lo que estaban a punto de convertirse.",
    challenge:
      "Construir una marca preparada para hablar con inversores y con enterprise sin perder la cercanía que les había llevado hasta ahí.",
    approach: [
      "Auditamos el ecosistema visual y verbal existente.",
      "Realizamos entrevistas a equipo, clientes actuales e inversores.",
      "Definimos territorio estratégico, tono y arquitectura de marca.",
      "Diseñamos identidad, sistema visual y web como un mismo lenguaje.",
    ],
    deliverables: [
      "Estrategia de marca",
      "Identidad y sistema visual",
      "Guidelines",
      "Sitio web corporativo",
      "Plantillas de deck y ventas",
    ],
    outcome:
      "Cerraron la ronda A tres semanas después del lanzamiento. La marca dejó de ser una barrera en conversaciones enterprise y se convirtió en un activo comercial.",
    metrics: [
      { k: "+180%", v: "leads cualificados" },
      { k: "3.2x", v: "conversión en demo" },
      { k: "10 sem.", v: "de estrategia a lanzamiento" },
    ],
    quote: {
      q: "Antes de trabajar con Gocres teníamos una marca correcta. Ahora tenemos una marca que abre puertas.",
      a: "María León",
      r: "CEO, Northline SaaS",
    },
    gallery: [texture, husky, footprints],
  },
  {
    slug: "kairos-learning",
    tag: "UX/UI",
    title: "Kairos Learning: aprender sin fricciones",
    client: "Kairos Learning",
    sector: "E-learning",
    year: "2025",
    meta: "E-learning · 2025",
    excerpt: "Un producto más claro que aumentó la finalización de cursos un 42%.",
    image: texture,
    ratio: "aspect-[4/5]",
    services: ["Investigación UX", "Rediseño UI", "Sistema de diseño"],
    duration: "8 semanas",
    context:
      "Kairos había crecido a base de features. La plataforma funcionaba, pero cada nueva incorporación había sumado una capa de fricción hasta que la experiencia se volvió confusa incluso para su equipo.",
    challenge:
      "Rediseñar la experiencia de estudio sin romper lo que ya funcionaba y con el equipo pudiendo mantenerla en el tiempo.",
    approach: [
      "Analítica y test con 12 estudiantes reales.",
      "Priorización de jobs-to-be-done por impacto.",
      "Rediseño del flujo de curso y evaluaciones.",
      "Sistema de diseño en Figma con documentación de uso.",
    ],
    deliverables: [
      "Investigación y hallazgos",
      "Rediseño UI de 24 pantallas clave",
      "Sistema de diseño y tokens",
      "Handoff con equipo de producto",
    ],
    outcome:
      "El curso medio pasó de un 38% a un 80% de finalización. El equipo de producto empezó a mover cambios en días, no en semanas.",
    metrics: [
      { k: "+42%", v: "finalización de cursos" },
      { k: "−54%", v: "tickets de soporte" },
      { k: "9.1/10", v: "NPS de estudiantes" },
    ],
    quote: {
      q: "El proceso fue tan claro como el resultado. Por primera vez sentimos que el diseño hablaba nuestro idioma.",
      a: "Alex Ferrer",
      r: "Fundador, Kairos Learning",
    },
    gallery: [footprints, husky, texture],
  },
  {
    slug: "mesta",
    tag: "Rebranding",
    title: "Mesta: una marca a la altura de su ambición",
    client: "Mesta",
    sector: "Scaleup",
    year: "2024",
    meta: "Scaleup · 2024",
    excerpt: "Del logo al ecosistema completo. Una marca preparada para escalar.",
    image: husky,
    ratio: "aspect-[4/5]",
    dark: true,
    services: ["Rebranding", "Sistema visual", "Guidelines", "Aplicaciones"],
    duration: "12 semanas",
    context:
      "Mesta duplicaba equipo cada año, pero seguía comunicándose con la marca de sus primeros clientes. Internamente, nadie sabía muy bien qué era Mesta ni hacia dónde iba.",
    challenge:
      "Construir una identidad que ordenara el mensaje interno tanto como el externo.",
    approach: [
      "Talleres con dirección y responsables de área.",
      "Definición de propósito, promesa y territorio.",
      "Sistema visual con tres niveles de expresión.",
      "Roll-out por unidades de negocio.",
    ],
    deliverables: [
      "Plataforma de marca",
      "Identidad visual completa",
      "Guidelines de 84 páginas",
      "Kit de aplicaciones y plantillas",
    ],
    outcome:
      "Un año después, Mesta duplicó facturación con la misma marca. El nuevo talento entra sabiendo qué representa la empresa.",
    metrics: [
      { k: "2x", v: "facturación en 12 meses" },
      { k: "+65%", v: "candidatos cualificados" },
      { k: "100%", v: "coherencia entre unidades" },
    ],
    quote: {
      q: "Nuestra tasa de conversión subió, sí. Pero lo más valioso fue dejar de justificar quiénes somos.",
      a: "Elena Ruiz",
      r: "Head of Growth, Mesta",
    },
    gallery: [texture, footprints, husky],
  },
  {
    slug: "volta",
    tag: "Diseño Web",
    title: "Volta: convertir con calma",
    client: "Volta Consulting",
    sector: "Consultora",
    year: "2024",
    meta: "Consultora · 2024",
    excerpt: "Una web editorial que multiplicó por 3 las conversaciones cualificadas.",
    image: texture,
    ratio: "aspect-[16/10]",
    services: ["Copy estratégico", "Diseño web", "Desarrollo"],
    duration: "6 semanas",
    context:
      "Volta llevaba años cerrando proyectos por recomendación. Su web era una tarjeta de visita silenciosa que no reflejaba ni la sofisticación ni el nivel de sus clientes.",
    challenge:
      "Diseñar una web que trabajara para ellos incluso cuando no estuvieran en la sala.",
    approach: [
      "Sesiones de descubrimiento con socios y clientes.",
      "Reescritura completa del mensaje.",
      "Diseño editorial con foco en lectura y jerarquía.",
      "Desarrollo cuidado y medición.",
    ],
    deliverables: [
      "Copy estratégico",
      "Diseño web de 8 plantillas",
      "Desarrollo y CMS",
      "Plan de contenidos trimestral",
    ],
    outcome:
      "En tres meses triplicaron las conversaciones cualificadas y cerraron dos cuentas fuera de su red habitual.",
    metrics: [
      { k: "3x", v: "conversaciones cualificadas" },
      { k: "+2 min", v: "tiempo medio en sitio" },
      { k: "2", v: "cuentas nuevas fuera de red" },
    ],
    quote: {
      q: "Ya no tenemos que explicar quiénes somos en la primera reunión. La web lo hace por nosotros.",
      a: "Pablo Serra",
      r: "Socio, Volta Consulting",
    },
    gallery: [husky, footprints, texture],
  },
  {
    slug: "havren",
    tag: "Branding",
    title: "Havren: una identidad para el largo plazo",
    client: "Havren",
    sector: "Estudio de arquitectura",
    year: "2024",
    meta: "Estudio de arquitectura · 2024",
    excerpt: "Sistema visual sobrio, tipográfico, con vocación de permanecer.",
    image: footprints,
    ratio: "aspect-[4/5]",
    services: ["Naming", "Identidad", "Sistema tipográfico"],
    duration: "7 semanas",
    context:
      "Un estudio de arquitectura fundado por tres socios necesitaba una identidad tan sobria y honesta como su forma de proyectar.",
    challenge:
      "Diseñar una marca que envejeciera bien, sin gestos de moda, capaz de sostener 20 años de trabajo.",
    approach: [
      "Territorio conceptual: refugio, permanencia, materia.",
      "Sistema tipográfico como eje visual.",
      "Paleta reducida y aplicaciones minimales.",
    ],
    deliverables: [
      "Naming y verbal",
      "Identidad y sistema visual",
      "Guidelines",
      "Papelería y señalética",
    ],
    outcome:
      "Una marca serena que ha unificado la comunicación del estudio y ha reforzado su posicionamiento premium.",
    metrics: [
      { k: "20 años", v: "de vida útil proyectada" },
      { k: "1", v: "sistema para todo el estudio" },
      { k: "+40%", v: "briefs de mayor presupuesto" },
    ],
    quote: {
      q: "Queríamos una marca que no necesitara volver a hacerse en diez años. Eso es lo que tenemos.",
      a: "Clara Béjar",
      r: "Socia, Havren",
    },
    gallery: [texture, husky, footprints],
  },
  {
    slug: "osmo",
    tag: "Diseño Gráfico",
    title: "Osmo: papel, tacto y presencia",
    client: "Osmo",
    sector: "Retail premium",
    year: "2023",
    meta: "Retail premium · 2023",
    excerpt: "Un lenguaje editorial que se traslada del online al mundo físico.",
    image: texture,
    ratio: "aspect-[4/5]",
    services: ["Dirección de arte", "Packaging", "Editorial"],
    duration: "9 semanas",
    context:
      "Osmo abría su primera flagship en Madrid y necesitaba que la experiencia física estuviera a la altura del cuidado con el que fabrica sus productos.",
    challenge:
      "Trasladar la marca digital a un lenguaje físico coherente sin caer en la literalidad.",
    approach: [
      "Auditoría sensorial de la experiencia en tienda.",
      "Sistema editorial aplicado a packaging, etiquetas y punto de venta.",
      "Selección de papeles, tintas y acabados.",
    ],
    deliverables: [
      "Sistema editorial",
      "Packaging de 12 referencias",
      "Materiales de tienda",
      "Guía de aplicación física",
    ],
    outcome:
      "La flagship funcionó como una extensión natural de la marca. El ticket medio aumentó y la prensa cubrió la apertura sin necesidad de campaña.",
    metrics: [
      { k: "+28%", v: "ticket medio" },
      { k: "14", v: "medios cubrieron la apertura" },
      { k: "1", v: "sistema físico-digital" },
    ],
    quote: {
      q: "Cuando alguien entra en la tienda, entiende la marca sin que se la expliquemos.",
      a: "Nuria Alcalá",
      r: "Directora creativa, Osmo",
    },
    gallery: [footprints, husky, texture],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
