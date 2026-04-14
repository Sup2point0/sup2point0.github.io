import type { TrackData } from "#scripts/types/music/create";


export interface TuneState
{
  audio:   HTMLAudioElement | null;
  playing: boolean;
  track:   TrackData | null;

  play: (track: TrackData) => void;
  toggle_pause: () => void;
}


export const tunes: TuneState = $state({
  audio:   null,
  playing: false,
  track:   null,

  play(this: TuneState, track: TrackData)
  {
    if (track.audio) {
      this.playing = true;
      this.track = track;
      requestAnimationFrame(() => tunes.audio?.play());
    }
    else {
      window.alert("no audio file for this track =(");
    }
  },

  toggle_pause(this: TuneState)
  {
    switch (this.playing) {
      case true:  this.audio?.pause(); this.playing = false; break;
      case false: this.audio?.play();  this.playing = true;  break;
    }
  },
});


export function play_tune(track: TrackData)
{
  if (track.audio) {
    tunes.playing = true;
    tunes.track = track;
    requestAnimationFrame(() => tunes.audio?.play());
  } else {
    window.alert("no audio file for this track =(");
  }
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
