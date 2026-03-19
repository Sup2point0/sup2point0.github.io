import type { TrackData } from "#scripts/types/music";


export interface TuneState
{
  audio:   HTMLAudioElement | null;
  playing: boolean;
  track:   TrackData | null;
}


export const tunes: TuneState = $state({
  audio:   null,
  playing: false,
  track:   null,
});


export function play_tune(track: TrackData)
{
  tunes.playing = true;
  tunes.track = track;
  requestAnimationFrame(() => tunes.audio?.play());
}
