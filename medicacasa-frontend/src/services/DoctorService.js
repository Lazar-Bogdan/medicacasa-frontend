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

    async getDoctorAfterEmail(id){
        try{
            const response = await axios.get(URL + "doctor/getDoctorUnderEmail", {headers:{_id:id}});
            return response.data;
        }catch(err){
            console.log("err",err.response);
            return false;
        }
    }
}

export default new DoctorService