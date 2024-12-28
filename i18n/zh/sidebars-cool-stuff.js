/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    coolStuffSidebar: [
      {
        type: "doc",
        id: "intro",
        label: "簡介",
      },
      {
        type: "category",
        label: "荒野亂鬥",
        items: [
          {
            type: "doc",
            id: "brawl-stars/intro",
            label: "簡介",
          },
          {
            type: "doc",
            id: "brawl-stars/mastery",
            label: "專精系統",
          },
        ],
      },
      {
        type: "category",
        label: "Taipei Metro",
        items: [
          {
            type: "doc",
            id: "taipei-metro/intro",
            label: "簡介",
          },
          {
            type: "category",
            label: "中運量",
            items: [
              {
                type: "doc",
                id: "taipei-metro/medium/bt370",
                label: "INNOVIA APM 256 型電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/medium/emu101",
                label: "環狀線電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/medium/val256",
                label: "VAL256 型電聯車",
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
                label: "C301 型電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/heavy/c321",
                label: "C321 型電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/heavy/c341",
                label: "C341 型電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/heavy/c371",
                label: "C371 型電聯車",
              },
              {
                type: "doc",
                id: "taipei-metro/heavy/c381",
                label: "C381 型電聯車",
              },
            ],
          },
        ],
      },
    ],
  };
  
  module.exports = sidebars;
  