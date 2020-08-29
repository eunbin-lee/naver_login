import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MovieHome from './MovieHome';

class MovieApp extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/moviehome" exact={true} component={MovieHome} />
            </HashRouter>
        );
    }
}
export default MovieApp;
