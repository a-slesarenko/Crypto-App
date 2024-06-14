import React from "react";
import * as styles from "./HeaderMain.module.scss"
import sun from ".././assets/icons/Sun.svg"
import moon from ".././assets/icons/Moon.svg"
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export default function MainPageHeader({ burgerMenuHandler, isOpen }) {

    // Теперь использую кастом хук и выбранная тема сохранятеся в localStorage, вместо прошлого юз стейт const [hasModeChanged, setHasModeChanged] = React.useState('light');
    const [hasModeChanged, setHasModeChanged] = useLocalStorage("siteTheme", 'light');

    const modeClickHandler = () => {
        if(hasModeChanged === 'light') {
            setHasModeChanged('dark');
        } else {
            setHasModeChanged('light');
        }
    };

    React.useEffect(() => {
        const backgroundColorHeader = `var(--header-bg-${hasModeChanged})`;
        const fontColorHeader = `var(--header-text-${hasModeChanged})`;
        const backgroundColorPage = `var(--page-bg-${hasModeChanged})`;
        const fontColorPage = `var(--text-color-${hasModeChanged})`;
        const projectCardBG = `var(--project-card-bg-${hasModeChanged})`;
        const projectCardText = `var(--project-card-text-${hasModeChanged})`;

        document.body.style.setProperty('--header-bg', backgroundColorHeader);
        document.body.style.setProperty('--header-text', fontColorHeader);
        document.body.style.setProperty('--page-bg', backgroundColorPage);
        document.body.style.setProperty('--text-color', fontColorPage);
        document.body.style.setProperty('--project-card-bg', projectCardBG);
        document.body.style.setProperty('--project-card-text', projectCardText);
    }, [hasModeChanged])

    return (
        <header className={styles.HeaderMain}>
            <div className="container">
                <div className={styles.flexContainer}>
                    <NavLink to="/" className={styles.logo}>
                    My <strong>Portfolio</strong>
                    </NavLink>
                    <button onClick={modeClickHandler} className={styles.darkModeBtn + " " + ((hasModeChanged === 'dark') ? styles.darkModeBtnActive : '')}>
                        <img className={styles.darkModeBtnIcon} src={sun} alt="ligth-mode" />
                        <img className={styles.darkModeBtnIcon} src={moon} alt="dark-mode" />
                    </button>
                    <nav className={styles.nav + ' ' + (isOpen ? styles.active : '')}>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>
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