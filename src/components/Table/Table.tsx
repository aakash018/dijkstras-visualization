import React, { useEffect, useState } from "react";
import Node from "../Node/Node";
import useNodes from "../../hooks/useNodes";
import { COLS, ROWS } from "../../global/grid";

type InputState = "start" | "finish" | "wall";

const Table: React.FC = () => {
  const [grid, setGrid] = useState<GridNode[][]>([[]]);
  const [inputState, setInpuState] = useState<InputState>("start");

  const { createNode, setStart, setFinish } = useNodes();

  useEffect(() => {
    const allNodes = [];
    for (let i = 0; i <= ROWS; i++) {
      const nodesRow: GridNode[] = [];
      for (let j = 0; j <= COLS; j++) {
        nodesRow.push(createNode(j, i));
      }
      allNodes.push(nodesRow);
    }
    setGrid(allNodes);
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
        {grid.map((row, i) => (
          <div className="table-row" key={i}>
            {row.map((node, i) => (
              <div
                className="table-node"
                onClick={() => onNodeClick(node.row, node.col)}
                key={i}
              >
                <Node
                  isStart={node.isStart}
                  isFinish={node.isFinish}
                  isWall={node.isWall}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
