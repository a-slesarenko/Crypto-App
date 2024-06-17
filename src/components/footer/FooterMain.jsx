import React from "react";
import * as styles from "./FooterMain.module.scss"
import telegram from '../../assets/svg/icons/telegram.svg'
import gitHub from '../../assets/svg/icons/github.svg'
import whatsapp from '../../assets/svg/icons/whatsapp.svg'


function FooterMain() {
    return (
        <footer>
            <div className="container">
                <ul className={styles.iconsList}>
                    <li className={styles.iconsItem}>
                        <a href="https://t.me/AndrewSle" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="https://github.com/a-slesarenko" target="_blank" rel="noopener noreferrer">
                            <img src={gitHub} alt="social media" />
                        </a>
                    </li>
                    <li className={styles.iconsItem}>
                        <a href="https://wa.me/+79044327169" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="social media" />
                        </a>
                    </li>
                </ul>
                <div className={styles.copyright}>
                    <p>© 2024 all rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterMain