import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderMain from './components/header/HeaderMain'
import FooterMain from './components/footer/FooterMain'
import Home from './pages/Home/Home'
import Projects from './pages//Projects/Projects'
import Contacts from './pages/Contacts/Contacts'
import Project from './pages/ProjectsStorage/Project'
import ScrollToTop from './utility/ScrollToTop'
import * as styles from './App.module.scss'
import { useLocalStorage } from "./components/customHooks/useLocalStorage";



function App() {
    const [isOpen, setIsOpen] = React.useState(false);
    const burgerMenuHandler = () => {setIsOpen(!isOpen)};
    
    // Теперь использую кастом хук и выбранная тема сохранятеся в localStorage, вместо прошлого юз стейт const [hasModeChanged, setHasModeChanged] = React.useState('light')
    const [hasModeChanged, setHasModeChanged] = useLocalStorage("siteTheme", 'light');

    return(
        <div className={styles.wrapper + ' ' + (isOpen ? styles.lockScroll : '') + ' ' + (hasModeChanged === 'dark' ? 'dark' : '')}>

            <Router>
                <ScrollToTop />
                <HeaderMain burgerMenuHandler={burgerMenuHandler} isOpen={isOpen} hasModeChanged={hasModeChanged} setHasModeChanged={setHasModeChanged} />
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

export default App