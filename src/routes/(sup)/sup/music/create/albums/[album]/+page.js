import { albums_list } from "#src/routes/(sup)/sup/music/music";


export function load({ params })
{
  let album = albums_list.find(album => album.shard === params.album);

  return album;
}
