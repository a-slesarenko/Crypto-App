import React from "react";
import * as styles from "./HeaderMain.module.scss"

export default function MainPageHeader({ burgerMenuHandler, isOpen }) {
    const [isLinkActive, setIsLinkActive] = React.useState(false);
    const linkClickHandler = () => {setIsLinkActive(!isLinkActive)};

    

    return (
        <header className={styles.HeaderMain}>
            <div className="container">
                <div className={styles.flexContainer}>
                    <a href="/" className={styles.logo}>
                        My <strong>Portfolio</strong>
                    </a>
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