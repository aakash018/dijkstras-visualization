import "./App.scss";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="table-wrapper">
        <Table />
      </div>
    </div>
  );
};

export default App;
