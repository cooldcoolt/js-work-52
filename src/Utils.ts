

export let getRnumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const FLESH_ROYAL = ["A", "K",  "Q", "J", "10"];
export const STRAILT_FLASH = ["9", "8", "7", "6", "5"];
export const STAIGHT = ["5", "4", "3", "2", "T"]