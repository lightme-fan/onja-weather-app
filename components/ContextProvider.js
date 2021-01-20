import React, { createContext, useState, useEffect } from 'react'

import useAppReducer from './useAppReducer';

const Context = createContext()

function ContextProvider({children}) {    
    const [ state, dispatch, location, setLocation, fetchedDataByLocation ] = useAppReducer()
    const { isLoading, weather } = state 
    const [ isTypeTempCelsius, setIsTypeTempCelsius ] = useState(true)
    const [ isWorking, setIsWorking ] = useState(false)
    const [ classList, setClassList ] = useState("")
    const [ searchBtnClassName, setsearchBtnClassName ] = useState("")
    const [ inputValue, setInputValue ] = useState("")
    const [ locationValue, setLocationValue ] = useState("")
    
    function handleClickSearchButton() {
        setIsWorking(true)
        setsearchBtnClassName("invisible_btn")
        setClassList("open")
    }

    function handleSearchSubmit(e) {
        e.preventDefault()        
        setLocationValue(location)      
    }
    
    function handleClickCancel() {
        setClassList("remove")
        setsearchBtnClassName("visible_btn")
    }
    
    function handleNewLocationClick(e) {
        fetchedDataByLocation()
    }
      
    return (
        <Context.Provider value={{
            isLoading, 
            weather, 
            dispatch, 
            location, 
            setLocation, 
            fetchedDataByLocation, 
            isTypeTempCelsius, 
            setIsTypeTempCelsius,
            isWorking,
            classList,
            searchBtnClassName,
            inputValue,
            locationValue,
            handleClickCancel,
            handleClickSearchButton,
            handleSearchSubmit,
            handleNewLocationClick
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
