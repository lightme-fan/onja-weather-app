import React from 'react'
import HighlightWeather from './HighlightWeather'

import InputSearch from './InputSearch'
import NextWeather from './NextWeather'
import WeatherDetails from './WeatherDetails'

function App() {
    return (
        <div>
            <div>
                <InputSearch/>
                <WeatherDetails/>
            </div>
            <div>
                <NextWeather/>
                <HighlightWeather/>
            </div>
        </div>
    )
}

export default App
