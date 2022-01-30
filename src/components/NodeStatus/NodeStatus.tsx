import React from "react";
import NodeType from "./NodeType";

interface Props {
  type: "start" | "finish" | "wall";
}

const NodeStatus: React.FC<Props> = ({ type }) => {
  return (
    <div className="node-status">
      <section className="node-status--text">
        <span>Current Node To Place : </span>
        <NodeType type={type} />
      </section>
    </div>
  );
};

export default NodeStatus;
