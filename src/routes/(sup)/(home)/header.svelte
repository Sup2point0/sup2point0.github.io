<!-- @component `<ProfileHeader>` -->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import ProfileLinks from "./links.svelte";

import { Adventure } from "#parts/special";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


const DESCRIPTORS = new FrozenWeightedList(
	[20, "artist"],
	[20, "creator"],
	[20, "jack-of-all-knives"],
	[10, "developer"],
	[10, "dreamer"],
	[10, "nerd"],
	[2,  "probably a human"],
	[1,  "watching you"],
);

let descriptors: string[] = $state([]);

onMount(() => {
	descriptors = DESCRIPTORS.sample_values_unique(5).toArray();
})

</script>


<header>
	<section class="sup">
		<div class="portal-container">
			<img id="purple-portal" alt="purple-portal" src="purple-portal.png" />
			<ProfileLinks />
		</div>

		<img id="sup2point0" alt="Sup#2.0" src="sup2point0.png" >
	</section>

	<p transition:slide={{ duration: 1000, easing: expoInOut }}>
		<span class="shown">
			<Adventure tagless={true} routes={[
				[20, `an avid portal with way too much in their neural cortex`],
				[2, `jack of all knives, none of a kind, kind of a none, just having fun`],
			]} />
		</span>

		<span class="hidden">
			{#each descriptors as descriptor}
				{descriptor}<span class="separator"> × </span>
			{/each}
		</span>
	</p>
</header>


<style lang="scss">

header {
	width: max-content;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}

section.sup {
	margin-bottom: -6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}


.portal-container {
	position: relative;

	img#purple-portal {
		width: 400px;
		animation: 69s linear infinite spinny;

		@keyframes spinny {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	}
}

img#sup2point0 {
	width: 600px;
	position: relative;
	top: -5rem;
	transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

	&:hover {
		transform: scale(103%);
	}
}


p {
	position: relative;
	padding: 2rem 0 1rem;
	@include font-fun;
	font-size: 150%;
	text-align: center;

	span {
		transition: #{trans()};
	}
	span.shown {
		transition-delay: 0.1s;
	}
	span.hidden {
		position: absolute;
		top: 2rem;
		left: 50%;
		white-space: nowrap;
		transform: translateX(-50%);
		opacity: 0;
		transition-delay: 0s;
	}

	span.separator {
		padding: 0 0.5em;
		@include font-fun;
		color: $col-text-deut;
		font-size: 80%;

		&:last-child {
			display: none;
		}
	}
}

header:has(img#sup2point0:hover),
p:hover
{
	span.shown {
		opacity: 0;
		transition-delay: 0s;
	}
	span.hidden {
		opacity: 1;
		transition-delay: 0.1s;
	}
}


@include mobile {
	img#purple-portal {
		max-width: 100vw;
	}

	img#sup2point0 {
		max-width: 100vw;
	}
}
	
</style>
