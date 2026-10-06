<!-- @component `<ChannelBlock>` -->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import { type PuzzleData } from "#sup/loves/puzzles";


interface Props {
	puzzle: PuzzleData;
}

let { puzzle }: Props = $props();

</script>


<button class="block-puzzle"
	id={puzzle.shard}
	{@attach anim}
>
	<div class="content">
		<div class="info">
			<div class="upper">
				<h3> {puzzle.name} </h3>

				{#if puzzle.love}
					<p class="love">
						{#each { length: puzzle.love } as _}
							❤️‍🔥
						{/each}
					</p>
				{/if}
			</div>

			<div class="inner">
				{#if puzzle.date}
					<p class="date">
						{display_date(puzzle.date)}
					</p>

					<span class="separator"> × </span>
				{/if}
			</div>
		</div>
	</div>
</button>


<style lang="scss">

@use 'sass:color';


.block-puzzle {
	flex-grow: 1;
	max-width: 32rem;
	padding: 1rem 1.5rem;
	background: none;
	border: none;
	transition: $trans;
	@include shear-card($interactive: true);
	@include anim-block;

	&:hover {
		cursor: auto;
		opacity: 1 !important;

		.inner p {
			color: $col-text;
		}
	}
}

.content {
	display: flex;
	flex-flow: row nowrap;
	justify-content: start;
	align-items: center;
	gap: 2rem;
	
	transform: scale(90%);
	opacity: 0;
	transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

	/* NOTE: Need `:global` to avoid CSS being purged!! */
	:global(.block-puzzle.intersected) & {
		transform: none;
		opacity: 1;
	}
}

.info {
	flex-grow: 1;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: start;
}


.upper {
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	gap: 0.5rem;

	h3 {
		@include font-ui;
		font-size: 200%;
		font-weight: normal;
		color: $col-text;
		text-align: start;
	}

	p.love {
		min-width: max-content;
		font-size: 125%;
	}
}

.inner {
	flex-grow: 1;
	width: 100%;
	padding-top: 0.25rem;
	padding-bottom: 1rem;
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;
	@include separator;

	p {
		@include font-tech;
		font-size: 100%;
		color: $col-text-deut;
		transition: $trans;
	}
}

</style>
