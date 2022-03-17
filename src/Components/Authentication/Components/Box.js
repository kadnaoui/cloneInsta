import React from 'react';
import { Link } from "react-router-dom";

export const Box = (props) => {
    const { p, a, link } = props;
    return (
        <div className="box">
            <p>{p}<Link className="signup" to={link}>{a}</Link></p>
        </div>
    )
}
