import React, { useState } from 'react'

function InputSearch() {
    const [ inputValue, setInputValue ] = useState('')
    
    function handleSearchSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSearchSubmit} className="search_form">
            <input className="input_search" type="text" name='inputValue' placeholder="Search for places" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button className="button_search">Search</button>
        </form>
    )
}

export default InputSearch
