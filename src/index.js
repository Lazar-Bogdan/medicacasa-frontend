import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QAPI from "qapi";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom"

const history = createBrowserHistory();

window.QAPI = QAPI;

ReactDOM.render(
    <Router history={history}><App /></Router>,
    document.getElementById("root")
);
