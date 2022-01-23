import React, { useEffect, useState } from "react";
import Node from "../Node/Node";
import useNodes from "../../hooks/useNodes";

const ROWS = 11;
const COLS = 22;
type InputState = "start" | "finish" | "wall";

const Table: React.FC = () => {
  const [grid, setGrid] = useState<GridNode[]>([]);
  const [inputState, setInpuState] = useState<InputState>("start");

  const { createNode, setStart, setFinish } = useNodes();

  useEffect(() => {
    const nodes: GridNode[] = [];

    for (let i = 0; i <= ROWS; i++) {
      for (let j = 0; j <= COLS; j++) {
        nodes.push(createNode(i, j));
      }
    }
    setGrid(nodes);
  }, []);

  const onNodeClick = (row: number, col: number) => {
    if (inputState === "start") {
      setStart(row, col, setGrid, grid);
      setInpuState("finish");
    } else if (inputState === "finish") {
      setFinish(row, col, setGrid, grid);
      setInpuState("wall");
    }
  };

  return (
    <div className="table">
      <div className="table-container">
        {grid.map((node, i) => (
          <div
            key={i}
            className="table-node"
            onClick={() => onNodeClick(node.row, node.col)}
          >
            <Node
              isStart={node.isStart}
              isWall={node.isWall}
              isFinish={node.isFinish}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
