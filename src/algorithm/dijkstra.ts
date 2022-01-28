import { COLS, ROWS } from "../global/grid";

const dijkstra = (
  startNode: GridNode,
  finishNode: GridNode,
  grid: GridNode[][]
) => {
  // Start node have distance 0 and other have infinity
  startNode.distance = 0;

  const visitedNodes: GridNode[] = [];

  //GETTING ALL UNVISITED NODES
  const unvisitedNodes = getUnvisitedNodes(grid);

  while (unvisitedNodes.length) {
    //Nodes sorting so that once with legit distance i.e not Infinity can be used
    sortNodesByDistance(unvisitedNodes);

    // The first element will be taken as current node, and as we have already sorted it will always have finite distance
    const currentNode = unvisitedNodes.shift() as GridNode;

    if (currentNode?.distance === Infinity) return visitedNodes;

    if (currentNode.isWall) continue;

    currentNode!.isVisited = true;
    visitedNodes.push(currentNode);
    if (
      currentNode.row === finishNode.row &&
      currentNode.col === finishNode.col
    )
      return visitedNodes;

    updateUnvisitedNeighbours(currentNode, grid);
  }
};

const sortNodesByDistance = (nodes: GridNode[]) => {
  return nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const getUnvisitedNodes = (grid: GridNode[][]) => {
  const nodes: GridNode[] = [];

  grid.forEach((rows) => {
    rows.forEach((node) => {
      nodes.push(node);
    });
  });

  return nodes;
};
const updateUnvisitedNeighbours = (node: GridNode, grid: GridNode[][]) => {
  const unvisitedNodes = getUnvisitedNeighbours(node, grid);

  for (let neighbour of unvisitedNodes) {
    neighbour.distance = node.distance + 1;
    neighbour.previousNode = node;
  }
};

const getUnvisitedNeighbours = (node: GridNode, grid: GridNode[][]) => {
  const neighbours: GridNode[] = [];

  const { row, col } = node;
  if (col > 0) neighbours.push(grid[col - 1][row]);
  if (col < COLS - 1) neighbours.push(grid[col + 1][row]);
  if (row > 0) neighbours.push(grid[col][row - 1]);
  if (row < ROWS - 1) neighbours.push(grid[col][row + 1]);

  return neighbours.filter((node) => !node.isVisited);
};

export const findShortestPath = (finishNode: GridNode) => {
  const shortestPath = [];

  let currentNode = finishNode;

  while (currentNode.previousNode !== Infinity) {
    shortestPath.push(currentNode);
    if (finishNode.previousNode) currentNode = currentNode.previousNode as any;
  }

  return shortestPath;
};

export default dijkstra;
