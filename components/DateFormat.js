import React from 'react'

function DateFormat(date) {
    const day = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun']   
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Okt','Nov','Dec'] 

    let dateFormat = new Date(date)
    let newDay = day[dateFormat.getDay()]
    let newDate = dateFormat.getDate()
    let newMonth = month[dateFormat.getMonth()]

    return `${newDay}, ${newDate} ${newMonth}`
}

export default DateFormat
