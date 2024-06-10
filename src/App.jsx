import React from 'react';
import * as styles from './App.module.scss'
import HeaderMain from './components/HeaderMain'
import FooterMain from './components/FooterMain'
import Main from './components/Main'



 export default function App() {
    return(
        <div className={styles.wrapper}>
            <HeaderMain />
            <Main />
            <FooterMain />
        </div>
    )
 }