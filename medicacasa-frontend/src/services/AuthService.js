import axios from "axios";
import CookieService from "./CookieService";

class AuthService {
    async doUserLogin(email,password){
        try{
            // de hardcodat link ul
            const response = await axios.post("http://localhost:2000/auth/login", {email: email, password:password});
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

    async registerUser(username,email,password,role,age,subscription){
        try{
            // de hardcodat link ul
            const response = await axios.post("http://localhost:2000/auth/register", {username:username, email:email, password:password, role:role, age:age,subscription:subscription});
            return response;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new AuthService();