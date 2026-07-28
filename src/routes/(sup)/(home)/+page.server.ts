export interface VideoData
{
  id:   string;
  href: string;
}


export async function load()
{
  console.log("fetching YouTube videos");

  let response = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCymDd4idgL1slmKjA3L0NHQ");

  console.log("received response")

  let xml = await response.text();
  let chunks = xml.split("<entry>", 4);

  let videos: VideoData[] = [];

  for (let chunk of chunks) {
    let id = chunk.match(/(?<=<yt:videoId>).*?(?=<\/yt:videoId>)/)?.[0];
    if (id == undefined) continue;

    let href = chunk.match(/https:\/\/www\.youtube\.com\/watch\?v=.+?(?=")/)?.[0];
    if (href == undefined) continue;

    videos.push({ id, href });
  }

  return { videos };
}
