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
import adminMainPage from "pages/admin/adminMainPage";
import clients from "pages/admin/clientList";
import forms from "pages/admin/formList";
import AddClient from "pages/admin/addClient";
import reviewPage from "pages/seeMoreInfo";
import allDoctors from "pages/allDoctors";
import doctorInformation from "pages/doctorInformation";
import MySchedule from "pages/mySchedule"
import addDoctor from "pages/admin/addDoctor";
import editClient from "pages/admin/editClient";
import editDoctor from "pages/admin/editDoctor";
import editMeds from "pages/admin/editMeds";
import AppointmentsList from "pages/admin/AppointmentsList";
import addAppointment from "pages/admin/addAppointment";
import logout from "pages/logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import CookieService from "./services/CookieService";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

//CookieService.set("login",false);

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
            <Route exact path='/clientinfo/:id' component={reviewPage} />
            <Route exact path='/medlist' component={meds} />
            <Route exact path='/addmeds' component={AddMeds} />
            <Route exact path='/adminpage' component={adminMainPage} />
            <Route exact path='/clientlist' component={clients} />
            <Route exact path='/forms' component={forms} />
            <Route exact path='/addnewclient' component={AddClient} />
            <Route exact path='/addnewdoctor' component={addDoctor} />
            <Route exact path='/editclient/:id' component={editClient} />
            <Route exact path='/editdoctor/:id' component={editDoctor} />
            <Route exact path='/editmeds/:id' component={editMeds} />
            <Route exact path='/alldoctors' component={allDoctors} />
            <Route exact path='/appointments' component={AppointmentsList} />
            <Route exact path='/addappointments' component={addAppointment} />
            <Route exact path='/doctorinformation/:id' component={doctorInformation} />
            <Route exact path='/schedule' component={MySchedule} />
            <Route exact path="/logout" component={logout} />
			<Route component={Page404}/>
        </Switch>
    </Router>
);
