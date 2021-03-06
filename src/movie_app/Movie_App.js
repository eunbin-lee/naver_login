import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import KorFooter from '../components/KorFooter';
import Latest from './Latest';
import Nav from './Nav';
import MyList from './MyList';

class Movie_App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Route path="/movie/latest" exact={true} component={Latest} />
        <Route path="/movie/home" exact={true} component={Home} />
        <Route path="/movie/mylist" exact={true} component={MyList} />
        <KorFooter />
      </>
    );
  }
}

export default Movie_App;
