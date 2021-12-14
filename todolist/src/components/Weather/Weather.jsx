import React, { Component, Fragment } from "react";
import WeatherApi from '../WeatherApi/WeatherApi'
import axios from 'axios'

export class Weather extends Component {
  constructor(props){
    super(props);
    this.state = { weatherObject:{}}
  }

  handlerLoadWeather = async(event) => {
    event.preventDefault();
    const name = event.target.elements.name.value
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4d7813dd8a18abdaa4280a9249912f58`);
    const data = resp.data;
    const info = {"name":data.name,"temp":data.main.temp, "weather":data.weather[0].main}

    this.setState({
      weatherObject: info
    })
  }

  render() {
    return (<Fragment>
              <form onSubmit={this.handlerLoadWeather}>
                <label htmlFor="name">Ciudad: </label>
                <input type="text" name="name"></input>
                <input type="submit"/>
              </form>
              <WeatherApi city={this.state.weatherObject}/>
            </Fragment>)
  }
}

export default Weather;
