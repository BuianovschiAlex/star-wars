import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiButton from "../../UI/UiButton/UiButton";

import styles from "./PeopleNav.module.css";

const PeopleNav = ({ counterPage, getResource, prevPage, nextPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

PeopleNav.propTypes = {
  getResource: PropTypes.func,
  counterPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default PeopleNav;
