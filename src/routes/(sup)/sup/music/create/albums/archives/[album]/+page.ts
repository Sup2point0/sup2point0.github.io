import { albums_list } from "#sup/music/create/create";
import type { AlbumData } from "#scripts/types";


export function load({ params }): AlbumData
{
  let album = albums_list.find(album => album.shard === params.album);

  return album!;
}
