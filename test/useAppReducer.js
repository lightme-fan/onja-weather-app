import React, { useReducer, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const CORS_URL = 'https://cors-anywhere.herokuapp.com'
const KEY_URL = 'https://www.metaweather.com/api/location'
const LOCATION_URL = 'search/?query='
const LATTLONG = 'search/?lattlong='


const initialValue = {
    isLoading: true,
    weather: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_WEATHER_DATA': {
            return {
                ...state,
                isLoading: false,
                weather: action.data
            }
        }

        default: {
            return state
        }
    }
    
}

function useAppReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    
    const [location, setLocation ] = useState('London')
    // const [ lattLong, setLattLong ] = useState([])
    const [ lattlong, setLattlong ] = useState("")
    // const [ long, setLong ] = useState("")
    const [ data, setData ] = useState([])
    
    const fetchedDataByLocation = async () => {
        
        const res = await axios(`${CORS_URL}/${KEY_URL}/${LOCATION_URL}${location}`)
        const locationData = res.data;
        setData(locationData)
        const woeid = locationData[0]?.woeid;
        

        // const lattlongNum = locationData.map(loc => loc.latt_long);
        // setLattlong(lattlongNum)
        // // console.log(lattlong);

        // // const resTow = await axios(`${CORS_URL}/${KEY_URL}`)
        // // const secondData = resTow.data
        // // console.log(secondData);

        // const diffRes = await axios(`${CORS_URL}/${KEY_URL}/${LATTLONG}${lattlongNum}`)
        // const lattlongData = diffRes.data
        // // setLattLong(lattlongData)

        const response = await axios(`${CORS_URL}/${KEY_URL}/${woeid}`)
        dispatch({type: 'FETCH_WEATHER_DATA', data: response.data})

    }
    
    useEffect(() => {
        fetchedDataByLocation()
    }, [])

    return [ state, dispatch, location, setLocation, fetchedDataByLocation]
}

export default useAppReducer
