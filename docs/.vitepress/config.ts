import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { navEn, navEs, navRu, withLocalizedSidebar } from "./sidebar";

const base = "/";
const siteUrl = "https://docs.bixbit.io";
const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const locales = [
  { code: "en", dir: "en", hreflang: "en", ogLocale: "en_US", urlPrefix: "" },
  { code: "ru", dir: "ru", hreflang: "ru", ogLocale: "ru_RU", urlPrefix: "ru/" },
  { code: "es", dir: "es", hreflang: "es", ogLocale: "es_ES", urlPrefix: "es/" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];

function getPageLocale(relativePath: string): LocaleCode {
  if (relativePath.startsWith("ru/")) return "ru";
  if (relativePath.startsWith("es/")) return "es";
  return "en";
}

function getSharedPagePath(relativePath: string) {
  return relativePath.replace(/^(en|ru|es)\//, "");
}

function toSitePath(sharedPagePath: string) {
  return sharedPagePath.replace(/index\.md$/, "").replace(/\.md$/, ".html");
}

function getLocalizedUrl(locale: LocaleCode, sharedPagePath: string) {
  const sitePath = toSitePath(sharedPagePath);
  const prefix = locales.find((item) => item.code === locale)?.urlPrefix ?? "";
  return new URL(`${prefix}${sitePath}`, `${siteUrl}/`).href;
}

function getCanonicalUrl(relativePath: string) {
  const locale = getPageLocale(relativePath);
  return getLocalizedUrl(locale, getSharedPagePath(relativePath));
}

function getAbsoluteUrl(url: string) {
  return new URL(url, `${siteUrl}/`).href;
}

function localePageExists(locale: LocaleCode, sharedPagePath: string) {
  const dir = locales.find((item) => item.code === locale)?.dir ?? locale;
  return existsSync(resolve(docsRoot, dir, sharedPagePath));
}

function getAlternateLinks(relativePath: string) {
  const sharedPagePath = getSharedPagePath(relativePath);

  if (sharedPagePath === "docs.md") return [];

  const links: [string, Record<string, string>][] = [];

  for (const locale of locales) {
    if (!localePageExists(locale.code, sharedPagePath)) continue;
    links.push([
      "link",
      {
        rel: "alternate",
        hreflang: locale.hreflang,
        href: getLocalizedUrl(locale.code, sharedPagePath),
      },
    ]);
  }

  if (localePageExists("en", sharedPagePath)) {
    links.push([
      "link",
      {
        rel: "alternate",
        hreflang: "x-default",
        href: getLocalizedUrl("en", sharedPagePath),
      },
    ]);
  }

  return links;
}

const localSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: "Search",
          buttonAriaLabel: "Search documentation",
        },
        modal: {
          noResultsText: "No results found",
          resetButtonTitle: "Reset search",
          backButtonTitle: "Back",
          displayDetails: "Display detailed list",
          footer: {
            selectText: "to select",
            selectKeyAriaLabel: "enter",
            navigateText: "to navigate",
            navigateUpKeyAriaLabel: "up arrow",
            navigateDownKeyAriaLabel: "down arrow",
            closeText: "to close",
            closeKeyAriaLabel: "escape",
          },
        },
      },
    },
    ru: {
      translations: {
        button: {
          buttonText: "Поиск",
          buttonAriaLabel: "Поиск по документации",
        },
        modal: {
          noResultsText: "Ничего не найдено",
          resetButtonTitle: "Сбросить",
          backButtonTitle: "Назад",
          displayDetails: "Показать подробности",
          footer: {
            selectText: "перейти",
            selectKeyAriaLabel: "Enter",
            navigateText: "навигация",
            navigateUpKeyAriaLabel: "Стрелка вверх",
            navigateDownKeyAriaLabel: "Стрелка вниз",
            closeText: "закрыть",
            closeKeyAriaLabel: "Escape",
          },
        },
      },
    },
    es: {
      translations: {
        button: {
          buttonText: "Buscar",
          buttonAriaLabel: "Buscar en la documentación",
        },
        modal: {
          noResultsText: "No se encontraron resultados",
          resetButtonTitle: "Restablecer",
          backButtonTitle: "Atrás",
          displayDetails: "Mostrar lista detallada",
          footer: {
            selectText: "para seleccionar",
            selectKeyAriaLabel: "enter",
            navigateText: "para navegar",
            navigateUpKeyAriaLabel: "flecha arriba",
            navigateDownKeyAriaLabel: "flecha abajo",
            closeText: "para cerrar",
            closeKeyAriaLabel: "escape",
          },
        },
      },
    },
  },
};

