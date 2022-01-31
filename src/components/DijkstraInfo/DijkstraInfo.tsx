import React from "react";

interface Props {
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const DijkstraInfo: React.FC<Props> = ({ showInfo, setShowInfo }) => {
  return (
    <div className={`dijkstra-info ${showInfo ? "show-info" : ""}`}>
      <div className="dijkstra-info--heading">
        <span>Dijkstra's Algorithm</span>
        <span
          className="dijkstra-info--close"
          onClick={() => setShowInfo(false)}
        >
          {" "}
          &times;{" "}
        </span>
      </div>
      <p>
        One algorithm for finding the shortest path from a starting node to a
        target node in a weighted graph is Dijkstra’s algorithm. The algorithm
        creates a tree of shortest paths from the starting vertex, the source,
        to all other points in the graph.
      </p>
      <p>
        {" "}
        <b> Algorithm</b> <br />
        <ol>
          <li>
            Mark all nodes unvisited. Create a set of all the unvisited nodes
            called the unvisited set.
          </li>
          <li>
            Assign to every node a tentative distance value: set it to zero for
            our initial node and to infinity for all other nodes. The tentative
            distance of a node v is the length of the shortest path discovered
            so far between the node v and the starting node. Since initially no
            path is known to any other vertex than the source itself (which is a
            path of length zero), all other tentative distances are initially
            set to infinity. Set the initial node as current.
          </li>
          <li>
            For the current node, consider all of its unvisited neighbors and
            calculate their tentative distances through the current node.
            Compare the newly calculated tentative distance to the current
            assigned value and assign the smaller one. For example, if the
            current node A is marked with a distance of 6, and the edge
            connecting it with a neighbor B has length 2, then the distance to B
            through A will be 6 + 2 = 8. If B was previously marked with a
            distance greater than 8 then change it to 8. Otherwise, the current
            value will be kept.
          </li>
          <li>
            When we are done considering all of the unvisited neighbors of the
            current node, mark the current node as visited and remove it from
            the unvisited set. A visited node will never be checked again.
          </li>
          <li>
            If the destination node has been marked visited (when planning a
            route between two specific nodes) or if the smallest tentative
            distance among the nodes in the unvisited set is infinity (when
            planning a complete traversal; occurs when there is no connection
            between the initial node and remaining unvisited nodes), then stop.
            The algorithm has finished.
          </li>
          <li>
            Otherwise, select the unvisited node that is marked with the
            smallest tentative distance, set it as the new current node, and go
            back to step 3.
          </li>
        </ol>
      </p>
      <p>
        {" "}
        More info{" "}
        <a
          href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
          target={"_blank"}
        >
          here{" "}
        </a>{" "}
      </p>
    </div>
  );
};

export default DijkstraInfo;
