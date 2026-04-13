import { PortalSearchFilter } from "#parts/portal/filters.portal.svelte";


export const portal: {
  /** Is the portal overlay open? */
  open: boolean;

  /** Is the portal overlay ready? */
  live: boolean;

  /** Search filters. */
  filters: PortalSearchFilter;

  /** The input bar of the portal. */
  input: HTMLInputElement | null;
} = $state(
{
  open: false,
  live: false,
  filters: new PortalSearchFilter(),
  input: null
});
