import sample from "@stdlib/random-sample";


/** Return a uniformly randomly selected item from `options`. */
export function pick_random<Item>(options: Item[]): Item
{
	return options[Math.floor(Math.random() * options.length)];
}


/** Return a shuffled copy of `source`. */
export function shuffle<Item>(source: Item[]): Item[]
{
	return sample(source, { replace: false });
}


interface Collection<Item>
{
	length: number;
	at(idx: number): Item | undefined;
}

// FIXME this isn't quite THAT uniform... =/

/** Deterministically pick a random item from `source`, based on the current date, with uniform probability of picking each item. */
export async function pick_daily<Item>(
	source: Collection<Item>
): Promise<Item | undefined>
{
	let t = new Date();

	let date = `${t.getDay() * 69}${t.getDate() * 420}${t.getMonth() * 37}${t.getFullYear() * 1679}`;
	let data = new TextEncoder().encode(date);

	/* Not doing any cryptography here, just need a quick and dirty stable hash for randomisation! */
	let hash = await window.crypto.subtle.digest("SHA-1", data);

	let view = new DataView(hash)
	let int = view.getUint32(0);
	let idx = int % source.length;

	return source.at(idx);
}
