import React, { createContext } from 'react'
import useAppReducer from '../reducer/useAppReducer'

const Context = createContext()

function ContextProvider({children}) {
    const [ state, dispatch ] = useAppReducer()
    const { isLoading, weatherData } = state
    
    return (
        <Context.Provider value={{isLoading, weatherData, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
