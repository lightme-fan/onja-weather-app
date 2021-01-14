import React, { useState, useContext, Fragment } from 'react'

import { Context } from './ContextProvider'

function InputSearch() {
    const { state, location, setLocation, fetchedDataByLocation } = useContext(Context)
    const [ isWorking, setIsWorking ] = useState(false)
    const [ classList, setClassList ] = useState("")
    const [ locationValue, setLocationValue ] = useState("")
    
    function handleClickSearchButton() {
        setIsWorking(true)
        setClassList("open")
    }

    function handleSearchSubmit(e) {
        e.preventDefault()
        setLocationValue(location)
    }
    
    function handleClickCancel() {
        setClassList("remove")
    }
    
    function handleNewLocationClick() {        
        fetchedDataByLocation()
        setLocationValue('')
    }

    return (
        <div className = "search_container">
            <button className="search_button" onClick={handleClickSearchButton}>Search for places</button>
            {isWorking &&
                <>
                    <form onSubmit={handleSearchSubmit} className={`search_form ${classList}`}>
                        <>
                            <button onClick={handleClickCancel} className="cancel">X</button>
                            <input 
                                className="input_search" 
                                type="text" 
                                name='location' 
                                value={location}  
                                onChange={e => setLocation(e.target.value)}
                            />
                            <button className="button_search">Search</button>
                        </>
                        <ul className="list_location">
                            {isWorking && locationValue && <li className="location_value" onClick={handleNewLocationClick}>{location}</li>}
                        </ul>
                    </form>
                </>
            }
        </div>
    )
}

export default InputSearch
