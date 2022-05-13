import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { addDatatoLocalStorage } from "../models/apiAnimals";
import { IAnimal } from "../models/IAnimal";
import "./../styles/Layout.css";

export const Layout = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  //Skapar constructor som gör en lägger data i localstorage
  const setDatatoStorage = async () => {
    try{
        const d = await addDatatoLocalStorage();
        console.log("Layout save data",d)
        localStorage.setItem('data', JSON.stringify(d));
        setAnimals(d);
    }catch(error) {
        console.log(error);
    }
}
  //Skapar constructor som gör en hämtar data från en array i locastorage 
    const getDataFromStorage = () => {
        try{
            const arrayOfData =  localStorage.getItem('data');
            console.log("Layout load data",arrayOfData)
            const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
            setAnimals(d);
        }catch(error) {
            console.log(error);
        }
    }
    // Självklart används en useEffect. Den låter att utföra sideeffects i funktionskomponenter
    useEffect(() => {
        
    }, []);
  return (
    //skapar en div som ska visa layout med en knapp som gör det möjligt att hämta data
    <div className="layout">
      <header>
        <nav>
          <Button className="boton" onClick={() => setDatatoStorage()}>Ladda djurkatalog</Button>                 
        </nav>
      </header>
      <main className="principal">
          <Outlet/>
              <section className="container">
                {animals.map((animal) => 
                  <div className="card">
                      <Link to={"/animal/" + animal.id}>
                        <img className="card-image" src={animal.imageUrl} alt={animal.name}/>
                          <div className="title">
                            <h5>{animal.name}</h5>
                          </div>
                      </Link>     
                  </div>
                )}
              </section>
      </main>  
    </div>
  );
};