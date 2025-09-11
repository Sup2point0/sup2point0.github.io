import { albums_list } from "#src/routes/(sup)/sup/music/music";
import type { AlbumData } from "#scripts/types";


export function load({ params }): AlbumData
{
  let album = albums_list.find(album => album.shard === params.album);

  return album!;
}
