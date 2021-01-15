import React, { createContext, useState, useEffect } from 'react'

import useAppReducer from './useAppReducer';

const Context = createContext()

function ContextProvider({children}) {    
    const [ state, dispatch, location, setLocation, fetchedDataByLocation ] = useAppReducer()
    const { isLoading, weather } = state 
    const [ isTypeTempCelsius, setIsTypeTempCelsius ] = useState(true)
      
    return (
        <Context.Provider value={{
            isLoading, 
            weather, 
            dispatch, 
            location, 
            setLocation, 
            fetchedDataByLocation, 
            isTypeTempCelsius, 
            setIsTypeTempCelsius
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
