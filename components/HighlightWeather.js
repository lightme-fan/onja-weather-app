import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import DateFormat from './DateFormat'
import { Context } from './ContextProvider'

function HighlightWeather() {
    let { id } = useParams()
    const { isLoading, weather } = useContext(Context)

    function fixed(x) {
        return Number.parseFloat(x).toFixed(2);
    }      

    const weatherDay = !isLoading && weather && weather.consolidated_weather.find(day => day.id === Number(id))
    console.log(weatherDay);
    return (
        <div className="highlight">
            <h3 className="highlight_heading">{DateFormat(weatherDay.applicable_date)} Highlight</h3> 
            <div className="highlight_detail">
                <div className="highlight_content">
                    <p className="highlight_content-heading">Wind Status</p>
                    <h4 className="highlight_content-desc">{fixed(weatherDay.wind_speed)} mph</h4>
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
                    <h4 className="highlight_content-desc">{fixed(weatherDay.visibility)} miles</h4>
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
