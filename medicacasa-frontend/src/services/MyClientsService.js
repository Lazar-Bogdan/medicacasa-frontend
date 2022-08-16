import axios from "axios";

import URL from "./BackEndURL";

class MyClientsService{
    async getMyClientsUnderDoctorEmail(email){
        try{
            const response = await axios.get(URL + "App/getAppUnderEmail", { headers: {doctoremail:email}});
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async getAllApp(){
        try{
            const response = await axios.get(URL + "App/getAllApp");
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async deleteApp(id){
        try{
            const response = await axios.delete(URL + "App/deleteApp", {headers:{_id:id}});
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async addApp(doctoremail,clients,day,hour){
        try{
            const response = await axios.post(URL + "App/addApp", {doctoremail:doctoremail,clients:clients,day:day,hour:hour})
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new MyClientsService;