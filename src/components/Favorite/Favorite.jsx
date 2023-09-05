import icon from "./img/bookmark.svg";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Favorite = () => {
  const [count, setCount] = useState(null);
  const storeDate = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeDate).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });

  return (
    <>
      <div className={styles.container}>
        <Link to="/favorites">
          <span className={styles.counter}>{count}</span>
          <img src={icon} alt="icon" className={styles.icon}></img>
        </Link>
      </div>
    </>
  );
};

export default Favorite;
