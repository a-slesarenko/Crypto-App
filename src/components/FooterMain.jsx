import React from "react";
import * as styles from "./FooterMain.module.scss"
import vk from './assets/icons/vk.svg'
import gitHub from './assets/icons/gitHub.svg'
import twitter from './assets/icons/twitter.svg'
import linkedIn from './assets/icons/linkedIn.svg'
import instagram from './assets/icons/instagram.svg'


export default function FooterMain() {
    return (
        <footer>
            <div className="container">
                <ul className={styles.iconsList}>
                    <li className={styles.iconsItem}>
                        <a href="#">
                            <img src={vk} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="#">
                            <img src={instagram} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="#">
                            <img src={twitter} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="#">
                            <img src={gitHub} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="#">
                            <img src={linkedIn} alt="social media" />
                        </a>
                    </li>
                </ul>
                <div className={styles.copyright}>
                    <p>© 2024 frontend-dev.com</p>
                </div>
            </div>
        </footer>
    )
}