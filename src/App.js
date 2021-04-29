import { useState } from "react";
import Search from "./components/Search";
import Lines from "./components/Lines";
import filterEmoji from "./components/filterEmoji";
import "./App.css";

function App() {
  const [filter, setFilter] = useState(filterEmoji("", 20));

  const handleSearch = (event) => {
    // let val = setSearch(setFilter(e.target.value, 20));
    setFilter(event.target.value, 20);
  };

  return (
    <div className="container">
      <Search textChange={handleSearch} />
      <Lines emojis={filter} />
    </div>
  );
}

export default App;
