import React, { useContext } from 'react'
import { Context } from './ContextProvider'

function HighlightWeather() {
    const { isLoading, weather } = useContext(Context)

    return (
        <div>
            <h2>Highlight 🥰 </h2>
        </div>
    )
}

export default HighlightWeather
