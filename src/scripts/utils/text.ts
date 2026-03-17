/** Italicise text. */
export function i(text: string): string
{
  return `<em>${text}</em>`;
}

/** Highlight text. */
export function h(text: string): string
{
  return `<span class="highlight">${text}</span>`;
}

/** Add a hyperlink to text. */
export function a(text: string, href: string = "", intern: boolean = false): string
{
  return href ? `<a class="link" ${intern ? '' : 'target="_blank"'} href="${href}">${text}</a>` : text;
}
