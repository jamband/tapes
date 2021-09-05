import type { Track } from "~/types/track";
import { derived, writable } from "svelte/store";

const InitialValue: Track = {
  title: "",
  provider: "",
  provider_key: "",
  image: "",
  slug: "",
  path: "",
  tape: {
    title: "",
  },
};

const createTrack = () => {
  const { subscribe, set } = writable<Track>(InitialValue);

  return {
    subscribe,
    set: (track: Track) => set(track),
    clear: () => set(InitialValue),
  };
};

export const track = createTrack();

export const trackId = derived(track, ($track) => {
  return $track.provider + $track.provider_key;
});

export const player = derived(track, ($track) => {
  if ($track.provider === "Bandcamp") {
    return (
      `https://bandcamp.com/EmbeddedPlayer/track=${$track.provider_key}` +
      `/size=large/tracklist=false/bgcol=333333/linkcol=8b5cf6`
    );
  }
  if ($track.provider === "SoundCloud") {
    return (
      `https://w.soundcloud.com/player` +
      `/?url=https%3A//api.soundcloud.com/tracks/${$track.provider_key}` +
      `&show_comments=false&color=ff5500&hide_related=true&visual=true`
    );
  }
  if ($track.provider === "Vimeo") {
    return `https://player.vimeo.com/video/${$track.provider_key}`;
  }
  if ($track.provider === "YouTube") {
    return `https://www.youtube.com/embed/${$track.provider_key}?rel=0&playsinline=1`;
  }
});
