import React, {useState, useEffect, createContext} from 'react';

const Context = createContext();

// cors API
const CORS_API = 'https://cors-anywhere.herokuapp.com/';

// This will provide data to all the consumer
function GlobalContextProvider({children}) {
  const [location, setLocation] = useState('london');// Default location
  const [query, setQuery] = useState([])
  const [woeid, setWoeid] = useState({}); // Default woeid
  const [isLoading, setIsLoading] = useState(true); // Loading the page
  const [isClicked, setIsClicked] = useState(false);
  const [isCeluis, setIsCeluis] = useState(false);

  // Fetch the weather data
  async function getWeather() {

    // Fetch weather location
    const API_URL_LOC = `${CORS_API}https://www.metaweather.com/api/location/search/?query=${location}`
      const fetchWeatherLocData = await fetch(API_URL_LOC);
      const data = await fetchWeatherLocData.json()
      setQuery(data)

      // Check if there something inside of the data location
      if(data.length) {
        setIsLoading(false);
        // Fetch the woeid data in order the get data details
        const API_URL_WOEID = `${CORS_API}https://www.metaweather.com/api/location/${data[0].woeid}/`;
        const fetchWeatherWoeid = await fetch(API_URL_WOEID);
        const weatherData = await fetchWeatherWoeid.json()
        setWoeid(weatherData)
      }
  }

  // get the data
  useEffect(() => {
    setTimeout(() => {
      getWeather()
    }, 500)
  }, [location])

  // Submit the data
  function submitWeather(e) {
    e.preventDefault();
    getWeather();
    setIsClicked(false)
  }

  // Show the pannel
  function handleClick() {
    setIsClicked(true)
  }

     // Toggle the units
     function convertUnitCeluisIntoFar(){
      setIsCeluis(true)
    }

    function convertFarUnitIntoCeluis() {
      setIsCeluis(false)
    }

  return (
    <Context.Provider value={{
      location,
      woeid,
      isLoading,
      isClicked,
      isCeluis,
      query,
      convertFarUnitIntoCeluis,
      convertUnitCeluisIntoFar,
      submitWeather,
      setLocation,
      handleClick,
    }}>
       {children}
    </Context.Provider>
  )
}

export{ GlobalContextProvider, Context}