import { Fragment } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from './Header/Header';
import PostList from './Posts/PostList';
import SinglePost from "./Posts/SinglePost";
import SingleAuthor from './Author/SingleAuthor';
import AllAuthors from './Author/AllAuthors';
import About from './About/About';
import Footer from './Footer/Footer';
import CreatePost from './Posts/CreatePost';


import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList}/> 
        <Route path="/post/:id" component={SinglePost} /> 
        <Route exact path="/author/:id" component={SingleAuthor} />      
        <Route path="/authors" component={AllAuthors} />
        <Route exact path="/about" component={About} />
        <Route path="/create-new" component={CreatePost} />
        
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App;
