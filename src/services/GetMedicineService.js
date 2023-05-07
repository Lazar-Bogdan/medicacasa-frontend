import { I } from "@quarkly/widgets/build/cjs/prod";
import axios from "axios";

import URL from "./BackEndURL"

class GetMedicineService{
    async getAllMedicine(){
        // try{
        //     const response = await axios.get(URL + "meds/getAllMeds");
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "meds/getAllMeds", {
            method: 'GET',
            headers: {

            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
    
    async addMeds(name,price,desc,img){
        // try{
        //     const response = await axios.post(URL + "meds/addMeds",{name:name,price:price,description:desc,img:img})
        //     return response.data
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "meds/addMeds", {
            method: 'POST',
            headers: {
                name:name,
                price:price,
                description:desc,
                img:img
            },
            body: {
                name:name,
                price:price,
                description:desc,
                img:img
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async deleteMeds(id){
        let x;
        await fetch(URL + "meds/removeMeds", {
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

    async getMedsById(id){
        // try{
        //     const response = await axios.get(URL + "meds/getMedsUnderCondition", {headers:{_id:id}})
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "meds/getMedsUnderCondition", {
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

    async editMed(id,name,price,description,img){
        // try{
        //     const response = await axios.put(URL + "meds/editMeds", {_id:id,name:name,price:price,description:description,img:img});
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        console.log("service");
        console.log(id);
        let x;
        await fetch(URL + "meds/editMeds", {
            method: 'PUT',
            headers: {
                _id:id,
                name:name,
                price:price,
                description:description,
                img:img
            },
            body: {
                _id:id,
                name:name,
                price:price,
                description:description,
                img:img
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new GetMedicineService;