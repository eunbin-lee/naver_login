import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import LoginApp from './components/LoginApp';
import MovieApp from './components/MovieApp';

class App extends React.Component {
    render() {
        window.location.href = '/#/login/';
        return (
            <HashRouter>
                <Route path="/login" component={LoginApp} />
                <Route path="/movie" component={MovieApp} />
            </HashRouter>
        );
    }
}

export default App;
