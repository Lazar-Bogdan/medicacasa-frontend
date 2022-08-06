import axios from "axios";
import CookieService from "./CookieService";
import URL from "./BackEndURL";

class AuthService {
    async doUserLogin(email,password){
        try{
            // de hardcodat link ul
            const response = await axios.post(URL + "auth/login", {email: email, password:password});
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    handleLoginSucces(id){
        const options = {path :"/"};
        CookieService.set("id", id,options);
        return true;
    }

    async registerUser(username,email,password,role){
        try{
            // de hardcodat link ul
            const response = await axios.post(URL + "auth/register", {username:username, email:email, password:password, role:role});
            return response;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new AuthService();