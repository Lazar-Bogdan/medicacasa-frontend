import React, {useEffect, useState} from "react";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";
import { set } from "react-ga";

export default (() => {
	AuthService.handleLogOut();
    const history = useHistory();
    useEffect(()=>{
        window.location.reload(true);
    });
    history.push("/");
    return (<div></div>);
});