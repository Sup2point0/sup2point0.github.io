import type { url } from "#scripts/types";


export interface VideoData
{
	title: string
	href:  string
	thumb: url
}


export async function load()
{
	try {
		console.log("fetching YouTube videos...");

		let response = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCymDd4idgL1slmKjA3L0NHQ");

		console.log("received response!")

		let xml = await response.text();
		let chunks = xml.split("<entry>", 4);

		console.log(`received ${chunks.length} chunks!`);

		let videos: VideoData[] = [];

		for (let [i, chunk] of chunks.entries()) {
			console.log(`chunk #${i} =`, chunk);
			let title = chunk.match(/(?:<title>)(.*?)(?:<\/title>)/)?.[1];
			let href = chunk.match(/(?:<link rel="alternate" href=")(.*?)(?:")/)?.[1];
			let thumb = chunk.match(/(?:<media:thumbnail url=")(.*?)(?:")/)?.[1];

			let video_data = { title, href, thumb };

			if (title == undefined || href == undefined || thumb == undefined) {
				console.error(`failed to resolve chunk: ${video_data}`);
				continue;
			}

			// @ts-expect-error: non-undefined from check
			videos.push(video_data);
		}

		return { videos };
	}
	catch {
		console.error(`no response received!`);
		return {};
	}
}
