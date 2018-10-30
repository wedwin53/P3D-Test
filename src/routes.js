import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes

import App from './App';
import Home from './components/Home';
import DatosJson from './components/Datosjson';
import Three from './components/Three';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/datosjson" component={DatosJson}/>
        <Route exact path="/three" component={Three}/>
    </Switch>
</App>

export default AppRoutes;
