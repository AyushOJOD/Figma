import React from 'react'

const LoginPageButton = ({ text, padding, textColor }) => {
    return (
        <button className={`uppercase text-center bg-gray-800 text-black w-full p-${padding} rounded-md text-${textColor}`}>{text}</button>

    )
}

export default LoginPageButton
