import React from 'react'
import { Link } from 'react-router-dom';
import df from '../../../du.png'

export const TopBar = (props) => {
    const { userId, users } = props;
    const user = users.find(x => x.id == userId)
    return (
        <div className="top_bar">
            <div className="profile_img">
                <img src={user.profileImage ? user.profileImage : df}
                    alt="" />
                <span><b><Link to={`/account/${user.id}`} >{user.username}</Link></b></span>
            </div>
            <i className="fa fa-ellipsis-h"></i>
        </div>
    )
}
