import { prep_groups, type Searchable } from "#scripts/search";
import type { Dates, Love, ProperDescription } from "#scripts/types";


export interface PuzzleData extends Searchable
{
  love:  Love
  date?: Dates
  desc?: ProperDescription
}


export const puzzles_list: PuzzleData[] =
[
  {
	shard: "skyscrapers",
	name:  "Skyscrapers",
	love:  3,
  },
];

prep_groups({ puzzles_list });
