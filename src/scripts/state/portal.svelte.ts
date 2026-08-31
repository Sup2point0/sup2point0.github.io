import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { PortalSearchFilter } from "#parts/portal/filters.portal.svelte.ts";


interface PortalState
{
	/** Is the portal overlay open? */
	open: boolean;

	/** Is the portal overlay ready? */
	live: boolean;

	/** Search filters. */
	filters: PortalSearchFilter;

	/** The input bar of the this. */
	input: HTMLInputElement | null;

	/** Placeholder text of the input bar. */
	placeholder: string;

	/** Previously focused element to re-focus when portal is closed. */
	previously_focused: HTMLElement | null;

	/** Return an event callback that activates or deactivates the this. */
	set_state: (state: boolean) => ((e: Event) => void)
}


export const portal: PortalState = $state(
{
	open:        false,
	live:        false,
	filters:     new PortalSearchFilter(),
	input:       null,
	placeholder: "",
	previously_focused: null,

	set_state(state: boolean)
	{
		return e => {
			e.preventDefault();
			this.open = state;
			this.filters.focused_idx = 0;

			if (this.open) {
				this.placeholder = PLACEHOLDERS.sample_value()!;

				if (this.filters.query === "" && Math.random() > 0.69) {
					this.filters.query = "/";
				}
			}

			requestAnimationFrame(() => {
				this.live = state;

				if (this.open) {
					/* @ts-ignore */
					this.previously_focused = document.activeElement;
					this.input?.focus();
				} else {
					this.previously_focused?.focus();
				}
			});
		}
	}
});


const PLACEHOLDERS = new FrozenWeightedList(
	[20, `explore the site!`],
	[20, `quicknav to any page!`],
	[20, `type / to use a shortcut!`],
	[1, `never gonna give you up~`],
);
