import React, { useContext } from 'react'
import { Context } from './ContextProvider'

function TemperatureButton() {
    const { isLoading, weather } = useContext(Context)

    function handleCelsiusBtn(celsius) {
        return celsius * 9/5 + 32;
    }
    
    function handleFBtn(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    return (
        <div className="temp">
            <p className="temp_unit" onClick={handleCelsiusBtn}>&deg;C</p>
            <p className="temp_unit" onClick={handleFBtn}>&deg;F</p>
        </div>
    )
}

export default TemperatureButton
