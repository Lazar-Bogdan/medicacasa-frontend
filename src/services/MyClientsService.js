import axios from "axios";

import URL from "./BackEndURL";

class MyClientsService{
    async getMyClientsUnderDoctorEmail(email,month,year,day){
        // try{
        //     const response = await axios.get(URL + "App/getAppUnderEmail", { headers: {doctoremail:email, month:month, year:year, day:day}});
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "App/getAppUnderEmail", {
            method: 'GET',
            headers: {
                doctoremail:email, 
                month:month, 
                year:year, 
                day:day
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getDoctorAppUnderAddAppAdmin(doctoremail,year,month,day){
        // try{
        //     const response = await axios.get(URL + "App/getDoctorApp", { headers: {doctoremail:doctoremail, month:month, year:year, day:day}});
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // } 
        let x;
        await fetch(URL + "App/getDoctorApp", {
            method: 'GET',
            headers: {
                doctoremail:doctoremail, 
                month:month, 
                year:year, 
                day:day
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getAllApp(){
        // try{
        //     const response = await axios.get(URL + "App/getAllApp");
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "App/getAllApp", {
            method: 'GET',
            headers: {

            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async deleteApp(id){
        // try{
        //     const response = await axios.delete(URL + "App/deleteApp", {headers:{_id:id}});
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        let x;
        await fetch(URL + "App/deleteApp", {
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

    async addApp(doctoremail,clients,day,hour,month,year){
        // try{
        //     const response = await axios.post(URL + "App/addApp", {doctoremail:doctoremail,clients:clients,day:day,hour:hour, month:month, year:year})
        //     return response.data;
        // }catch(err){
        //     console.error("Error", err.response);
        //     return false;
        // }
        console.log("Beggining of the function addApp from myClientService");
        let x;
        await fetch(URL + "App/addApp", {
            method: 'POST',
            headers: {
                doctoremail:doctoremail,
                clients:clients,
                day:day,
                hour:hour, 
                month:month, 
                year:year
            },
            body: {
                doctoremail:doctoremail,
                clients:clients,
                day:day,
                hour:hour, 
                month:month, 
                year:year
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }
}

export default new MyClientsService;