import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//rutas
import AppRoutes from './routes';

//assets
import './index.css';
//import App from './App';

import * as serviceWorker from './serviceWorker';


render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    , document.getElementById('root')
);




serviceWorker.unregister();
