import React from 'react'
import { Link } from 'react-router-dom';

export const Sugestion = (props) => {
    const { users, addFollow, user, df } = props;


    const follow = () => {

        let followers = user.followers;
        if (followers.find(x => x.id == users.id)) { addFollow(followers.filter(x => x.id != users.id), user.id); }
        else { followers.unshift({ id: users.id }); addFollow(followers, user.id); }





    }
    return (
        <div className='sugggestion' >
            <div className='sinfo' >
                <img src={users.profileImage ? users.profileImage : df} className='profilImg'></img>
                <Link to={`/account/${users.id}`} >{users.username}</Link>
            </div>
            <a className='follow' style={{ color: 'blue', cursor: 'pointer' }} onClick={follow}>{user.followers.find(x => x.id == users.id) ? 'Unfollow' : 'Follow'}</a>
        </div>
    )
}
