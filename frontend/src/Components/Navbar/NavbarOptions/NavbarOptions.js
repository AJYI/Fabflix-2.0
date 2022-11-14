import { NavLink } from "react-router-dom";
import styles from "./NavbarOptions.module.css";

const NavbarOptions = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.options}>
        <li>
          <NavLink to="/browse" className={styles.navObject}>
            SIGN IN
          </NavLink>
        </li>
        <li className={styles.createAccount}>
          <NavLink to="/browse" className={styles.navObject}>
            CREATE ACCOUNT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarOptions;
