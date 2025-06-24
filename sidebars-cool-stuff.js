/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  coolStuffSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Brawl Stars",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "brawl-stars/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "brawl-stars/mastery",
          label: "Mastery",
        },
      ],
    },
    {
      type: "category",
      label: "Taipei Metro",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "taipei-metro/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "Medium Capacity",
          items: [
            {
              type: "doc",
              id: "taipei-metro/medium/bt370",
              label: "INNOVIA APM 256",
            },
            {
              type: "doc",
              id: "taipei-metro/medium/emu101",
              label: "Circular Line EMU",
            },
            {
              type: "doc",
              id: "taipei-metro/medium/val256",
              label: "VAL256",
            },
          ],
        },
        {
          type: "category",
          label: "Heavy Capacity",
          items: [
            {
              type: "doc",
              id: "taipei-metro/heavy/c301",
              label: "Taipei Metro C301",
            },
            {
              type: "doc",
              id: "taipei-metro/heavy/c321",
              label: "Taipei Metro C321",
            },
            {
              type: "doc",
              id: "taipei-metro/heavy/c341",
              label: "Taipei Metro C341",
            },
            {
              type: "doc",
              id: "taipei-metro/heavy/c371",
              label: "Taipei Metro C371",
            },
            {
              type: "doc",
              id: "taipei-metro/heavy/c381",
              label: "Taipei Metro C381",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fastest Elevators",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "elevators/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "elevators/guangzhou-ctf-finance-centre",
          label: "Guangzhou CTF Finance Centre",
        },
        {
          type: "doc",
          id: "elevators/shanghai-tower",
          label: "Shanghai Tower",
        },
        {
          type: "doc",
          id: "elevators/taipei-101",
          label: "Taipei 101",
        },
        {
          type: "doc",
          id: "elevators/yokohama-landmark-tower",
          label: "Yokohama Landmark Tower",
        },
      ],
    },
  ],
};

module.exports = sidebars;
