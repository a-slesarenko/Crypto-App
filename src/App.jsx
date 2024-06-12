import React from 'react';
import * as styles from './App.module.scss'
import HeaderMain from './components/HeaderMain'
import FooterMain from './components/FooterMain'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';



export default function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const burgerMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.wrapper + ' ' + (isOpen ? styles.lockScroll : '')}>
            <HeaderMain burgerMenuHandler={burgerMenuHandler} isOpen={isOpen} />
            <Project />
            <FooterMain />
        </div>
    )
}