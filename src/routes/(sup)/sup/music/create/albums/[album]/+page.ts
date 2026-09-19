import { albums_list } from "../..";
import type { AlbumData } from "#scripts/types";


export function load({ params: { album } }): AlbumData
{
	return albums_list.find(each => each.shard === album)!;
}
