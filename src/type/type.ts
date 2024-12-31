export const IDs = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export type CellId = (typeof IDs)[number];
export type GridId = (typeof IDs)[number];
