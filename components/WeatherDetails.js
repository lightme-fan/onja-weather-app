import React, { useContext, useReducer } from 'react'
import { Context } from './ContextProvider'
import DateFormat from './DateFormat'

function WeatherDetails() {
    const { isLoading, weather } = useContext(Context)
    
    const dailyWeather = !isLoading && weather && weather.consolidated_weather[0]
    
    return (
        <div>
            { isLoading ?
                <h2>Loading...</h2> : 
                <div>
                    <h2>{dailyWeather.the_temp.toFixed(0)} &deg;C</h2>
                    <h3>{dailyWeather.weather_state_name}</h3>
                    <div>Today. {DateFormat(new Date())}</div>
                    <p>{weather.title}</p>
                </div>
            }
        </div>
    )
}
// : weather.map(we => <p>{we.consolidate_weather}</p>)

export default WeatherDetails

/*
air_pressure: 1025
applicable_date: "2021-01-11"
created: "2021-01-12T06:20:16.464785Z"
humidity: 74
id: 5428877015908352
max_temp: 13.5
min_temp: 8.57
predictability: 71
the_temp: 12.215
visibility: 12.186021136562475
weather_state_abbr: "hc"
weather_state_name: "Heavy Cloud"
wind_direction: 40.55557825455098
wind_direction_compass: "NE"
wind_speed: 3.692448282009067
*/ 

/*
export default function dateFormat(date) {
    
}
*/ 