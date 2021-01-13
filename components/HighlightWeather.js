import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import DateFormat from './DateFormat'
import { Context } from './ContextProvider'

function HighlightWeather() {
    let { id } = useParams()
    const { isLoading, weather } = useContext(Context)

    const weatherDay = !isLoading && weather && weather.consolidated_weather.find(day => day.id === Number(id))
    console.log(weatherDay);
    return (
        <div className="highlight">
            <h3 className="highlight_heading">{DateFormat(weatherDay.applicable_date)} Highlight</h3> 
            <div className="highlight_detail">
                <div className="highlight_content">
                    <p className="highlight_content-heading">Wind Status</p>
                    <h4 className="highlight_content-desc">{weatherDay.wind_speed} mph</h4>
                    <p className="highlight_content-wind">{weatherDay.wind_direction_compass}</p>
                </div>
                <div className="highlight_content">
                    <p className="highlight_content-heading">Humidity</p>
                    <h4 className="highlight_content-desc">{weatherDay.humidity} %</h4>
                    <label className="label_progress">
                        <div>
                            <div>01</div>
                            <div>50</div>    
                            <div>500</div>
                        </div> 
                        <progress id="file" max="100" value={weatherDay.humidity} />
                    </label>
                </div>
                <div className="highlight_content">
                    <p className="highlight_content-heading">Visibility</p>
                    <h4 className="highlight_content-desc">{weatherDay.visibility} miles</h4>
                </div>
                <div className="highlight_content">
                    <p className="highlight_content-heading">Air Pressure</p>
                    <h4 className="highlight_content-desc">{weatherDay.air_pressure} mb</h4>
                </div>
            </div>
        </div>
    )
}

export default HighlightWeather

/*
air_pressure: 1022.5
applicable_date: "2021-01-17"
created: "2021-01-13T03:20:04.270836Z"
humidity: 77
id: 5787410416795648
max_temp: 8.18
min_temp: 3.825
predictability: 75
the_temp: 6.5
visibility: 14.276935198441103
weather_state_abbr: "lr"
weather_state_name: "Light Rain"
wind_direction: 305.58886737520726
wind_direction_compass: "NW"
wind_speed: 6.698620869779158
*/ 