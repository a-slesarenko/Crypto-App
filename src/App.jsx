import React from 'react'
import { HashRouter } from 'react-router-dom'
import HeaderMain from './components/header/HeaderMain'
import FooterMain from './components/footer/FooterMain'
import RoutesComponent from './Routes'
import ScrollToTop from './utility/ScrollToTop'
import { useLocalStorage } from "./components/customHooks/useLocalStorage";
import * as styles from './App.module.scss'
import clsx from 'clsx'



function App() {

    // Кастом хук для сохранения темы в LocalStorage
    const [hasModeChanged, setHasModeChanged] = useLocalStorage("siteTheme", 'light');

    // При помощи clsx вычислю классы
    const wrapperCombinedClass = clsx(styles.wrapper,
        hasModeChanged === 'dark' && 'dark');

    return(
        <div className={wrapperCombinedClass}>

            <HashRouter>
                <ScrollToTop />
                <HeaderMain hasModeChanged={hasModeChanged} setHasModeChanged={setHasModeChanged} />
                    <RoutesComponent />
                <FooterMain />
            </HashRouter>
            
        </div>
    )
}

export default App