const valid_chars = new Set([
	'-',
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]);


export function shardify(text?: string): string | undefined
{
	return (
		text
		?.toLowerCase()
		.split(/[ -_\/,.!?;:+=]+/)
		.join("-")
		.split("")
		.filter(char => valid_chars.has(char))
		.join("")
	);
}
