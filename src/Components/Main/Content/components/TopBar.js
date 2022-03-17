import React from 'react'
import { Link } from 'react-router-dom';

export const TopBar = (props) => {
    const { userId, users, setAccount } = props;
    const user = users.find(x => x.id == userId)
    return (
        <div className="top_bar">
            <div className="profile_img">
                <img src={user.profileImage}
                    alt="" />
                <span><b><Link to='/account' onClick={() => setAccount(user.id)}>{user.username}</Link></b></span>
            </div>
            <i className="fa fa-ellipsis-h"></i>
        </div>
    )
}
