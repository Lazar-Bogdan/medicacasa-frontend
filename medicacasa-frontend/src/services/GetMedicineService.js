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
}

export default new GetMedicineService;