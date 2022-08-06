import axios from "axios";
import URL from "./BackEndURL";

class ContactUsService{
    async submitForm(name,email,message){
        try{
            const response  = await axios.post(URL + "forms/addForm",{name:name, email:email, message:message})
            return response.data;
        }catch(err){
            console.log("error",err.response);
            return false;
        }
    }
}

export default new ContactUsService