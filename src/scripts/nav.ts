import { persisted } from "svelte-persisted-store";


class VisitedPages
{
  info     = false;
  loves    = false;
  music    = false;
  projects = false;
  dev      = false;
}

class NavData
{
  visited: VisitedPages = new VisitedPages();
}


export const nav = persisted<NavData>("sup.nav", new NavData());
