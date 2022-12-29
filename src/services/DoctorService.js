import { U } from "@quarkly/widgets/build/cjs/prod";
import axios from "axios";
import URL from "./BackEndURL";

class DoctorService{
    async getAllDoctors(){
        // try{
        //     const response = await axios.get(URL + "doctor/getAllDoctors");
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/getAllDoctors", {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getDoctorUidAfterId(id){
        // try{
        //     const response = await axios.get(URL + "doctor/getDoctorUnderId", {headers:{_id:id}});
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        console.log(id);
        await fetch(URL + "doctor/getDoctorUnderId", {
            method: 'GET',
            headers: {
                _id:id
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async addDoctor(username,email,password,role,age,img,FirstDesc,SecondDesc){
        // try{
        //     const response = await axios.post(URL + "doctor/addDoctor", {username:username,email:email,password:password,role:role,age:age,img:img, doctorFirstDescription:FirstDesc, doctorSecondDescription:SecondDesc})
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/addDoctor", {
            method: 'POST',
            headers: {
                username:username,
                email:email,
                password:password,
                role:role,
                age:age,
                img:img, 
                doctorFirstDescription:FirstDesc, 
                doctorSecondDescription:SecondDesc
            },
            body: {
                username:username,
                email:email,
                password:password,
                role:role,
                age:age,
                img:img, 
                doctorFirstDescription:FirstDesc, 
                doctorSecondDescription:SecondDesc
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async deleteDoctor(id){
        // try{
        //     const response = await axios.delete(URL + "doctor/deleteDoctor", {headers:{_id:id}})
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/deleteDoctor", {
            method: 'DELETE',
            headers: {
                _id:id
            },
            body: {

            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getDoctor(id){
        // try{
        //     const response = await axios.get(URL + "doctor/getDoctor",{headers:{_id:id}})
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/getDoctor", {
            method: 'GET',
            headers: {
                _id:id
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async editDoctor(id,username,email,password,role,age,img,FirstDesc,SecondDesc){
        // try{
        //     const response = await axios.put(URL + "doctor/editDoctor", {_id:id,username:username,email:email,password:password,role:role,age:age,img:img, doctorFirstDescription:FirstDesc, doctorSecondDescription:SecondDesc});
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/editDoctor", {
            method: 'PUT',
            headers: {
                _id:id,username:username,
                email:email,
                password:password,
                role:role,
                age:age,
                img:img, 
                doctorFirstDescription:FirstDesc, 
                doctorSecondDescription:SecondDesc
            },
            body: {
                _id:id,username:username,
                email:email,
                password:password,
                role:role,
                age:age,
                img:img, 
                doctorFirstDescription:FirstDesc, 
                doctorSecondDescription:SecondDesc
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getDoctorUid(email){
        // try{
        //     const response = await axios.get(URL + "doctor/getDoctorUid", {headers: {email:email}});
        //     return response.data;
        // }catch(err){
        //     console.log("err",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "doctor/getDoctorUid", {
            method: 'GET',
            headers: {
                email:email
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getUsername(email)
    {
        let x;
        await fetch(URL + "doctor/getUsername", {
            method: 'GET',
            headers: {
                email:email
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new DoctorService