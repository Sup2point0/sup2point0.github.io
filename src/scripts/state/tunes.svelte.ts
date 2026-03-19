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

export function toggle_pause()
{
  switch (tunes.playing) {
    case true:  tunes.audio?.pause(); tunes.playing = false; break;
    case false: tunes.audio?.play();  tunes.playing = true;  break;
  }
}

export function stop_playing()
{
  tunes.audio!.pause();
  tunes.playing = false;
  tunes.track = null;
}
