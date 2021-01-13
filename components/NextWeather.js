import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './ContextProvider'
import DateFormat from './DateFormat'

function NextWeather({onClick}) {
    const { isLoading, weather } = useContext(Context)

    const [ nextDayWeather, setNextDayWeather ] = useState(null)

    const day2 = !isLoading && weather && weather.consolidated_weather[0]
    const day3 = !isLoading && weather && weather.consolidated_weather[1]
    const day4 = !isLoading && weather && weather.consolidated_weather[2]
    const day5 = !isLoading && weather && weather.consolidated_weather[3]
    const day6 = !isLoading && weather && weather.consolidated_weather[4]
    const weekWeather = [day2, day3, day4, day5, day6]
    
    const highlight = !isLoading && nextDayWeather
    return (
        <>
            <div className="next_weather">
                {isLoading ? 
                    <h2>Loading...</h2> :
                    !isLoading && weekWeather && weekWeather.map((day, i) => {
                        return (
                            <div className="weather_this-day">
                                <Link to={`/home/${day.id}`} className="weather_this-day-detail" key={day.id}>
                                    <div className="day">{i === 0 ? 'Tomorrow': DateFormat(day.applicable_date)}</div>
                                    <img src={`https://www.metaweather.com//static/img/weather/${day.weather_state_abbr}.svg`} alt={day.title}/>
                                    <div className="temperature">
                                        <div className="max_temp">{day.max_temp.toFixed(0)} &deg;C</div>
                                        <div className="min_temp">{day.min_temp.toFixed(0)} &deg;C</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default NextWeather
