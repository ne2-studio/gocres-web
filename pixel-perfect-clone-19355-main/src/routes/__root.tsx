import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-muted-foreground">404 · No encontrado</p>
        <h1 className="display-lg mt-6 text-foreground">Esta página aún no existe.</h1>
        <p className="mt-4 text-muted-foreground">
          Puede que hayamos movido el camino. Vuelve al inicio y sigamos.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-muted-foreground">Algo ha fallado</p>
        <h1 className="display-md mt-6 text-foreground">Esta página no ha cargado.</h1>
        <p className="mt-4 text-muted-foreground">
          Intenta refrescar o vuelve al inicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gocres — Branding, UX/UI y Diseño Digital para empresas en crecimiento" },
      {
        name: "description",
        content:
          "Gocres es un estudio boutique de branding, UX/UI y diseño digital. Diseñamos identidades y experiencias digitales que transmiten la confianza que tu negocio merece.",
      },
      { name: "author", content: "Gocres" },
      { name: "theme-color", content: "#111310" },
      { property: "og:title", content: "Gocres — La confianza se diseña" },
      {
        property: "og:description",
        content:
          "Estudio boutique de branding, UX/UI y diseño digital para startups, scaleups y empresas en crecimiento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gocres — La confianza se diseña" },
      {
        name: "twitter:description",
        content: "Branding, UX/UI y diseño digital para empresas que están creciendo.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
