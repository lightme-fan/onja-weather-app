import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Context } from '././ContextProvider'
import HighlightWeather from './HighlightWeather'
import AnotherHighlight from './AnotherHighlight'
import InputSearch from './InputSearch'
import NextWeather from './NextWeather'
import TemperatureButton from './TemperatureButton'
import WeatherDetails from './WeatherDetails'

function App() {
    const { isLoading } = useContext(Context)
    return (
        <div className="container">
            <div className="content-1">
                <InputSearch/>
                <WeatherDetails/>
            </div>

            <div className="content-2">
            {isLoading ?
                <h2 className="loading">Loading....</h2> :
                <>
                    
                    <TemperatureButton/>
                    <NextWeather/>
                    <Switch>
                        <Route path="/">
                            <HighlightWeather/>
                        </Route>
                        <Route path="/home/:id">
                            <AnotherHighlight/>
                        </Route>
                    </Switch>
                </>
            }
            </div>
        </div>
    )
}

export default App
