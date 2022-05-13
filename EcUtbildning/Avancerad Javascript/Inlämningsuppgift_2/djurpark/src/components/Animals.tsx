import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { IAnimalResponse } from "../models/IAnimalResponse";
import "./../styles/Layout.css";

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    //Hämtar animals från api
    useEffect(() => {
        if (animals.length !== 0) return;
          axios
          .get<IAnimalResponse>("https://animals.azurewebsites.net/api/animals")
          .then((response) => {
            setAnimals(response.data.Search);
          });
        });
      //Mappar animals och ska returnera det djur som man trycker på. Finns en link som länkar till det djurets som är vald och söker efter  djurets id
  return (
  <>
    { animals.map((animal) => {
      return (
        <Link to={"animal/" + animal.id}>
          <div className="container" >
            <h5>{animal.name}</h5>
              <img  className="imagen" src={animal.imageUrl} alt={animal.name} />
          </div>
        </Link>
      );
    })}
  </>
  );
};