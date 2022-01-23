const useNodes = () => {
  const createNode = (row: number, col: number): GridNode => {
    const node: GridNode = {
      col,
      row,
      distance: Infinity,
      isStart: false,
      isFinish: false,
      isWall: false,
      isVisited: true,
      previousNode: null,
    };
    return node;
  };

  const setStart = (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[]>>,
    grid: GridNode[]
  ) => {
    const newGrid = grid.map((node) => {
      if (node.col === col && node.row === row) {
        node.isStart = true;
        return node;
      } else {
        return node;
      }
    });
    setGrid(newGrid);
  };

  const setFinish = (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[]>>,
    grid: GridNode[]
  ) => {
    const newGrid = grid.map((node) => {
      if (node.col === col && node.row === row) {
        node.isFinish = true;
        return node;
      } else {
        return node;
      }
    });
    setGrid(newGrid);
  };

  return { createNode, setStart, setFinish };
};

export default useNodes;
