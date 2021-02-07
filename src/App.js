import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import components
import Navbar from './components/nav/Navbar';
const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact />
                </Switch>
            </Router>
        </>
    );
};

export default App;
