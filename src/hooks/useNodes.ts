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
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>,
    grid: GridNode[][]
  ) => {
    const newGrid = [...grid];
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

  return { createNode, setStart, setFinish };
};

export default useNodes;
