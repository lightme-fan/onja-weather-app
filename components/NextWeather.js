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
    
    function hancleClickbutton(e) {
        const findDay = !isLoading && weekWeather && weekWeather.find(day => day.id === Number(e.target.id))
        console.log(findDay);
        setNextDayWeather(findDay)
    }
    
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

/*
air_pressure: 1015.5
applicable_date: "2021-01-16"
created: "2021-01-12T09:20:03.669384Z"
humidity: 88
id: 5444699675426816
max_temp: 8.235
min_temp: 1.5050000000000001
predictability: 77
the_temp: 6.0649999999999995
visibility: 6.433677324425355
weather_state_abbr: "hr"
weather_state_name: "Heavy Rain"
wind_direction: 175.84305613064407
wind_direction_compass: "S"
wind_speed: 6.318748104806597
*/ 