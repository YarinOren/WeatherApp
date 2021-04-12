import React from 'react';

class Weather extends React.Component {
   
    render() {
        return <div>
            <h1>{this.props.city}</h1>
            {this.props.weather.main &&
            (<div><div>{this.props.weather.main.temp}&#8451;</div>
            <div>{this.props.weather.weather[0].main}</div>
            <div>feels like: {this.props.weather.main.feels_like}&#8451;</div>
            </div>)}
            </div>;
    }
}

export default Weather;