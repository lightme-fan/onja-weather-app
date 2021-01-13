import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Context } from '././ContextProvider'
import HighlightWeather from './HighlightWeather'
import InputSearch from './InputSearch'
import NextWeather from './NextWeather'
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
                <NextWeather/>
                <Switch>
                    <Route path="/home/:id">
                        <HighlightWeather/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App
