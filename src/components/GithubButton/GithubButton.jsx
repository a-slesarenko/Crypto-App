import React from "react";
import githubBtn from "./gitHub-black.svg"
import * as styles from "./GithubButton.module.scss"

export default function GithubButton({link}) {
    return(
        <a href={link} target="_blank" rel="noreferrer" className={styles.button}>
			<img src={githubBtn} alt="Кнопка перехода на сайт Гитхаба" />
			GitHub repo
		</a>
    )
}