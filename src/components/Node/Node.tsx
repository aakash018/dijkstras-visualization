import React from "react";

interface Props {
  isStart?: boolean;
  isFinish?: boolean;
  isWall?: boolean;
}

const Node: React.FC<Props> = ({ isFinish, isStart, isWall }) => {
  return (
    <div
      className={`node-typ ${isStart ? "start-node" : ""} ${
        isFinish ? "end-node" : ""
      } ${isWall ? "wall-node" : ""} `}
    ></div>
  );
};

export default Node;
