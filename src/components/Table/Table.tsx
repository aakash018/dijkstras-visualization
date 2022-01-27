import React, { useEffect, useRef, useState } from "react";
import Node from "../Node/Node";
import useNodes from "../../hooks/useNodes";
import { COLS, ROWS } from "../../global/grid";
import dijkstra, { findShortestPath } from "../../algorithm/dijkstra";

type InputState = "start" | "finish" | "wall";

interface UserNodeInner {
  row: number;
  col: number;
}

interface UserNodeOuter {
  startNode: UserNodeInner;
  endNode: UserNodeInner;
}

const Table: React.FC = () => {
  const [grid, setGrid] = useState<GridNode[][]>([[]]);
  const [inputState, setInpuState] = useState<InputState>("start");
  const [boardReset, setBoard] = useState(false);

  const startAndEndNode = useRef<UserNodeOuter>({
    startNode: { row: 0, col: 0 },
    endNode: { row: 0, col: 0 },
  }).current;

  const { createNode, setStart, setFinish } = useNodes();

  useEffect(() => {
    const allNodes = [];
    for (let i = 0; i <= COLS - 1; i++) {
      const nodesRow: GridNode[] = [];
      for (let j = 0; j <= ROWS - 1; j++) {
        nodesRow.push(createNode(j, i));
      }
      allNodes.push(nodesRow);
    }
    setGrid(allNodes);
  }, [boardReset]);

  const onNodeClick = (row: number, col: number) => {
    if (inputState === "start") {
      setStart(row, col, setGrid, grid);
      startAndEndNode.startNode = { row, col };
      setInpuState("finish");
    } else if (inputState === "finish") {
      setFinish(row, col, setGrid, grid);
      startAndEndNode.endNode = { row, col };
      setInpuState("wall");
    }
  };

  const handleBordReset = () => {
    setBoard((prev) => !prev);
    setInpuState("start");
  };

  const onDijkstraRun = () => {
    const { startNode: start, endNode: end } = startAndEndNode;

    const newGrid: GridNode[][] = JSON.parse(
      JSON.stringify(grid),
      function (_, value) {
        return value === null ? Infinity : value;
      }
    );

    const visitedNodes = dijkstra(
      newGrid[start.col][start.row],
      newGrid[end.col][end.row],
      newGrid
    );

    if (visitedNodes?.length === 0) return;
    // console.log(visitedNodes);

    const path = findShortestPath(newGrid[end.col][end.row]);

    path.forEach((node) => {
      node.isPath = true;
    });

    setGrid(newGrid);
  };

  return (
    <>
      <button disabled={!(inputState === "wall")} onClick={onDijkstraRun}>
        View Dijkstra
      </button>
      <button onClick={handleBordReset} style={{ marginLeft: "20px" }}>
        reset
      </button>
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
                    isVisited={node.isVisited}
                    isPath={node.isPath}
                    row={node.row}
                    col={node.col}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
