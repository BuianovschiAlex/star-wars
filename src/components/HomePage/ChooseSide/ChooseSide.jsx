import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
} from "../../../context/ThemeProvider";
import cn from "classnames";

import imgLight from "./img/light-side.jpg";
import imgDark from "./img/dark-side.jpg";
import imgNeutral from "./img/neutral.jpg";

import PropTypes from "prop-types";
import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();
  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text}></img>
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLight,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDark,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: imgNeutral,
      classes: styles.item__neutral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((el, index) => (
        <ChooseSideItem
          key={index}
          theme={el.theme}
          text={el.text}
          img={el.img}
          classes={el.classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
