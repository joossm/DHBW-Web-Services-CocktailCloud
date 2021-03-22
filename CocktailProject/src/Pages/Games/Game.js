import {React, useState} from 'react'
import './Game.css'
import {Link} from 'react-router-dom';
import DropdownSingle from '../../Components/DropDown/DropdownSingle.js'
import Dropdown from '../../Components/DropDown/Dropdown.js';

function Game() {
//Vordefinierte Auswahl an Anzahl von Spielern
    const numbers = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 9,
            label: '9',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 11,
            label: '11',
        },
        {
            value: 12,
            label: '12',
        },
        {
            value: 13,
            label: '13',
        },
        {
            value: 14,
            label: '14',
        },
        {
            value: 15,
            label: '15',
        },
    ];
    //vordefinierte Auswahl an Genre, kompatibel mit der Datenbank
    const genres = [
        {
            value: 1,
            label: 'Family',
        },
        {
            value: 2,
            label: 'Party',
        },
        {
            value: 3,
            label: 'Card Game',
        },
        {
            value: 4,
            label: 'Board Game',
        },
        {
            value: 5,
            label: 'Drawing',
        },
        {
            value: 6,
            label: 'Adult',
        },
        {
            value: 7,
            label: 'Cooperation',
        },
        {
            value: 8,
            label: 'Communication',
        },
        {
            value: 9,
            label: 'Strategy',
        },
        {
            value: 10,
            label: 'Worker Placement',
        },
        {
            value: 11,
            label: 'Builder',
        },

        {
            value: 12,
            label: 'Deduction',
        },
        {
            value: 13,
            label: 'Reaction',
        },
        {
            value: 14,
            label: 'Drinking',
        },
        {
            value: 15,
            label: 'Skill Game',
        },
        {
            value: 16,
            label: 'Socialise',
        },


    ];
    const [amount, setAmount] = useState([]);

    const [genre, setGenre] = useState([]);

//rendert die 2 Dropdown Fenster und den Knopf "Search"
//Bei klick des Knopfes wird auf die Seite Game/amountOfPlayers/chosenGenres
    return (
        <div className='content'>
            <div className="GameTitle">Games</div>
            <ul className='horizontal'>
                <li className='element'><DropdownSingle title="Chose amount of player" items={numbers}
                                                        onItemsChanged={(items) => setAmount(items)}/></li>
                <li className='element'><Dropdown title="Chose the genre you want to play" items={genres}
                                                  onItemsChanged={(items) => setGenre(items)}/></li>
                <li><Link to={`/Game/5,${genre}`}>
                    <button className='FilterButton'>Search</button>
                </Link></li>
            </ul>

        </div>
    )

}

export default Game
