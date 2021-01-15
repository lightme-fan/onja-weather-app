import React, { useContext } from 'react'
import { Context } from './ContextProvider'

function TemperatureButton({celsiusOnClick, farheneitOnClick}) {
    const { isLoading, weather, isTypeTempCelsius, setIsTypeTempCelsius } = useContext(Context)
    
    function handleCelsuisTempClick() {
        setIsTypeTempCelsius(true)
        console.log('Clicked');
    }

    function handleFarheneitTempClick() {
        setIsTypeTempCelsius(false)
        console.log('Clicked To Farheneit');
    }

    return (
        <div className="temp">
            <button className="temp_unit" onClick={handleCelsuisTempClick}>&deg;C</button>
            <button className="temp_unit" onClick={handleFarheneitTempClick}>&deg;F</button>
        </div>
    )
}

export default TemperatureButton
