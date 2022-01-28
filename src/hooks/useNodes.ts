import dijkstra from "../algorithm/dijkstra";

const useNodes = () => {
  const createNode = (row: number, col: number): GridNode => {
    const node: GridNode = {
      col,
      row,
      distance: Infinity,
      isStart: false,
      isFinish: false,
      isWall: false,
      isVisited: false,
      previousNode: null,
      isPath: false,
    };
    return node;
  };

  const setStart = (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>,
    grid: GridNode[][]
  ) => {
    // console.log(grid);
    const newGrid: GridNode[][] = JSON.parse(
      JSON.stringify(grid),
      function (_, value) {
        return value === null ? Infinity : value;
      }
    );

    newGrid[col].forEach((node) => {
      if (node.row === row) {
        node.isStart = true;
      }
    });
    setGrid(newGrid);
  };

  const setFinish = (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>,
    grid: GridNode[][]
  ) => {
    const newGrid = [...grid];
    newGrid[col].forEach((node) => {
      if (node.row === row) {
        node.isFinish = true;
      }
    });
    setGrid(newGrid);
  };

  const setWall = (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>,
    grid: GridNode[][]
  ) => {
    const newGrid = [...grid];
    newGrid[col].forEach((node) => {
      if (node.row === row) {
        node.isWall = true;
      }
    });
    setGrid(newGrid);
  };

  return { createNode, setStart, setFinish, setWall };
};

export default useNodes;
