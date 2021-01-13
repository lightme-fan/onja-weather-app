import React, { useState, useContext } from 'react'

import { Context } from './ContextProvider'

function InputSearch() {
    const { state, location, setLocation } = useContext(Context)
    const [ inputValue, setInputValue] = useState('')
    
    function handleSearchSubmit(e) {
        e.preventDefault()
        setLocation(inputValue)
    }

    console.log(state);

    return (
        <form onSubmit={handleSearchSubmit} className="search_form">
            <input className="input_search" type="text" name='inputValue' value={inputValue} placeholder="Search for places" onChange={e => setInputValue(e.target.value)}/>
            <button className="button_search">Search</button>
        </form>
    )
}

export default InputSearch
