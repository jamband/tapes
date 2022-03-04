export const aspectRatio = (value: `${number}/${number}`) => {
  if (value === "16/9") {
    return "aspect-[16/9]";
  }

  if (value === "4/3") {
    return "aspect-[4/3]";
  }

  return "aspect-[1/1]";
};
