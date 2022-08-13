import { I } from "@quarkly/widgets/build/cjs/prod";
import axios from "axios";

import URL from "./BackEndURL"

class GetMedicineService{
    async getAllMedicine(){
        try{
            const response = await axios.get(URL + "meds/getAllMeds");
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
    
    async addMeds(name,price,desc,img){
        try{
            const response = await axios.post(URL + "meds/addMeds",{name:name,price:price,description:desc,img:img})
            return response.data
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async deleteMeds(id){
        try{
            const response = await axios.delete(URL + "meds/removeMeds", {headers:{_id:id}})
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async getMedsById(id){
        try{
            const response = await axios.get(URL + "meds/getMedsUnderCondition", {headers:{_id:id}})
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }

    async editMed(id,name,price,description,img){
        try{
            const response = await axios.put(URL + "meds/editMeds", {_id:id,name:name,price:price,description:description,img:img});
            return response.data;
        }catch(err){
            console.error("Error", err.response);
            return false;
        }
    }
}

export default new GetMedicineService;