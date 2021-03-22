import React, {useEffect, useState} from 'react';
import "./DrinksDetails.css"
import "../../Home/Home.css"


function DrinksDetail({match}) {

    useEffect(() => {
        fetchItems();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        const items = await data.json();
        setItems(items.drinks);
        console.log(items.drinks);

    }


    return (
        <div className="DrinksDetail">
            {items.map(item => (
                <h2 key={item.idDrink}>
                    <ul className="list">
                        <li><img src={item.strDrinkThumb} alt="" className="CocktailPicture2"/></li>
                        <li className="name"> {item.strDrink}:</li>
                        <ul className="ingredients">
                            <li> {item.strIngredient1}</li>
                            <li> {item.strIngredient2}</li>
                            <li> {item.strIngredient3}</li>
                            <li> {item.strIngredient4}</li>
                            <li> {item.strIngredient5}</li>
                            <li> {item.strIngredient6}</li>
                        </ul>
                        <li className="Instruction"> {item.strInstructions}</li>
                    </ul>


                </h2>
            ))}
        </div>
    );
}

export default DrinksDetail
