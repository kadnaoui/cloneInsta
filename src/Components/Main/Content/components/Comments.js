import React from 'react'

export const Comments = (props) => {
    return (
        <div className='comment'>
            <p>  <span className='user'><b>{props.user + '  '}</b></span>{'  ' + props.text}</p>
        </div>
    )
}
