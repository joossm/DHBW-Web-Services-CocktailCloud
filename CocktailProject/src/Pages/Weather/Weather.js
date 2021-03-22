import React from 'react';
import "./Weather.css";

import ReactWeather, {useOpenWeather} from 'react-open-weather';


let lat;
let lon;

navigator.geolocation.getCurrentPosition(
    position => {
        console.log(position);
        lat = position.coords.latitude;
        lon = position.coords.longitude;

    },
    function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
    }
)
const ShowWeather = () => {
    const {data, isLoading, errorMessage} = useOpenWeather({
        key: '60983de6de6b5cfac26c6433224fc565',
        lat: lat,
        lon: lon,
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <div className="ShowWeatherContent">
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Your Weather"
            unitsLabels={{temperature: 'C', windSpeed: 'Km/h'}}
            showForecast
        />
        </div>
    );
};


/*
function ShowWeather(match){
    let chosenCity;
    const [city, setCity] = useState({});

    useEffect(() => {
        chosenCity= `${match.match.params.chosenCity}`
        console.log(chosenCity);
        fetchWeather();
        
    },[]);
    

    const fetchWeather = async () =>{


        const weather = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=53dda67aa1964469852160320211703&q=${chosenCity}&aqi=no`
        );

        const item = await weather.json();
        setCity(item);
        console.log(city);
        console.log(city.location);
        console.log(city.current);

    }
    
    return(
        <div className = "ShowWeatherContent">
            <Link to ='/City'> <button className = "ButtonShowCocktails">back</button></Link>
            <ul className="cityContent">


                <li className = "cityName">{city.location.name}</li>
                <li> <img className= "cityImage" src={city.current.condition.icon} alt="Icon" /></li>
                <li>{city.current.condition.text}  {city.current.temp_c}°C</li>
                <li>feels like: {city.current.feelslike_c}°C</li>
                <li>Humidity: {city.current.humidity}%</li>
                <hr/>
                <li>Country: {city.location.country}</li>
                <li>Region: {city.location.region}</li>
                <li>Time : {city.location.localtime}</li>



            </ul>
        </div>
        
    )
}
export default ShowWeather
*/
export default ShowWeather
