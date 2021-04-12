import './App.css';
import Weather from './Weather';
import SearchBar from './SearchBar';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weather: {}
    }
  }

  onSearch = (text) => {
    this.get(text)
  }
  
get = (text) => {
  const city = text;
  const key = 'fce50b519906b59226870c5efd87e3a3';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(url)
      .then(response => {
      // handle success
      if(response && response.data && response.status === 200){
         this.setState({ weather: response.data})
      }
      })
}

componentDidMount() {
  this.get("London")
}

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            onSearch={this.onSearch}
          />
          <Weather 
            city={this.state.weather.name} weather={this.state.weather}
          />
        </header>
      </div>
    );
  }
  
}

export default App;