import { NavLink } from "react-router-dom";
import { useTheme, THEME_DARK, THEME_LIGHT,THEME_NEUTRAL } from "../../context/ThemeProvider";
import imgDroid from './img/droid.svg'
import imgSpaceStation from './img/space-station.svg'
import imgLightSaber from './img/light-saber.svg'
import Favorite from "../Favorite/Favorite";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const isTheme = useTheme();
  const [icon, setIcon] = useState(imgDroid)

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_DARK: setIcon(imgSpaceStation); break;
      case THEME_LIGHT: setIcon(imgLightSaber); break;
      case THEME_NEUTRAL: setIcon(imgDroid); break;
      default: setIcon(imgDroid);
    }
  }, [isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars"></img>

      <ul className={styles.list__container}>
        <li><NavLink to="/" exact="true">
          Home
        </NavLink></li>
        <li> <NavLink to="/people/?page=1">
          People
        </NavLink></li>
        <li> <NavLink to="/search">
          Search
        </NavLink></li>
        <li> <NavLink to="/not-found" exact="true">
          Not Found
        </NavLink></li>
        <li> <NavLink to="/fail" exact="true">
          Fail
        </NavLink></li>
      </ul>
        <Favorite />

    </div>
  );
};

export default Header;
