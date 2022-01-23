import "./App.scss";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  return (
    <div>
      <h1>DIJKSTRA DEMO</h1>
      <div className="table-wrapper">
        <Table />
      </div>
    </div>
  );
};

export default App;
