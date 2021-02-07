import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import components
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/hero';
const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Hero />
                <Switch>
                    <Route path='/' exact />
                </Switch>
            </Router>
        </>
    );
};

export default App;
