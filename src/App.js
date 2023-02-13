import people from "./data/people.json";
import "./App.css";
import UsersComponent from "./components/UsersComponent";

function App() {
  return (
    <div className="App">
      <h1>Filter Componenet</h1>
      <UsersComponent data={people}/>
    </div>
  );
}

export default App;
