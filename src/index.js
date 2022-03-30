import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/i18n/i18next';

import {HashRouter} from "react-router-dom";
ReactDOM.render(
    <HashRouter basename="/">
    <App />
    </HashRouter>
    , document.getElementById('meridiana')
);
