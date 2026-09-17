/** Italicise `text` with `<em>`. */
export function i(text: string | TemplateStringsArray): string
{
	let raw = Array.isArray(text) ? text.join(" ") : text;
	return `<em>${raw}</em>`;
}

/** Bold `text` with `<strong>`. */
export function b(text: string | TemplateStringsArray): string
{
	let raw = Array.isArray(text) ? text.join(" ") : text;
	return `<strong>${raw}</strong>`;
}

/** Highlight `text` with `<span class="highlight">`. */
export function h(text: string | TemplateStringsArray): string
{
	let raw = Array.isArray(text) ? text.join(" ") : text;
	return `<span class="highlight">${raw}</span>`;
}

/** Add a hyperlink to `text`. */
export function a(text: string, href: string = "", intern: boolean = false): string
{
	return href ? `<a class="link" ${intern ? '' : 'target="_blank"'} href="${href}">${text}</a>` : text;
}
