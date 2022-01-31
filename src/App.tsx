import { useState } from "react";
import "./App.scss";
import DijkstraInfo from "./components/DijkstraInfo/DijkstraInfo";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  const [showDijkstraInfo, setShowDijkstraInfo] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <DijkstraInfo
        showInfo={showDijkstraInfo}
        setShowInfo={setShowDijkstraInfo}
      />
      <Header setShowInfo={setShowDijkstraInfo} />
      <div className="table-wrapper">
        <Table />
      </div>
    </div>
  );
};

export default App;
