declare interface GridNode {
  row: number;
  col: number;
  isVisited: boolean;
  distance: number;
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  previousNode: GridNode | null | number;
  isPath: boolean;
}
