import { IAnimal } from "./IAnimal";

//Skapar IAnimalResponse och exporterar
export interface IAnimalResponse {
    //Söker efter djur i array
    Search: IAnimal[];
}