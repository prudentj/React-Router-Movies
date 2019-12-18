import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList' ;
import Movie from "./Movies/Movie";
const App = () => {
  const [savedList, setSavedList] = useState( [] );
  
  
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    
    

  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ="/" /*compontent= "MovieList"*/>
        <MovieList/>  
      </Route>
      <Route path= "/movies/:id" /*compontent= "Movie"*/>
        <Movie />  
      </Route> />
    </div>
  );
};

export default App;
