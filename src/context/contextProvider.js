import React, { useState, createContext } from 'react'
import useAppReducer from '../reducer/useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    const [ state, dispatch, location, setLocation, locationData, setLocationData ] = useAppReducer()
    const { isLoading, weatherData } = state
    const [ inputValue, setInputValue ] = useState('')
    const [ newLocation, setNewLocation ] = useState([])
    
    function handleSearch(e) {
        e.preventDefault()
        const fliteredLocation = locationData.filter(item => item.title === location)
        console.log(fliteredLocation);   
    }

    return (
        <Context.Provider value={{
            isLoading,
            weatherData,
            dispatch,
            location,
            setLocation,
            locationData,
            inputValue, 
            setInputValue,
            newLocation,
            handleSearch
         }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
