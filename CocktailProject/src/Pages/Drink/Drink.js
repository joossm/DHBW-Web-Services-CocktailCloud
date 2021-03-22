import React, {useEffect, useState} from 'react';
import './Drink.css';
import {Link} from 'react-router-dom'
import Dropdown from '../../Components/DropDown/Dropdown.js'

//Diese Klasse beschreibt die Filter Seite der Coktails. Die verschiedenen Sorten sind als Array angelegt und kompatibel mit den Einträgen der Datenbank.
const Alcohol = [
    {
        value: 1,
        label: 'Gin',
    },
    {
        value: 2,
        label: 'Vodka',
    },
    {
        value: 3,
        label: 'Absolut Vodka',
    },
    {
        value: 4,
        label: 'Dark Rum',
    },
    {
        value: 5,
        label: 'Light Rum',
    },
    {
        value: 6,
        label: 'Tequila',
    },
    {
        value: 7,
        label: 'Rum',
    },
    {
        value: 8,
        label: 'Whiskey',
    },
];
//nicht alkoholische GEtränke vordefiniert, kompatibel mit Datenbank
const Softdrinks = [
    {
        value: 1,
        label: 'Tonic Water',
    },
    {
        value: 2,
        label: 'Orange juice',
    },
    {
        value: 3,
        label: 'Pineapple juice',
    },
    {
        value: 4,
        label: 'Banana juice',
    },
    {
        value: 5,
        label: 'Multivitamin juice',
    },
    {
        value: 6,
        label: 'Apple juice',
    },
    {
        value: 7,
        label: 'Grenadine syrup',
    },
    {
        value: 8,
        label: 'Passion fruit syrup',
    },
    {
        value: 9,
        label: 'Coca-Cola',
    },
    {
        value: 10,
        label: 'Fante',
    },
    {
        value: 11,
        label: 'Lemon Juice',
    },
    {
        value: 12,
        label: '7-up',
    },
];


const Drink = () => {
    const [chosenAlcohol, setChosenAlcohol] = useState([]);
    const [chosenNonAlcohol, setChosenNonAlcohol] = useState([]);
    //rendern der beiden Dropdown Fenster und des "Search" Knopfes
    return (
        <div className="FilterFunctions">
            <div className="GameTitle">Drinks</div>
            <ul className="FilterList">
                <li className="Dropdown"><Dropdown className="Dropdown" title="Choose Alcohol" items={Alcohol}
                                                   onItemsChanged={(items) => setChosenAlcohol(items)}/></li>
                <li className="Dropdown"><Dropdown className="Dropdown" title="Choose non Alcoholic" items={Softdrinks}
                                                   onItemsChanged={(items) => setChosenNonAlcohol(items)}/></li>
                <Link to={`/Drink/${chosenAlcohol},${chosenNonAlcohol}`}>
                    <button className="FilterButton">Search</button>
                </Link>
            </ul>
        </div>
    );
}

export default Drink;
