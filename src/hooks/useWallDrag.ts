const useWallDrag = (
  setStartWallDrag: React.Dispatch<React.SetStateAction<boolean>>,
  inputState: "start" | "finish" | "wall",
  setWall: (
    row: number,
    col: number,
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>,
    grid: GridNode[][]
  ) => any,
  startWallDrag: boolean
) => {
  const handleMouseDown = (
    row: number,
    col: number,
    grid: GridNode[][],
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>
  ) => {
    if (inputState === "wall") {
      setWall(row, col, setGrid, grid);
      setStartWallDrag(true);
    }
  };

  const handleDrag = (
    row: number,
    col: number,
    grid: GridNode[][],
    setGrid: React.Dispatch<React.SetStateAction<GridNode[][]>>
  ) => {
    if (startWallDrag) {
      setWall(row, col, setGrid, grid);
    }
  };

  const handleMouseUp = () => {
    setStartWallDrag(false);
  };

  return { handleMouseUp, handleMouseDown, handleDrag };
};

export default useWallDrag;
