import "./styles/app.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <div className="title-bar">
        <h1>Memory Card Game</h1>
        <h1>Lord of the Rings Edition</h1>
      </div>
      <CardList />
    </div>
  );
}

export default App;
