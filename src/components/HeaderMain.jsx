import React from "react";
import * as styles from "./HeaderMain.module.scss"
import sun from "./assets/icons/Sun.svg"
import moon from "./assets/icons/Moon.svg"

export default function MainPageHeader({ burgerMenuHandler, isOpen }) {
    const [isLinkActive, setIsLinkActive] = React.useState(false);
    const linkClickHandler = () => {setIsLinkActive(!isLinkActive)};

    const [theModeChanged, setSwitchMode] = React.useState(false);
    const modeClickHandler = () => {setSwitchMode(!theModeChanged)};

    

    return (
        <header className={styles.HeaderMain}>
            <div className="container">
                <div className={styles.flexContainer}>
                    <a href="/" className={styles.logo}>
                        My <strong>Portfolio</strong>
                    </a>
                    <button onClick={modeClickHandler} className={styles.darkModeBtn + " " + (theModeChanged ? styles.darkModeBtnActive : '')}>
                        <img className={styles.darkModeBtnIcon} src={sun} alt="ligth-mode" />
                        <img className={styles.darkModeBtnIcon} src={moon} alt="dark-mode" />
                    </button>
                    <nav className={styles.nav + ' ' + (isOpen ? styles.active : '')}>
                        <ul className={styles.navList}>
                            <li><a className={styles.navLink + ' ' + (isLinkActive ? styles.activeLink : '')} href="#" onClick={linkClickHandler}>Projects</a></li>
                            <li><a className={styles.navLink + ' ' + (isLinkActive ? styles.activeLink : '')}>Skills</a></li>
                            <li><a className={styles.navLink + ' ' + (isLinkActive ? styles.activeLink : '')}>Contacts</a></li>
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