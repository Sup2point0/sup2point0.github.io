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

      requestAnimationFrame(() => {
        tunes.audio?.play();

        if (!("mediaSession" in window.navigator)) return;

        navigator.mediaSession.metadata = new MediaMetadata({
          title:  track.name,
          artist: "Sup#2.0",
          album:  track.album.name,
          artwork: [
            { src: `/covers/music/create/${track.cover ?? track.album.cover ?? "placeholder.png"}` }
          ],
        });
        navigator.mediaSession.playbackState = "playing";
      });
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

    if ('mediaSession' in window.navigator) {
      navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
    }
  },
});


if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", () => tunes.toggle_pause());
  navigator.mediaSession.setActionHandler("pause", () => tunes.toggle_pause());
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    if (tunes.audio) tunes.audio.currentTime = 0;
  });
  navigator.mediaSession.setActionHandler("seekto", details => {
    if (tunes.audio) tunes.audio.currentTime = details.seekTime ?? 0;
  });
}


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
