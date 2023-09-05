import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import PeopleNav from "../../components/PeoplePage/PeopleNav/PeopleNav";
import { getApiResource } from "../../utils/network";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { API_PEOPLE } from "../../constants/api";
import { useQueryParams } from "../../hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setErrorApi(false);
      setCounterPage(getPeoplePageId(url));
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNav
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
