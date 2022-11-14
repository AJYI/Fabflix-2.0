import classes from "./searchbar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
