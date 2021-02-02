import React, { useContext } from 'react'

import { DateFormat } from '../../Date/dateFormat'
import celciusToFahrenet from '../../converter/temperatureConverter'
import weatherIcons from './../../../weatherImages'
import { Context } from '../../context/contextProvider'

import { Container, Image, Temperature, WeatherName, DateSTtyle, ExactDate, SVG } from './style'

function Sidebar({children, ...restProps}) {
    const { isLoading, weatherData, location } = useContext(Context)
    const today = !isLoading && weatherData && weatherData.consolidated_weather[0]

    const icon = weatherIcons.find(item => item.title === today.weather_state_name)
    
    return (
        <Container {...restProps}>
            {children}
            <>
                {!isLoading && weatherData &&
                    <> 
                        <Image src={icon?.image} alt={icon?.title}/>
                        <Temperature>{today.the_temp.toFixed(0)} ºC</Temperature>
                        <WeatherName>{today.weather_state_name}</WeatherName>
                        <DateSTtyle>
                            <ExactDate>Today &nbsp; . &nbsp; {DateFormat(new Date())}</ExactDate>
                            <div>
                                <SVG className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></SVG>
                                <span>{weatherData?.title}</span>
                            </div>
                        </DateSTtyle> 
                    </>
                }
            </>
        </Container>
    )
}

export default Sidebar
