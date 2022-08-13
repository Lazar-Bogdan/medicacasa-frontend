import axios from "axios";
import URL from "./BackEndURL";

class UserService{
    async getAllUsers(){
        try{
            const response = await axios.get(URL + "users/getAllUsers");
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getUsersUnderEmail(email){
        try{
            const response = await axios.get(URL + "users/getUserUnderEmail", {headers:{email:email}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getUsersUnderId(id){
        try{
            const response = await axios.get(URL + "users/getUserUnderId", {headers:{_id:id}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getUserUnderDoctorEmail(email){
        try{
            const response = await axios.get(URL + "users/getUserUnderDoctorEmail", {headers:{email:email}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async addUser(username,email,password,role,age,img){
        try{
            const response = await axios.post(URL + "users/addClient", {username:username, email:email, password:password, role:role, age:age, img:img})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async deleteUser(id){
        try{
            const response = await axios.delete(URL + "users/deleteUser", {headers:{_id:id}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async editUser(id,username,email,password,role,age,img){
        try{
            const response = await axios.put(URL + "users/updateUser", {_id:id,username:username,email:email,password:password,role:role,age:age,img:img})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }
}

export default new UserService