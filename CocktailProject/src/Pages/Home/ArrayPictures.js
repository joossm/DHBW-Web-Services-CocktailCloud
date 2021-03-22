import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"

//Beschreibt die 20 Bilder von zufälligen Cocktails die auf der Startseite angezeigt werden
function ArrayPictures() {

    useEffect(() => {
        fetchItems();
        fetchItems2();
    }, []);
    //first Request to get 10 Drinks
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
            //link to receive 10 random Cocktails
        );
        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks)
    }
    //second Request to get 10 more Drinks
    const [items2, setItems2] = useState([]);
    const fetchItems2 = async () => {
        const data2 = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'
        );
        const items2 = await data2.json();
        console.log(items2.drinks);
        setItems2(items2.drinks)
    }
    return (
        <div className="Pictures">
            {items.map(item => (
                <Link to={`/DrinkID/${item.idDrink}`}>
                    <img src={item.strDrinkThumb} alt="" className="Picture"/>
                </Link>
            ))}
            {items2.map(item => (
                <Link to={`/DrinkID/${item.idDrink}`}>
                    <img src={item.strDrinkThumb} alt="" className="Picture"/>
                </Link>
            ))}

        </div>
    );
}

export default ArrayPictures
