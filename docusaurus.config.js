// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raymond's Site",
  tagline: "Just someone who doesn't know how to code properly.",
  url: "https://raymond.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "raymond-1227", // Usually your GitHub org/user name.
  projectName: "docusaurus-site", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hant"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "繁體中文",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cool-stuff",
        path: "cool-stuff",
        routeBasePath: "cool-stuff",
        sidebarPath: ({ locale }) =>
          locale === "zh"
            ? require.resolve("./i18n/zh/sidebars-cool-stuff.js")
            : require.resolve("./sidebars-cool-stuff.js"),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Raymond's Talking Place",
        logo: {
          alt: "Raymond's Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "About",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/cool-stuff/intro",
            docId: "cool-stuff",
            position: "left",
            label: "Cool Stuff",
          },
          {
            href: "https://rhsu.cc",
            label: "Main Website",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Category",
            items: [
              {
                label: "About",
                to: "/docs/about",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Featured Projects",
            items: [
              {
                label: "Firefox Add-on - PTE",
                href: "https://addons.mozilla.org/firefox/addon/page-text-editor/",
              },
              {
                label: "OS Concept - #TeamCompound",
                href: "https://teamcompound.github.io/",
              },
              {
                label: "Discord Bot - hackerman14",
                href: "https://hackerman14.github.io/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Main Website",
                href: "https://rhsu.cc/",
              },
              {
                label: "Old Website",
                href: "https://old.rhsu.cc/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raymond Hsu | Built with Docusaurus, not powered by WordPress.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
