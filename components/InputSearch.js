import React, { useState } from 'react'

function InputSearch() {
    const [ inputValue, setInputValue ] = useState('')
    
    function handleSearchSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <input type="text" name='inputValue' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}

export default InputSearch
