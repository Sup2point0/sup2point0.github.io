import type { TrackData } from "#scripts/types/music/create";
import type { int } from "#scripts/types";


export class TuneState
{
  audio:   HTMLAudioElement | null = $state(null);
  track:   TrackData        | null = $state(null);

  playing:   boolean       = $state(false);
  duration:  number | null = $state(null);
  timestamp: number | null = $state(null);

  sync_interval: int = 0;


  /**
   * Play the given track.
   */
  play_track(track: TrackData)
  {
    if (!track.audio) {
      window.alert("no audio file for this track =(");
      return;
    }

    this.playing = true;
    this.track = track;

    requestAnimationFrame(async () => {
      await tunes.audio?.play();
      this.start_syncing_timestamp();

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

  pause()
  {
    this.audio?.pause();
    this.playing = false;
  }

  async unpause()
  {
    await this.audio?.play();
    this.playing = true;
  }

  async toggle_pause()
  {
    if (this.playing) {
      this.pause();
    } else {
      this.unpause();
    }

    if ('mediaSession' in window.navigator) {
      navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
    }
  }

  seek(timestamp: number)
  {
    if (this.duration == null) return;

    this.timestamp = timestamp;

    if (this.timestamp < 0) {
      this.timestamp = 0;
    }
    else if (this.timestamp >= this.duration) {
      this.timestamp = this.duration - 0.01;
    }
    
    tunes.sync_playhead();
  }
  
  stop_playing()
  {
    tunes.audio   = null;
    tunes.track   = null;
    tunes.playing = false;
    this.stop_syncing_timestamp();
  }


  start_syncing_timestamp()
  {
    this.sync_interval = setInterval(() => this.sync_timestamp(), 200);
  }

  stop_syncing_timestamp()
  {
    clearInterval(this.sync_interval);
  }

  /**
   * Sync the displayed duration with the raw audio element.
   */
  sync_duration() {
    this.duration = this.audio?.duration ?? null;
  }

  /**
   * Sync the displayed timestamp with the raw audio element.
   */
  sync_timestamp() {
    this.timestamp = this.audio?.currentTime ?? null;
  }

  /**
   * Force sync the raw audio element with the displayed timestamp.
   */
  sync_playhead()
  {
    if (this.audio == null) return;
    if (this.timestamp == null) return;

    this.audio.currentTime = this.timestamp;
  }
}

export const tunes = new TuneState();


if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", () => tunes.toggle_pause());
  navigator.mediaSession.setActionHandler("pause", () => tunes.toggle_pause());
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    if (tunes.audio) tunes.audio.currentTime = 0;
  });
  navigator.mediaSession.setActionHandler("seekto", details => {
    if (tunes.audio && details.seekTime !== undefined) tunes.audio.currentTime = details.seekTime;
  });
}
