import React, { useEffect, useReducer, useState } from 'react'

const CORS_URL = 'https://cors-anywhere.herokuapp.com'
const KEY_URL = 'https://www.metaweather.com/api/location'
const LOCATION_URL = 'search/?query='
const LATTLONG = 'search/?lattlong='

const initialValue = {
    isLoading: true,
    weatherData: [],
    isTempCelsius: true,
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_WEATHER_DATA': {
            return {
                ...state,
                isLoading: false,
                weatherData: action.data
            }
        }

        default: {
            return state
        }
    }
    
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    const [ location, setLocation ] = useState('London')
    const [ locationData, setLocationData ] = useState([])
    const [ woeid, setWoeid ] = useState('')

    async function fetchData() {
        const API_URL = `${CORS_URL}/${KEY_URL}/${LOCATION_URL}${location}`
        const res = await fetch(API_URL)
        const dataRes = await res.json()
        const dataWoeid = dataRes[0]?.woeid;
        setWoeid(dataWoeid)
        setLocationData(dataRes)

        const response = await fetch(`${CORS_URL}/${KEY_URL}/${woeid}`)
        dispatch({type: 'FETCH_WEATHER_DATA', data: await response.json()})
        
    }

    useEffect(() => {
        fetchData()
    }, [location, woeid])

    return [ state, dispatch, location, setLocation, locationData, setLocationData ]
}

export default useAppReducer
