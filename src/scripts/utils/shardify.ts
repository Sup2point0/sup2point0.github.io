const valid_chars = new Set([
  "-",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
