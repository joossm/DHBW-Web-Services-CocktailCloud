import React, {useEffect, useState} from 'react';
import './ShowGames.css'
import {Link} from 'react-router-dom'

//Liste der Spiele, die angezeigt werden
function Game({match}) {


    let filter_information = [];
    let txtfilter;
    const [items, setItems] = useState([]);

    useEffect(() => {

        txtfilter = `${match.params.chosenValues}`;
        if (txtfilter.startsWith(',')) {
            filter_information[0] = 5;
        }
        filter_information = txtfilter.split(',')
        fetchGames();
        console.log(match);

    }, []);


    const fetchGames = async () => {

//Fetch an die lokale/interne API über localHost 8090
//filterInformation[0]=amount of Players
//FilterInformation[1-3]=Genre 
        const games = await fetch(
            `http://localhost:8090/game/getGame?player=${filter_information[0]}&genre1=${filter_information[1]}&genre2=${filter_information[2]}&genre3=${filter_information[3]}`
        );
        const items = await games.json();
        setItems(items);
        console.log(items);

    }
    //die Ausgabe der Spiele wird als Liste gerendert
    return (
        <div className='context'>
            <Link to='/Game'>
                <button className="ButtonShowCocktails">back</button>
            </Link>
            {items.map(item => (
                <h0 key={item.id}>
                    <ul className='horizontal2'>
                        <li>
                            <li className="titleGames">{item.gameName}</li>
                            <ul className="horizontal3">


                                <li className="text">{item.minPlayer} - {item.maxPlayer} Player</li>
                                <li className="text">Age Advisory: {item.ageAdvisory}</li>
                                <li className="text">{item.genre1}</li>
                                <li className="text">{item.genre2}</li>
                                <li className="text">{item.genre3}</li>

                            </ul>
                        </li>
                    </ul>
                </h0>
            ))}
        </div>
    )
}

export default Game;
