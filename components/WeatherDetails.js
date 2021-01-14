import React, { useContext, useReducer } from 'react'

import { Context } from './ContextProvider'
import DateFormat from './DateFormat'
import weatherImages from '../weatherImages'

function WeatherDetails() {
    const { isLoading, weather } = useContext(Context)
    
    const dailyWeather = !isLoading && weather && weather.consolidated_weather[0]
    const images = weatherImages.find(image => image.title === dailyWeather.weather_state_name)

    return (
        <div>
            { isLoading ?
                <h2 className="loading">Loading...</h2> : 
                <div className="weather_detail">
                    <img src={images?.image} alt={images?.title}/>
                    <h2 className="weather_temp">{dailyWeather.the_temp.toFixed(0)} &deg;C</h2>
                    <h3 className="weather_state_name">{dailyWeather.weather_state_name}</h3>
                    <div className="weather_today">
                        <p>Today. {DateFormat(new Date())}</p>
                        <p className="weather_title">{weather.title}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default WeatherDetails
