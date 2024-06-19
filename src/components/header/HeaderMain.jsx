import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./HeaderMain.module.scss";
import clsx from "clsx";
import sun from "../../assets/svg/icons/Sun.svg";
import moon from "../../assets/svg/icons/Moon.svg";

function MainPageHeader({ hasModeChanged, setHasModeChanged }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuClickHandler = (event) => {
    if (event.currentTarget.classList.contains(styles.menuBtn)) {
      setIsOpen(!isOpen);
    } else if (
      event.currentTarget.classList.contains(styles.navLink) &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lockScroll");
    } else {
      document.body.classList.remove("lockScroll");
    }
  }, [isOpen]);

  const modeClickHandler = () => {
    if (hasModeChanged === "light") {
      setHasModeChanged("dark");
    } else {
      setHasModeChanged("light");
    }
  };

  // Функция для определения класса NavLink
  const NavLinkClass = ({ isActive }) =>
    isActive ? styles.activeLink : styles.navLink;
  // Вынес определение классов сюда, использую clsx
  const darkModeCombinedClass = clsx(
    styles.darkModeBtn,
    hasModeChanged === "dark" && styles.darkModeBtnActive
  );

  const navCombinedClass = clsx(styles.nav, isOpen && styles.active);

  return (
    <header className={styles.HeaderMain}>
      <div className="container">
        <div className={styles.flexContainer}>
          <NavLink to="/" className={styles.logo} onClick={menuClickHandler}>
            My <strong>Portfolio</strong>
          </NavLink>
          <button onClick={modeClickHandler} className={darkModeCombinedClass}>
            <img
              className={styles.darkModeBtnIcon}
              src={sun}
              alt="light-mode"
            />
            <img
              className={styles.darkModeBtnIcon}
              src={moon}
              alt="dark-mode"
            />
          </button>
          <nav className={navCombinedClass}>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to="/"
                  className={NavLinkClass}
                  onClick={menuClickHandler}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className={NavLinkClass}
                  onClick={menuClickHandler}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contacts"
                  className={NavLinkClass}
                  onClick={menuClickHandler}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className={styles.menuBtn} onClick={menuClickHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainPageHeader;
