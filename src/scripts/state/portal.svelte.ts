import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { PortalSearchFilter } from "#parts/special/portal/filters.portal.svelte.ts";


const PLACEHOLDERS = new FrozenWeightedList(
	[20, `explore the site!`],
	[20, `quicknav to any page!`],
	[20, `type / to use a shortcut!`],
	[1,  `never gonna give you up~`],
);


export class PortalState
{
	/** Is the portal overlay open? */
	open = $state(false);

	/** Is the portal overlay ready? */
	live = $state(false);

	/** Search filters. */
	filters: PortalSearchFilter = new PortalSearchFilter();

	/** The input bar of the this. */
	input: HTMLInputElement | null = null

	/** Placeholder text of the input bar. */
	placeholder = ""

	/** Previously focused element to re-focus when portal is closed. */
	previously_focused: HTMLElement | null = null

	/** Return an event callback that activates or deactivates the this. */
	set_state(state: boolean): ((e: Event) => void)
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
}

export const portal = new PortalState();
