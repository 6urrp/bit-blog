import { Fragment } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './Header/Header';

import './App.css';
import { from } from 'pumpify';

function App() {
  return (
    <Fragment>
      <Header />
    </Fragment>
  )
}

export default App;
