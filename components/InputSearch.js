import React, { useState, useContext, Fragment } from 'react'

import { Context } from './ContextProvider'

function InputSearch() {
    const { state, location, setLocation, fetchedDataByLocation, lattLong } = useContext(Context)
    const [ isWorking, setIsWorking ] = useState(false)
    const [ classList, setClassList ] = useState("")
    const [ searchBtnClassName, setsearchBtnClassName ] = useState("")
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
    
    function handleNewLocationClick() {        
        fetchedDataByLocation()
        setLocationValue('')
    }

    console.log(lattLong);

    return (
        <>
            <div className={`search_btn ${searchBtnClassName}`}>
                <button className="search_location_btn" onClick={handleClickSearchButton}>Search for places</button>
                <button className="search_lattlong_btn">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                </button>
            </div>
            <div className = "search_container">
                {isWorking &&
                    <>
                        <form onSubmit={handleSearchSubmit} className={`search_form ${classList}`}>
                            <>
                                <button onClick={handleClickCancel} className="cancel">X</button>
                                <div className="main_search">
                                    <input 
                                        className="input_search" 
                                        type="text" 
                                        name='location' 
                                        value={location}  
                                        onChange={e => setLocation(e.target.value)}
                                    />
                                    <button className="button_search">Search</button>
                                </div>
                            </>
                            <ul className="list_location">
                                {isWorking && locationValue && <li className="location_value" onClick={handleNewLocationClick}>{location}</li>}
                            </ul>
                        </form>
                    </>
                }
            </div>
        </>
    )
}

export default InputSearch
