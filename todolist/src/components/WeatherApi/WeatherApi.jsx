import React, { Fragment } from "react";

const WeatherApi = ({city}) => {
  return (
    <div>
      {
              <Fragment key ={city.name}>
                {/* <p>Nombre de la ciudad: {city.name}</p> */}
                <p>Tiempo atmosférico: {city.weather}</p>
                <p>Temperatura media: {city.temp}K</p>
              </Fragment>
      }
    </div>
  )
}

WeatherApi.defaultProps = {
  city: {}
}

export default WeatherApi;


