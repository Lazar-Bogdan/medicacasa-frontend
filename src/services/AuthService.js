import axios from "axios";
import CookieService from "./CookieService";
import URL from "./BackEndURL";
import Cookies from "universal-cookie";

class AuthService {
    async doUserLogin(email,password){
        // try{
        //     // de hardcodat link ul
        //     const response = await axios.post(URL + "auth/login", {email: email, password:password});
        //     return response.data;
        // }catch(err){
        //     //console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "auth/login", {
            method: 'POST',
            headers: {
                email: email,
                password:password
            },
            body: JSON.stringify({
                email: email,
                password:password
            })
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async doLoginFacebookGoogle(email){
        // try{
        //     // de hardcodat link ul
        //     const response = await axios.post(URL + "auth/loginFacebookGoogle", {email: email});
        //     return response.data;
        // }catch(err){
        //     //console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "auth/loginFacebookGoogle", {
            method: 'POST',
            headers: {
                email:email
            },
            body: {
                email: email,
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async doDoctorLogin(email,password){
        // try{
        //     const response = await axios.post(URL + "auth/doctorLogin", {email: email, password:password});
        //     return response.data;
        // }catch(err){
        //     //console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "auth/doctorLogin", {
            method: 'POST',
            headers: {
                email: email,
                password:password
            },
            body: {
                email: email,
                password:password
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    handleLoginSucces(id,role,uid){
        console.log(id);
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

    handleGetId(){
        return CookieService.get("id");
    }

    handleLogOut(){
        CookieService.remove("id");
        CookieService.remove("role");
        CookieService.set("login",false);
    }

    async registerUser(username,email,password,role,age,img,uid){
        // try{
        //     // de hardcodat link ul
        //     const response = await axios.post(URL + "auth/register", {username:username, email:email, password:password, role:role, age:age, img:img, uid:uid});
        //     return response;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "auth/register", {
            method: 'POST',
            headers: {
                username:username, 
                email:email, 
                password:password, 
                role:role, 
                age:age, 
                img:img, 
                uid:uid
            },
            body: {
                username:username, 
                email:email, 
                password:password, 
                role:role, 
                age:age, 
                img:img, 
                uid:uid
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new AuthService();