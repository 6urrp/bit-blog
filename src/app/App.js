import { Fragment } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './Header/Header';
import PostList from './Posts/PostList';
import SinglePost from "./Posts/SinglePost";
import SingleAuthor from './Author/SingleAuthor';
import AllAuthors from './Author/AllAuthors';
import About from './About/About';


import './App.css';
import Footer from './Footer/Footer';



function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList}/> 
        <Route path="/post/:id" component={SinglePost} /> 
        <Route exact path="/author/:id" component={SingleAuthor} />      
        <Route path="/Authors" component={AllAuthors} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App;
