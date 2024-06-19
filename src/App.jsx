import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "./components/header/HeaderMain";
import FooterMain from "./components/footer/FooterMain";
import { useLocalStorage } from "./components/customHooks/useLocalStorage";
import * as styles from "./App.module.scss";
import clsx from "clsx";
import { ScrollRestoration } from "react-router-dom";


function App() {
  // Кастом хук для сохранения темы в LocalStorage
  const [hasModeChanged, setHasModeChanged] = useLocalStorage(
    "siteTheme",
    "light"
  );

  // При помощи clsx вычислю классы
  const wrapperCombinedClass = clsx(
    styles.wrapper,
    hasModeChanged === "dark" && "dark"
  );

  return (
    <div className={wrapperCombinedClass}>
      <HeaderMain
        hasModeChanged={hasModeChanged}
        setHasModeChanged={setHasModeChanged}
      />
      <Outlet />
      <FooterMain />
      <ScrollRestoration />
    </div>
  );
}

export default App;
