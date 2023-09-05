import PropTypes from "prop-types";

import { getApiResource } from "../../utils/network";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleImage } from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading/UiLoading";

import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);
      if (res) {
        setPersonInfo([
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Skin Color", data: res.skin_color },
          { title: "Hair Color", data: res.hair_color },
          { title: "Eye Color", data: res.eye_color },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && (
            <Suspense fallback={<UiLoading />}>
              <PersonInfo personInfo={personInfo} />
            </Suspense>
          )}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
