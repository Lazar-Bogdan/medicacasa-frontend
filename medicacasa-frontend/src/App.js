import React from "react";
import Index from "pages/index";
import AboutUs from "pages/aboutUs";
import ContactUs from "pages/contactUs";
import Login from "pages/login";
import Page404 from "pages/page404";
import Register from "pages/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        	<Route exact path='/' component={Index}/>
			<Route exact path='/home' component={Index}/>
			<Route exact path='/about-us' component={AboutUs}/>
			<Route exact path='/contact-us' component={ContactUs}/>
			<Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register} />
			<Route component={Page404}/>
        </Switch>
    </Router>
);
