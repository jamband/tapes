import { writable } from "svelte/store";
import type { Tape } from "../types/tape";

type State = Pick<Tape, "title">;

export const initialValue: State = {
  title: "",
};

const createTape = () => {
  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,
    set: (tape: State) => set(tape),
    clear: () => set(initialValue),
  };
};

export const tape = createTape();
