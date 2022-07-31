import React from "react";
import Index from "pages/index";
import AboutUs from "pages/aboutUs";
import ContactUs from "pages/contactUs";
import Login from "pages/login";
import Page404 from "pages/page404";
import Register from "pages/register";
import clientHome from "pages/clientHome";
import clientMedicine from "pages/clientMedicine";
import myDoctor from "pages/myDoctor";
import history from "pages/history";
import doctorHomePage from "pages/doctorHomePage";
import myClient from "pages/myClient";
import addReview from "pages/addReview";
import meds from "pages/admin/medList";
import AddMeds from "pages/admin/addMeds";
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
    <Router history={history}>
        <GlobalStyles />
        <Switch>
        	<Route exact path='/' component={Index}/>
			<Route exact path='/home' component={Index}/>
			<Route exact path='/aboutus' component={AboutUs}/>
			<Route exact path='/contactus' component={ContactUs}/>
			<Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register} />
            <Route exact path='/client' component={clientHome} />
            <Route exact path='/medicine' component={clientMedicine} />
            <Route exact path='/mydoctor' component={myDoctor} />
            <Route exact path='/doctor' component={doctorHomePage} />
            <Route exact path='/myclients' component={myClient} />
            <Route exact path='/review' component={addReview} />
            <Route exact path='/medlist' component={meds} />
            <Route exact path='/addmeds' component={AddMeds} />
			<Route component={Page404}/>
        </Switch>
    </Router>
);
