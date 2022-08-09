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
}

export default new MyClientsService();