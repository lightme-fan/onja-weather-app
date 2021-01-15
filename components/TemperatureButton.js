import React, { useContext, useState } from 'react'
import { Context } from './ContextProvider'

function TemperatureButton({celsiusOnClick, farheneitOnClick}) {
    const { isLoading, weather, isTypeTempCelsius, setIsTypeTempCelsius } = useContext(Context)
    const [ celsiusClassName, setCelsiusClassName ] = useState("celsiusOnActive")
    const [ farheneitClassName, setFarheneitClassName ] = useState("")
    const [ isTempCelsius, setIsTempCelsius ] = useState(true)
    
    function handleCelsuisTempClick() {
        setIsTypeTempCelsius(true)
        setCelsiusClassName("celsiusOnActive")
    }

    function handleFarheneitTempClick() {
        setIsTypeTempCelsius(false)
        setCelsiusClassName("")
        setFarheneitClassName("farheneitOnActive")
    }

    return (
        <div className="temp">
            <button className={`${isTempCelsius} ? ${celsiusClassName} : temp_unit`} onClick={handleCelsuisTempClick}>&deg;C</button>
            <button className={`${isTempCelsius} ? ${farheneitClassName} : temp_unit`} onClick={handleFarheneitTempClick}>&deg;F</button>
        </div>
    )
}

export default TemperatureButton
