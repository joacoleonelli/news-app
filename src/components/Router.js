import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Category from './Category';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/business" component={Category} />
            <Route path="/entertainment" component={Category} />
            <Route path="/health" component={Category} />
            <Route path="/science" component={Category} />
            <Route path="/entertainment" component={Category} />
            <Route path="/sports" component={Category} />
            <Route path="/technology" component={Category} />
        </Switch>
    </BrowserRouter>
)

export default Router;