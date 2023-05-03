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

}

export default new CalculatorService