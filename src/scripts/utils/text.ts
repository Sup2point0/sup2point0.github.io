/** Italicise `text` with `<em>`. */
export function i(text: string | TemplateStringsArray): string
{
	return `<em>${text}</em>`;
}

/** Bold `text` with `<strong>`. */
export function b(text: string | TemplateStringsArray): string
{
	return `<strong>${text}</strong>`;
}

/** Highlight `text` with `<span class="highlight">`. */
export function h(text: string | TemplateStringsArray): string
{
	return `<span class="highlight">${text}</span>`;
}

/** Add a hyperlink to `text`. */
export function a(text: string, href: string = "", intern: boolean = false): string
{
	return href ? `<a class="link" ${intern ? '' : 'target="_blank"'} href="${href}">${text}</a>` : text;
}
