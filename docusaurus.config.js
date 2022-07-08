// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raymond's Site",
  tagline: "Just someone who doesn't know how to code properly.",
  url: "https://raymond-2006.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "raymond-2006", // Usually your GitHub org/user name.
  projectName: "raymond-2006.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

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
            href: "https://raymond-1227.github.io",
            label: "Main Website",
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
                href: "https://raymond-1227.github.io/",
              },
              {
                label: "Old Website",
                href: "https://raymond-1227.gitlab.io/",
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
