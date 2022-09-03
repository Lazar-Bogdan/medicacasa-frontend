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
            //console.error("Error", err.response);
            return false;
        }
    }

    async doLoginFacebookGoogle(email){
        try{
            // de hardcodat link ul
            const response = await axios.post(URL + "auth/loginFacebookGoogle", {email: email});
            return response.data;
        }catch(err){
            //console.error("Error", err.response);
            return false;
        }
    }

    async doDoctorLogin(email,password){
        try{
            const response = await axios.post(URL + "auth/doctorLogin", {email: email, password:password});
            return response.data;
        }catch(err){
            //console.error("Error", err.response);
            return false;
        }
    }

    handleLoginSucces(id,role,uid){
        const options = {path :"/"};
        CookieService.set("id", id,options);
        CookieService.set("login",true,options);
        CookieService.set("role",role,options);
        CookieService.set("uid",uid,options);
        return true;
    }


    handleGetLoginStatus(){
        return CookieService.get("login");
    }

    handleGetRole(){
        return CookieService.get("role");
    }

    handleGetUid(){
        return CookieService.get("uid");
    }

    handleLogOut(){
        CookieService.remove("id");
        CookieService.remove("role");
        CookieService.set("login",false);
    }

    async registerUser(username,email,password,role,age,img,uid){
        try{
            // de hardcodat link ul
            const response = await axios.post(URL + "auth/register", {username:username, email:email, password:password, role:role, age:age, img:img, uid:uid});
            return response;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new AuthService();