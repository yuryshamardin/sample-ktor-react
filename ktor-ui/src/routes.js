import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SimpleComponent from "./components/SimpleComponent";

const routes = () => (
    <Switch>
        <Route path="/" exact={true} component={SimpleComponent}/>
    </Switch>
);

export default routes;