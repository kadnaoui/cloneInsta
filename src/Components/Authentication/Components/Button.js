import React from 'react'

export const Button = (props) => {

    return (
        <button className="login-button" disabled={props.disabled} >{props.title}</button>
    )
}
