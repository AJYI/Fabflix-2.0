import classes from "./Navbar.module.css";
import HomeButton from "./HomeButton/HomeButton";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <HomeButton />
        <SearchBar />
        <NavbarOptions />
      </nav>
    </header>
  );
};

export default Navbar;
