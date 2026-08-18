export interface VideoData
{
  id:   string;
  href: string;
}


export async function load()
{
  console.log("fetching YouTube videos...");

  let response = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCymDd4idgL1slmKjA3L0NHQ");

  console.log("received response!")

  let xml = await response.text();
  let chunks = xml.split("<entry>", 4);

  console.log(`received ${chunks.length} chunks!`);
  console.log(chunks);

  let videos: string[] = [];

  for (let chunk of chunks) {
    let id = chunk.match(/(?<=<yt:videoId>).*?(?=<\/yt:videoId>)/)?.[0];
    if (id == undefined) continue;

    videos.push(id);
  }

  return { videos };
}
