import logo from "./logo.svg";
import "./App.css";
import { Card } from "./card";
import { Table } from "./table";
import photoman from "./photo-man.avif";

function App() {
  return (
    <div>
      <img src={photoman} width="20%" />
      <Card title="card 1" desc="Description" />
      <Table />
      <Card />
      <Table />
      <Card />
      <Table />
    </div>
  );
}

export default App;
