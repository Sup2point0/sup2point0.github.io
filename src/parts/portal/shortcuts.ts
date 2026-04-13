import { h } from "#scripts/utils";


export interface ShortcutData
{
  key:   string;
  title: string;
  desc?: string;
}


export const Shortcut =
{
  Shortcuts: {
    key: "/",
    title: "Shortcuts",
  },
  Navigate: {
    key:   "n",
    title: "Navigate",
    desc:  `Quickjump to any page on the site`,
  },
  Warp: {
    key:   "w",
    title: "Warp",
    desc:  `Visit a ${h("https://sup2point0.github.io")} site`,
  },
  Music: {
    key:   "m",
    title: "Music",
    desc:  `Play a track of mine`,
  },
  Projects: {
    key:   "p",
    title: "Project",
    desc:  `Visit a project of mine on GitHub`,
  },
  Socials: {
    key:   "s",
    title: "Socials",
    desc:  `Quicklink to one of my socials`,
  },
};
