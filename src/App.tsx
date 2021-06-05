import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageProduct from './pages/PageProduct';
import PageCart from './pages/PageCart';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PageProduct/>
                </Route>
                <Route path="/cart">
                    <PageCart/>
                </Route>
                <Route path="/:string">
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
