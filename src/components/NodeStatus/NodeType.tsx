import React from "react";

interface Props {
  type: "start" | "finish" | "wall";
}

const NodeType: React.FC<Props> = ({ type }) => {
  return (
    <div className="user-node-type">
      {type}
      <div className={` user-node-type--main user-node-type--${type}`}>
        &nbsp;
      </div>
    </div>
  );
};

export default NodeType;
