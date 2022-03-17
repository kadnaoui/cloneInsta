import React from 'react'
import ReactDOM from 'react-dom'
export const Modal = (props) => {

    return ReactDOM.createPortal(
        props.children
        ,
        document.querySelector('#portal'))


}
