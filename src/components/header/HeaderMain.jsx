import React from "react";
import * as styles from "./HeaderMain.module.scss"
import sun from "../../assets/svg/icons/Sun.svg"
import moon from "../../assets/svg/icons/Moon.svg"
import { NavLink } from "react-router-dom";

function MainPageHeader({ burgerMenuHandler, isOpen, hasModeChanged, setHasModeChanged }) {
    const modeClickHandler = () => {
        if(hasModeChanged === 'light') {
            setHasModeChanged('dark');
        } else {
            setHasModeChanged('light');
        }
    };

    return (
        <header className={styles.HeaderMain}>
            <div className="container">
                <div className={styles.flexContainer}>
                    <NavLink to="/" className={styles.logo} onClick={burgerMenuHandler}>
                    My <strong>Portfolio</strong>
                    </NavLink>
                    <button onClick={modeClickHandler} className={styles.darkModeBtn + " " + ((hasModeChanged === 'dark') ? styles.darkModeBtnActive : '')}>
                        <img className={styles.darkModeBtnIcon} src={sun} alt="light-mode" />
                        <img className={styles.darkModeBtnIcon} src={moon} alt="dark-mode" />
                    </button>
                    <nav className={styles.nav + ' ' + (isOpen ? styles.active : '')}>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={burgerMenuHandler}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={burgerMenuHandler}>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={burgerMenuHandler}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles.menuBtn} onClick={burgerMenuHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default MainPageHeader