import React, { createContext, useState, useEffect } from 'react'

import useAppReducer from './useAppReducer';

const Context = createContext()

function ContextProvider({children}) {    
    const [ state, dispatch ] = useAppReducer()
    const { isLoading, weather } = state 
      
    return (
        <Context.Provider value={{isLoading, weather, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
