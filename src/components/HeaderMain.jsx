import React from "react";
import * as styles from "./HeaderMain.module.scss"

export default function MainPageHeader() {
    const [isLinkActive, setIsLinkActive] = React.useState(false);
    const linkClickHandler = () => {setIsLinkActive(true)};

    return (
        <header className={styles.HeaderMain}>
            <div className="container">
                <div className={styles.flexContainer}>
                    <a href="/" className={styles.logo}>
                        My Front-end <strong>Portfolio</strong>
                    </a>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}><a className={styles.navLink + ' ' + (isLinkActive ? styles.activeLink : '')} href="#" onClick={linkClickHandler}>Projects</a></li>
                            <li className={styles.navItem}><a className={styles.navLink} href="#" onClick={linkClickHandler}>Skills</a></li>
                            <li className={styles.navItem}><a className={styles.navLink}  href="#" onClick={linkClickHandler}>Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}