import URL from "./BackEndURL";

class CalculatorService{

    async getCalculatorUnderCountryCityCardiology(country,city,cardiologytype)
    {
        let x;
        await fetch(URL + "calculator/getCalculatorUnderCountryCityCardiology",{
            method:'GET',
            headers:{
                country:country,
                city:city,
                cardiologytype:cardiologytype
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getCalculatorUnderCountryCityGeneralSurgery(country,city,generalsurgerytype)
    {
        let x;
        await fetch(URL + "calculator/getCalculatorUnderCountryCityGeneralSurgery",{
            method:'GET',
            headers:{
                country:country,
                city:city,
                generalsurgerytype:generalsurgerytype
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getCalculatorUnderCountryCityInternalMedicine(country,city,internalmedicinetype)
    {
        let x;
        await fetch(URL + "calculator/getCalculatorUnderCountryCityInternalMedicine",{
            method:'GET',
            headers:{
                country:country,
                city:city,
                internalmedicinetype:internalmedicinetype
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async getAllCalculator()
    {
        let x;
        await fetch(URL + "calculator/allCalculators", {
            method:'GET',
            headers:{

            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;
    }

    async deleteCalculator(id){
        let x;
        await fetch(URL + "calculator/deleteCalculator", {
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

    async addCalculator(country,city,cardiologytype,cardiologyplace,cardiologyprice,generalsurgerytype,generalsurgeryplace,generalsurgeryprice,internalmedicinetype,internalmedicineplace,internalmedicineprice,rate){

        let x;
        await fetch(URL + "calculator/addCalculator", {
            method: 'POST',
            headers: {
                country:country,
                city:city,
                cardiologytype:cardiologytype,
                cardiologyplace:cardiologyplace,
                cardiologyprice:cardiologyprice,
                generalsurgerytype:generalsurgerytype,
                generalsurgeryplace:generalsurgeryplace,
                generalsurgeryprice:generalsurgeryprice,
                internalmedicinetype:internalmedicinetype,
                internalmedicineplace:internalmedicineplace,
                internalmedicineprice:internalmedicineprice,
                rate:rate
            }
        })
        .then(response => response.json())
        .then(response => { x = response; })
        .catch(err => { x = err; console.error(err)});
        return x;

    }

}

export default new CalculatorService