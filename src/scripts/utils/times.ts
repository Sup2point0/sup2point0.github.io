import type { int } from "#scripts/types";


export function display_timestamp(seconds: int | null | undefined)
{
	if (seconds == undefined) {
		return `--:--`;
	}

	let s = Math.round(seconds);

	let mins = Math.floor(s / 60);
	let secs = s % 60;

	let ss = secs.toString().padStart(2, "0");

	return `${mins}:${ss}`;
}
