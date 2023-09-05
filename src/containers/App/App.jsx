import PeoplePage from "../PeoplePage/PeoplePage";
import HomePage from "../HomePage/HomePage";
import PersonPage from "../PersonPage/PersonPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import SearchPage from "../SearchPage/SearchPage";
import { REPO_NAME } from '../../constants/repo'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Router basename={`/${REPO_NAME}/`}>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/people" exact Component={PeoplePage} />
            <Route path="/people/:id" exact Component={PersonPage} />
            <Route path="/not-found" exact Component={NotFoundPage} />
            <Route path="*" Component={NotFoundPage} />
            <Route path="/favorites" Component={FavoritePage} />
            <Route path="/search" Component={SearchPage} />
            <Route path="/fail" Component={ErrorMessage} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