export default defineConfig(
  withLocalizedSidebar({
    base,
    sitemap: {
      hostname: siteUrl,
      transformItems: (items) => items.filter((item) => !/(^|\/)docs(\.html)?\/?$/.test(item.url)),
    },
    rewrites: (id) => (id.startsWith("en/") ? id.slice(3) : id),
    transformPageData(pageData) {
      const seoTitle = typeof pageData.frontmatter.seoTitle === "string" ? pageData.frontmatter.seoTitle.trim() : "";
      const title = seoTitle || pageData.title;
      const description = pageData.description;
      const ogImage = pageData.frontmatter.ogImage;
      const locale = getPageLocale(pageData.relativePath);
      const canonical = getCanonicalUrl(pageData.relativePath);
      const ogLocale = locales.find((item) => item.code === locale)?.ogLocale ?? "en_US";

      if (seoTitle) {
        pageData.title = seoTitle;
        pageData.titleTemplate = ":title";
      }

      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.push(
        ["link", { rel: "canonical", href: canonical }],
        ...getAlternateLinks(pageData.relativePath),
        ["meta", { property: "og:title", content: title }],
        ["meta", { property: "og:url", content: canonical }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:locale", content: ogLocale }],
      );

      if (description) {
        pageData.frontmatter.head.push(["meta", { property: "og:description", content: description }]);
      }

      if (typeof ogImage === "string" && ogImage) {
        pageData.frontmatter.head.push(["meta", { property: "og:image", content: getAbsoluteUrl(ogImage) }]);
      }
    },
    head: [
      ["link", { rel: "icon", type: "image/png", href: `${base}favicon-512.png` }],
      ["link", { rel: "apple-touch-icon", href: `${base}favicon-512.png` }],
      ["link", { rel: "mask-icon", href: `${base}images/logo.svg`, color: "#d9017a" }],
    ],
    markdown: {
      config(md) {
        md.inline.ruler.before("emphasis", "underline", (state, silent) => {
          const match = /^\+\+(.+?)\+\+/.exec(state.src.slice(state.pos));
          if (!match) return false;
          if (!silent) {
            const token = state.push("html_inline", "", 0);
            token.content = `<u>${md.renderInline(match[1])}</u>`;
          }
          state.pos += match[0].length;
          return true;
        });
      },
    },
    themeConfig: {
      logo: {
        light: "/images/logo.svg",
        dark: "/images/logo-dark.svg",
        alt: "AMS Docs",
      },
      search: {
        provider: "local",
        options: localSearchOptions,
      },
    },
    locales: {
      root: {
        label: "English",
        lang: "en-US",
        title: "Documentation",
        description: "Documentation",
        themeConfig: {
          nav: navEn,
          outline: { label: "On this page", level: [1, 6] },
          docFooter: { prev: "Previous", next: "Next" },
          sidebarMenuLabel: "Menu",
          returnToTopLabel: "Return to top",
          darkModeSwitchLabel: "Appearance",
          lightModeSwitchTitle: "Switch to light theme",
          darkModeSwitchTitle: "Switch to dark theme",
          langMenuLabel: "Change language",
          skipToContentLabel: "Skip to content",
        },
      },
      ru: {
        label: "Русский",
        lang: "ru-RU",
        link: "/ru/",
        title: "Документация",
        description: "Документация",
        themeConfig: {
          nav: navRu,
          outline: { label: "На этой странице", level: [1, 6] },
          docFooter: { prev: "Назад", next: "Далее" },
          sidebarMenuLabel: "Меню",
          returnToTopLabel: "Наверх",
          darkModeSwitchLabel: "Тема оформления",
          lightModeSwitchTitle: "Светлая тема",
          darkModeSwitchTitle: "Тёмная тема",
          langMenuLabel: "Язык",
          skipToContentLabel: "Перейти к содержимому",
        },
      },
      es: {
        label: "Español",
        lang: "es-ES",
        link: "/es/",
        title: "Documentación",
        description: "Documentación",
        themeConfig: {
          nav: navEs,
          outline: { label: "En esta página", level: [1, 6] },
          docFooter: { prev: "Anterior", next: "Siguiente" },
          sidebarMenuLabel: "Menú",
          returnToTopLabel: "Volver arriba",
          darkModeSwitchLabel: "Apariencia",
          lightModeSwitchTitle: "Cambiar a tema claro",
          darkModeSwitchTitle: "Cambiar a tema oscuro",
          langMenuLabel: "Idioma",
          skipToContentLabel: "Saltar al contenido",
        },
      },
    },
  }),
);
