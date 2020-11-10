import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import Wiki from './pages/Wiki';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/wiki" component={Wiki} />
            </Switch>
        </BrowserRouter> 
    );
}
export default Routes;

