import { APP_PRIMARY_COLOR } from "@/constants/app";
import type { Track } from "@/types/track";
import { derived, writable } from "svelte/store";

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

export const player = derived(track, ({ provider, provider_key }) => {
  if (provider === "Bandcamp") {
    return `https://bandcamp.com/EmbeddedPlayer/track=${provider_key}/size=large/tracklist=false/bgcol=333333/linkcol=${APP_PRIMARY_COLOR}`;
  }
  if (provider === "SoundCloud") {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${provider_key}&show_comments=false&hide_related=true&visual=true`;
  }
  if (provider === "Vimeo") {
    return `https://player.vimeo.com/video/${provider_key}`;
  }
  return `https://www.youtube.com/embed/${provider_key}?rel=0&playsinline=1`;
});
