import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import Navbar from './components/nav/Navbar';
// pages
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/Products' component={Products} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
