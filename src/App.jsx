import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import scrollToTop from './utility/scrollToTop'
import * as styles from './App.module.scss'
import HeaderMain from './components/header/HeaderMain'
import FooterMain from './components/footer/FooterMain'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/ProjectsStorage/Project'



export default function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const burgerMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.wrapper + ' ' + (isOpen ? styles.lockScroll : '')}>

            <Router>
                <scrollToTop />
                <HeaderMain burgerMenuHandler={burgerMenuHandler} isOpen={isOpen} />
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/projects' element={<Projects/>} />
                        <Route path='/project/:id' element={<Project/>} />
                        <Route path='/contacts' element={<Contacts/>} />
                    </Routes>
                <FooterMain />
            </Router>
            
        </div>
    )
}