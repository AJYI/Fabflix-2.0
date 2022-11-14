import { NavLink } from "react-router-dom";
import styles from "./HomeButton.module.css";

const HomeButton = () => {
  return (
    <div className={styles.title}>
      <NavLink to="/home" className={styles.home}>
        MovieDB
      </NavLink>
    </div>
  );
};

export default HomeButton;
