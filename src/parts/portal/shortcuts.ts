import { h } from "#scripts/utils";


export interface ShortcutData
{
  key:   string;
  title: string;
  desc:  string;
}


export const shortcuts_data = {
  NAVIGATE: {
    key:   "n",
    title: "Navigate",
    desc:  `Quickjump to any page on the site`,
  },
  VIBES: {
    key:   "v",
    title: "Vibes",
    desc:  `Play a track of mine`,
  },
  WARP: {
    key:   "w",
    title: "Warp",
    desc:  `Visit a ${h("https://sup2point0.github.io")} site`,
  }
};

export const shortcuts_list = Object.values(shortcuts_data);
