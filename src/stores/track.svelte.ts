import type { Track } from "@/types/track";

export const initialValue: Track = {
  title: "",
  provider: "",
  provider_key: "",
  image: "about:blank",
  slug: "",
  image_aspect_ratio: "1/1",
  embed_aspect_ratio: "1/1",
  path: "",
};

const createTrack = () => {
  let value = $state(initialValue);

  return {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
    },
    clear: () => {
      value = initialValue;
    },
  };
};

export const track = createTrack();
