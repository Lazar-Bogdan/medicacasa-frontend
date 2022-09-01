import { U } from "@quarkly/widgets/build/cjs/prod";
import axios from "axios";
import URL from "./BackEndURL";

class DoctorService{
    async getAllDoctors(){
        try{
            const response = await axios.get(URL + "doctor/getAllDoctors");
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getDoctorAfterId(id){
        try{
            const response = await axios.get(URL + "doctor/getDoctorUnderId", {headers:{_id:id}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async addDoctor(username,email,password,role,age,img){
        try{
            const response = await axios.post(URL + "doctor/addDoctor", {username:username,email:email,password:password,role:role,age:age,img:img})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async deleteDoctor(id){
        try{
            const response = await axios.delete(URL + "doctor/deleteDoctor", {headers:{_id:id}})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async getDoctor(id){
        try{
            const response = await axios.get(URL + "doctor/getDoctor",{headers:{_id:id}})
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }

    async editDoctor(id,username,email,password,role,age,img){
        try{
            const response = await axios.put(URL + "doctor/editDoctor", {_id:id,username:username,email:email,password:password,role:role,age:age,img:img});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }
}

export default new DoctorService