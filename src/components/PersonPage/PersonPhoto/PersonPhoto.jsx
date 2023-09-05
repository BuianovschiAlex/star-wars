import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setPersonToFavorite,
  removePersonToFavorite,
} from "../../../store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName}></img>
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="add to favorite"
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
        ></img>
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
