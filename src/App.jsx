import React from 'react';
import * as styles from './App.module.scss'
import HeaderMain from './components/HeaderMain'
import FooterMain from './components/FooterMain'
import Main from './components/Main'



export default function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const burgerMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.wrapper + ' ' + (isOpen ? styles.lockScroll : '')}>
            <HeaderMain burgerMenuHandler={burgerMenuHandler} isOpen={isOpen} />
            <Main />
            <FooterMain />
        </div>
    )
}