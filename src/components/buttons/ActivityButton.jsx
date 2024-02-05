import React from 'react'

const ActivityButton = ({ state, text_color, background, padding_x, padding_y }) => {
    return (

        <button className={`text-${text_color} bg-${background} px-${padding_x} py-${padding_y} rounded-md`}>{state}</button>

    )
}

export default ActivityButton


