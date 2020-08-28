import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Movie from './Movie';

class MovieApp extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/movie" exact={true} component={Movie} />
            </HashRouter>
        );
    }
}
export default MovieApp;
