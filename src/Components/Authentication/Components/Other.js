import React from 'react'

export const Other = (props) => {
    const { title, icon } = props;
    return (
        <div className="other">
            <button className="fb-login-btn" type="button">
                <i className={icon}></i>
                <span className="">{title}</span>
            </button>
        </div>
    )
}
