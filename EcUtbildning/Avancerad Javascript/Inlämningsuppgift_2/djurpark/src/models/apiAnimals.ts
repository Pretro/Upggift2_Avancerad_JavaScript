import axios from "axios";

//Skapar addDatatoLocalStorage och hämtar api och exporterar
export const addDatatoLocalStorage = async () => {
    try{
        const {data} = await axios.get(' https://animals.azurewebsites.net/api/animals');
       return data;
    }catch(error) {
        throw error;
    }
}