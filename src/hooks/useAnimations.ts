const useAnimations = () => {
  const visitedNodeAni = (visitedNodes: GridNode[], pathNodes: GridNode[]) => {
    visitedNodes?.forEach((node, i) => {
      const { row, col } = node;
      if (node.isFinish) animateShortestPath(pathNodes);
      setTimeout(() => {
        if (!node.isStart && !node.isFinish && !node.isPath) {
          document
            .getElementById(`node-${col}-${row}`)
            ?.classList.add("visited-node");
        }
      }, 10 * i);
    });
  };

  return { visitedNodeAni };
};

const animateShortestPath = (pathNodes: GridNode[]) => {
  pathNodes.reverse().forEach((node, i) => {
    const { row, col } = node;

    setTimeout(() => {
      if (!node.isStart && !node.isFinish && !node.isPath) {
        document
          .getElementById(`node-${col}-${row}`)
          ?.classList.add("path-node");
      }
    }, 50 * i);
  });
};

export default useAnimations;

// SOE SHIT
