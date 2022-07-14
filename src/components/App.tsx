import React from "react";
import NavMenu from "./NavigationMenu";
import { Container } from "react-bootstrap";
import AddFavo from "./common/AddFavo";

import {Route, Switch} from 'react-router-dom';

// import MovieTheater from "./movie-list/movie-theater";
// import ComingSoon from "./movie-list/coming-soon";
// import TopIndia from "./movie-list/top-india";
// import TopMovies from "./movie-list/top-movies";

// import IMovie from "../models/IMovie";
// import IComingSoon from "../models/IComingSoon";
// import ITopIndia from "../models/ITopIndia";
// import ITopMovies from "../models/ITopMovies";
import IFavo from "../models/IFavo";

import MovieTheaterList from "./movie-list/movie-theater-list";
import ComingSoonList from "./movie-list/coming-soon-list";
import TopIndiaList from "./movie-list/top-india-list";
import TopMoviesList from "./movie-list/top-movies-list";

import MovieDetails from "./movie-details/MovieDetails";
import TopIndiaDetails from "./movie-details/TopIndiaDetails";


const  App = () => {
  return (
    <>
      <NavMenu />
      <Container>
       <Switch>
          <Route path="/movies-coming" component={ComingSoonList} />
          <Route path="/movies-in-theaters/:id" component={MovieDetails} />
          <Route path="/top-rated-india/:id" component={TopIndiaDetails} />
          <Route path="/top-rated-india" component={TopIndiaList} />
          <Route path="/top-rated-movies" component={TopMoviesList} />
          <Route path="/" component={MovieTheaterList} />
        </Switch> 
        {/* <MovieDetails /> */}

      </Container>
    </>
  );
};

export default App;
