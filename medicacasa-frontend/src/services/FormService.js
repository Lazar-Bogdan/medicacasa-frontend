import axios from "axios";

import URL from "./BackEndURL";


class FormService{
    async getAllForms(){
        // try{
        //     const response = await axios.get(URL + "forms/allForms");
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "forms/allForms", {
            method: 'GET',
            headers: {

            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async deleteForm(id){
        // try{
        //     const response = await axios.delete(URL + "forms/deleteForm", {headers:{_id:id}})
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "forms/deleteForm", {
            method: 'DELETE',
            headers: {
                _id:id
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new FormService;