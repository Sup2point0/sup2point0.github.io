import type { Style } from "#scripts/types";


export function construct_styles(style: Style): string
{
	return (
		typeof style === "string"
		? style
		: Object.entries(style).map(([s, v]) => `${s}: ${v}`).join("; ")
	);
}
