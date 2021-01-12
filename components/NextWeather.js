import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './ContextProvider'
import DateFormat from './DateFormat'

function NextWeather() {
    const { isLoading, weather } = useContext(Context)

    const day2 = !isLoading && weather && weather.consolidated_weather[0]
    const day3 = !isLoading && weather && weather.consolidated_weather[1]
    const day4 = !isLoading && weather && weather.consolidated_weather[2]
    const day5 = !isLoading && weather && weather.consolidated_weather[3]
    const day6 = !isLoading && weather && weather.consolidated_weather[4]
    const weekWeather = [day2, day3, day4, day5, day6]
    
    function hancleClickbutton(e) {
        console.log(e.target.id);
        console.log(!isLoading && weekWeather && weekWeather.find(day => day.id));
    }

    return (
        <div>
            {isLoading ? 
                <h2>Loading...</h2> :
                !isLoading && weekWeather && weekWeather.map((day, i) => {
                    console.log(day.applicable_date);
                    return (
                        <button key={day.id} id={day.id} onClick={hancleClickbutton}>
                            <div>
                                <div>{i === 0 ? 'Tomorrow': DateFormat(day.applicable_date)}</div>
                                <div>{day.max_temp.toFixed(0)} &deg;C</div>
                                <div>{day.min_temp.toFixed(0)} &deg;C</div>
                            </div>
                        </button>
                    )
                })
            }            
        </div>
    )
}

export default NextWeather
