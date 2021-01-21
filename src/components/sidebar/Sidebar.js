import React, { useContext } from 'react'

import { DateFormat } from '../../Date/dateFormat'
import celciusToFahrenet from '../../converter/temperatureConverter'
import weatherIcons from './../../../weatherImages'
import { Context } from '../../context/contextProvider'

import { Container, Image, Temperature, WeatherName, Date } from './style'

function Sidebar({children, ...restProps}) {
    const { isLoading, weatherData } = useContext(Context)
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
                        <Date>
                            <p>Today . {DateFormat(new Date())}</p>
                            <p className="weather_title">{today.title}</p>
                        </Date> 
                    </>
                }
            </>
        </Container>
    )
}

export default Sidebar
