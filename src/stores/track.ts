import { derived, writable } from "svelte/store";
import type { Track } from "~/types/track";

export const initialValue: Track = {
  title: "",
  provider: "",
  provider_key: "",
  image: "",
  slug: "",
  image_aspect_ratio: "1/1",
  embed_aspect_ratio: "1/1",
  path: "",
};

const createTrack = () => {
  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,
    set: (track: Track) => set(track),
    clear: () => set(initialValue),
  };
};

export const track = createTrack();

export const player = derived(track, ($track) => {
  if ($track.provider === "Bandcamp") {
    return `https://bandcamp.com/EmbeddedPlayer/track=${$track.provider_key}/size=large/tracklist=false/bgcol=333333/linkcol=c084fc`;
  }
  if ($track.provider === "SoundCloud") {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${$track.provider_key}&show_comments=false&color=ff5500&hide_related=true&visual=true`;
  }
  if ($track.provider === "Vimeo") {
    return `https://player.vimeo.com/video/${$track.provider_key}`;
  }
  if ($track.provider === "YouTube") {
    return `https://www.youtube.com/embed/${$track.provider_key}?rel=0&playsinline=1`;
  }
});
