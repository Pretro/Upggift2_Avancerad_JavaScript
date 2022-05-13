import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendedAnimal } from "../models/IExtendedAnimal";

export const Animal = () => {
  //Dessa constructor skapas för att sen i en funktion kunna kolla vilken djur som är matad med datum och tid. 
  const [disable, setDisable] = React.useState(false);
  const[name,setName]  =useState<string>("");
  const[date,setDate]=useState<Date>();
  //Funktionen som utför en statement, vilken djur som frågas efter namn, och så ändras status till matad med datum och tid
  function feed(){
      if(name == "") {
        setName("Matad : ");
        let date = new Date();
        setDate ( date );
        setDisable ( true );
      }      
  }  
  const [extAnimal, setExtAnimal] = useState<IExtendedAnimal>();
    let params = useParams();
    useEffect(() => {
      axios
        .get<IExtendedAnimal>(
          "https://animals.azurewebsites.net/api/animals/" + params.id
        )
        .then((response) => {
          setExtAnimal(response.data);
        });
    }, []);
    //Visar single animal vyn. Här finns också knappen som utför uppgiften om man trycker på den, visas datum och tid som djuret är matad
    return (
        <div className="single-animal">
          <img className="img-animal" src={extAnimal?.imageUrl} alt={extAnimal?.name}/>
          <h1 className="titulos">{extAnimal?.name}</h1>   
          <h3 className=" latinTitle">Latinska namn: {extAnimal?.latinName}</h3>
          <p className="texto">{extAnimal?.longDescription}</p>
          <button className="boton2" disabled={disable} onClick={feed} >Mata djuret</button>
          <div className="feed">{name}<span className="date"> { date?.toISOString() }</span> </div>
        </div>
      );
    };