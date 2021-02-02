import React, { useContext, useState } from 'react'
import { Context } from '../../context/contextProvider'

function Search() {
    const { 
        location, 
        setLocation, 
        newLocation, 
        handleSearch, 
        inputValue, 
        setInputValue 
    } = useContext(Context)
    const [ searchValue, setSearchValue ] = useState('')
    
    function handleChange(e) {
        setLocation(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    placeholder="Search location"
                    name="search"
                    value={location}
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
            {/* <ul>
                {newLocation.map(loc => 
                    <li key={loc.title}>{loc.title}</li>
                )}
            </ul> */}
        </div>
    )
}

export default Search
