import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { PortalSearchFilter } from "#parts/portal/filters.portal.svelte.ts";


export const portal: {
  /** Is the portal overlay open? */
  open: boolean;

  /** Is the portal overlay ready? */
  live: boolean;

  /** Search filters. */
  filters: PortalSearchFilter;

  /** The input bar of the portal. */
  input: HTMLInputElement | null;

  /** Placeholder text of the input bar. */
  placeholder: string;

  /** Previously focused element to re-focus when portal is closed. */
  previously_focused: HTMLElement | null;
} = $state(
{
  open:        false,
  live:        false,
  filters:     new PortalSearchFilter(),
  input:       null,
  placeholder: "",
  previously_focused: null,
});


export function set_portal_state(state: boolean): (e: Event) => void
{
  return e => {
    e.preventDefault();
    portal.open = state;
    portal.filters.focused_idx = 0;

    if (portal.open) {
      portal.placeholder = PLACEHOLDERS.sample_value()!;

      if (portal.filters.query === "" && Math.random() > 0.69) {
        portal.filters.query = "/";
      }
    }

    requestAnimationFrame(() => {
      portal.live = state;

      if (portal.open) {
        /* @ts-ignore */
        portal.previously_focused = document.activeElement;
        portal.input?.focus();
      } else {
        portal.previously_focused?.focus();
      }
    });
  }
}


const PLACEHOLDERS = new FrozenWeightedList(
  [20, `explore the site!`],
  [20, `quicknav to any page!`],
  [20, `type / to use a shortcut!`],
  [1, `never gonna give you up~`],
);
