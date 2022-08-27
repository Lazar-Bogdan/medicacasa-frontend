import React from "react";

import AuthService from "services/AuthService";
import { useHistory } from "react-router-dom";

export default (() => {
	AuthService.handleLogOut();
    const history = useHistory();
    history.push("/");
});