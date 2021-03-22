import React from 'react'
import {Link} from 'react-router-dom';
import './ChooseCity.css'

class ChooseCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {


    }

    render() {
        return (
            <div className="FilterFunctions">
                <form className="Dropdown" onSubmit={this.handleSubmit}><label>
                    <div className="WeatherTitle">Weather</div> 
                    City: 
                    <input className="cityInput" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                    <Link to={`/City/${this.state.value}`}>
                        <button className="cityButton">check Weather</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default ChooseCity
