import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";


const url = "http://localhost:8001/transactions";
function App() {
  return (
    <div>
      <Header />
      <SearchBar/>
    </div>
  );
}

export default App;
