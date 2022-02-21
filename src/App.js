import React, { Component } from 'react';
import Form from "./components/Form";
import Weather from './components/Weather';



// API Key 
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const API_Key = "d872b1c0c20ae14633ff953672bbccd5";

class App extends Component {

  state = {
    temperature: '',
    humidity: '',
    city: '',
    country: '',
    description: '',
    icon: '',
    erorr: ''
  }

  // get weather func.
  // to be able to connect with the API we should use ( async - await -fetch(`apiUrl` ) ` = backtex in ECMASCRIPT )
  getWeather = async (e) => {
    e.preventDefault();
    // get weather API 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const data = await api.json();


    console.log(data);
    if (city && country) {
      // icon Url
      const iconName = data.weather[0].icon;
      const iconApi = await fetch(`http://openweathermap.org/img/wn/${iconName}@2x.png`)
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: iconApi.url,
        erorr: ''
      });
    }
    else {
      this.setState({
        temperature: '',
        humidity: '',
        city: '',
        country: '',
        description: '',
        icon: '',
        erorr: 'please Enter Data'
      });
    }
    e.target.elements.city.value = '';
    e.target.elements.country.value = ''
  }

  render() {
    return (
      <div className="Wrapper">
        <div className='form-container'>

          <h3 className='Form-title'>Daily Weather</h3>
          < Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            icon={this.state.icon}
            erorr={this.state.erorr}
          />
        </div>
      </div >
    );
  }
}

export default App;
