import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../../Assets/Home.png'
import Cocktail from '../../Assets/Cocktail.png'
import logo from '../../Assets/LogoIcon.png'
import Dice from '../../Assets/Dice.png'
import Weather from '../../Assets/Weather.png';
import "./Header.css"

const Header = () => {

//Header als Navigationsleiste definiert
//Icons mit Links zu den Pages
    return (

        <nav>
            <div className="Header-header">
                <div>
                    <Link to="/">
                        <img src={logo} className="Header-logo" alt="logo"/>
                    </Link>
                </div>
                <div className="Header-rightIcons">

                    <Link to="/Drink">
                        <img src={Cocktail} className="Header-icon" alt="Drink"/>
                    </Link>
                    <Link to="/Game">
                        <img src={Dice} className="Header-icon-Dice" alt="Games"/>
                    </Link>
                    <Link to="/City">
                        <img src={Weather} className="Header-icon" alt="Rating"/>
                    </Link>
                    <Link to="/">
                        <img src={Home} className="Header-icon" alt="Home"/>
                    </Link>

                </div>
            </div>

        </nav>
    );
}

export default Header;
