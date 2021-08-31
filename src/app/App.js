import { Fragment } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './Header/Header';
import PostList from './Posts/PostList';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList}/>   
      </Switch>
    </Fragment>
  )
}

export default App;
