import { Fragment } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './Header/Header';
import PostList from './Posts/PostList';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <PostList />
    </Fragment>
  )
}

export default App;
