export const chunk = (list: any[], size = 10) =>
  Array.from({ length: Math.ceil(list.length / size) }, (v, i) => list.slice(i * size, i * size + size));

export const ucFirst = (text: string) => text[0].toUpperCase() + text.slice(1);
