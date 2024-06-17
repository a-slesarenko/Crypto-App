import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HeaderMain from './components/header/HeaderMain'
import FooterMain from './components/footer/FooterMain'
import RoutesComponent from './Routes'
import ScrollToTop from './utility/ScrollToTop'
import { useLocalStorage } from "./components/customHooks/useLocalStorage";
import * as styles from './App.module.scss'
import clsx from 'clsx'



function App() {

    // Теперь использую кастом хук и выбранная тема сохранятеся в localStorage, вместо прошлого юз стейт const [hasModeChanged, setHasModeChanged] = React.useState('light')
    const [hasModeChanged, setHasModeChanged] = useLocalStorage("siteTheme", 'light');

    // При помощи clsx вычислю классы
    const wrapperCombinedClass = clsx(styles.wrapper,
        hasModeChanged === 'dark' && 'dark');

    return(
        <div className={wrapperCombinedClass}>

            <BrowserRouter>
                <ScrollToTop />
                <HeaderMain hasModeChanged={hasModeChanged} setHasModeChanged={setHasModeChanged} />
                    <RoutesComponent />
                <FooterMain />
            </BrowserRouter>
            
        </div>
    )
}

export default App