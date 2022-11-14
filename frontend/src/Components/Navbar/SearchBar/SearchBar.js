import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search a movie"
        className={classes.input}
      />
    </div>
  );
};

export default SearchBar;
