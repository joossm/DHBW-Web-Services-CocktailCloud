import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header.js'
import './Style/App.css'
import Drink from './Pages/Drink/Drink.js'
import Home from "./Pages/Home/Home";
import DrinksDetail from './Pages/Drink/SingleDrinks/DrinksDetail';
import ShowCocktails from './Pages/Drink/ShowCocktails';
import Game from './Pages/Games/Game';
import ShowGames from './Pages/Games/ShowGames';
import Weather from './Pages/Weather/Weather';

//main Class, entscheided welche Komponente gerendert werden
//wird über Switch durch die URL definiert
function App() {
    return (
        <Router>
            <div className="CocktailCloud">
                <div><Header/></div>
                <div className="mainContent">
                    <Switch> 
                        <Route path="/" exact component={Home}/>
                        <Route path="/Drink" exact component={Drink}/>
                        <Route path="/DrinkID/:id" component={DrinksDetail}/>
                        <Route path="/Drink/:chosenAlcohol" component={ShowCocktails}/>
                        <Route path="/Drink/,:chosenAlcohol" component={ShowCocktails}/>
                        <Route path="/Drink/:chosenAlcohol," component={ShowCocktails}/>
                        <Route path="/Game" exact component={Game}/>
                        <Route path="/Game/:chosenValues" component={ShowGames}/>
                        <Route path="/City" component={Weather}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;
