import type { Tape } from "@/types/tape";

const createTape = () => {
  const initialValue: Pick<Tape, "title"> = {
    title: "",
  };

  let value = $state(initialValue);

  return {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
    },
    clear: () => {
      return initialValue;
    },
  };
};

export const tape = createTape();
