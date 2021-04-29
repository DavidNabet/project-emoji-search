import { useState } from "react";
// import Search from "./components/Search";
import Lines from "./components/Lines";
import filterEmoji from "./components/filterEmoji";
import "./App.css";

function App() {
  const [filter, setFilter] = useState(filterEmoji("", 20));

  const handleSearch = (event) => {
    event.preventDefault();
    // let val = setSearch(setFilter(e.target.value, 20));
    setFilter(filterEmoji(event.target.value, 20));
  };

  return (
    <div className="container">
      <h1>😎 Emoji Search 😎</h1>
      <form>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="what emoji are you looking for ?"
          onChange={handleSearch}
        />
      </form>
      <Lines emojis={filter} />
    </div>
  );
}

export default App;
