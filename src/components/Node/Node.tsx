import React from "react";

interface Props {
  isStart?: boolean;
  isFinish?: boolean;
  isWall?: boolean;
  isVisited?: boolean;
  row: number;
  col: number;
  isPath?: boolean;
}

const Node: React.FC<Props> = ({
  isFinish,
  isStart,
  isWall,
  isVisited,
  isPath,
  row,
  col,
}) => {
  return (
    <div
      id={`node-${col}-${row}`}
      className={`node-typ 
      ${isVisited && !isStart && !isFinish ? "visited-node" : ""}
      ${isStart ? "start-node" : ""} 
      ${isFinish ? "end-node" : ""}
      ${isWall ? "wall-node" : ""}
      ${isPath && !isFinish ? "path-node" : ""}
    }
      `}
    ></div>
  );
};

export default Node;
