import axios from "axios";

import URL from "./BackEndURL";


class FormService{
    async getAllForms(){
        try{
            const response = await axios.get(URL + "forms/allForms");
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async deleteForm(id){
        try{
            const response = await axios.delete(URL + "forms/deleteForm", {headers:{_id:id}})
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new FormService;