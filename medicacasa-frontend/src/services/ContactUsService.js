import axios from "axios";
import URL from "./BackEndURL";

class ContactUsService{
    async submitForm(name,email,message){
        // try{
        //     const response  = await axios.post(URL + "forms/addForm",{name:name, email:email, message:message})
        //     return response.data;
        // }catch(err){
        //     console.log("error",err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "forms/addForm", {
            method: 'POST',
            headers: {
                name:name, 
                email:email, 
                message:message
            },
            body: {
                name:name, 
                email:email, 
                message:message
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new ContactUsService