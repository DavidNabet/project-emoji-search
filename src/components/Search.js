const Search = ({ textChange }) => {
  const handleChange = (event) => {
    // event.preventDefault();
    textChange(event);
  };
  return (
    <>
      <h1>😎 Emoji Search 😎</h1>
      <form>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="what emoji are you looking for ?"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Search;
