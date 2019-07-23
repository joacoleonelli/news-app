import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './Category';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Category} />
            <Route path="/:category" component={Category} />
        </Switch>
    </BrowserRouter>
)

export default Router;