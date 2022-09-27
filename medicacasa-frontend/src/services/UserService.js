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

    async addUser(username,email,password,role,age,img,uid){
        try{
            const response = await axios.post(URL + "users/addClient", {username:username, email:email, password:password, role:role, age:age, img:img,uid:uid})
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

    async addSub(userEmail,DoctorEmail,userUid,doctorUid){
        try{
            const response = await axios.post(URL + "users/AddSub", {userEmail:userEmail, DoctorEmail:DoctorEmail, userUid:userUid, doctorUid:doctorUid})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async addMessage(client,doctor){
        try{
            const response = await axios.post(URL + "messages/addMessage", {client: client, doctor:doctor} );
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async deleteMessage(_id){
        try{
            const response = await axios.delete(URL + "messages/deleteMessage", {headers: {_id:_id}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getMessage(client){
        try{
            const response = await axios.get(URL + "messages/clientMessage", {headers: {client:client}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }
    
    async getMessageDoctor(doctor){
        try{
            const response = await axios.get(URL + "messages/doctorMessage", {headers: {doctor:doctor}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getUserUid(email){
        try{
            const response = await axios.get(URL + "users/getUserUid", {headers: {email:email}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }
}

export default new UserService