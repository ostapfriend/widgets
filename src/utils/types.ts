type MosaicTileT =
  | string
  | {
      direction: "row" | "column";
      first: MosaicTileT;
      second: MosaicTileT;
      splitPercentage?: number;
    };

export type { MosaicTileT };
