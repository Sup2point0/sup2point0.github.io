<script>

import { onMount } from "svelte";
import { goto } from "$app/navigation";

onMount(async () => {
	await goto("/sup/music/create/albums", { replaceState: true });
});

</script>
