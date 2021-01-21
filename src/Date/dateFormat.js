import React from 'react'

export function DateFormat(date) {
    const day = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat']   
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Okt','Nov','Dec'] 

    let dateFormat = new Date(date)
    let newDay = day[dateFormat.getDay()]
    let newDate = dateFormat.getDate()
    let newMonth = month[dateFormat.getMonth()]

    return `${newDay}, ${newDate} ${newMonth}`
}
