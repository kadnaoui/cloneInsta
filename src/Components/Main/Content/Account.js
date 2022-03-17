import React from 'react'
import { AuthContext } from '../../../Contexts/authContext'
import './Account.css'

export const Account = (props) => {
    const { users, user, addFollow, df, pubs } = React.useContext(AuthContext);
    const Account = props.account;
    const follow = () => {
        let followers = user.followers;
        if (followers.find(x => x.id == users.id)) { addFollow(followers.filter(x => x.id != users.id), user.id); }
        else { followers.push({ id: users.id }); addFollow(followers, user.id); }
    }
    const y = pubs.filter(x => x.userId == Account)

    const x = users.find(u => Account == u.id)
    const displayPosts = (y) => {
        return y.map(x => {
            return (
                <div key={x.id} className='post_image'>
                    <img src={x.pubImage} />
                </div>
            )
        })
    }

    return (
        <div className='Account'>
            <div className='Profile'>
                <div className='Account-image'>
                    <img src={x.profileImage ? x.profileImage : df}></img>
                </div>
                <div className='Account-details'>
                    <div className='details'> {x.username} {user.id != Account ? (<a className='follow' style={{ color: 'blue', cursor: 'pointer' }} onClick={follow}>{user.followers.find(x => x.id == users.id) ? 'Unfollow' : 'Follow'}</a>) : ''}</div>
                    <div className='details'>
                        <div>Posts <span><b>{y.length}</b></span></div>
                        <div>following <span><b>{x.followers.length}</b></span></div>

                    </div>
                    <div className='details'><b>{x.fullname}</b> </div>
                </div>

            </div>
            <hr></hr>
            <div className='Posts'>
                {displayPosts(y)}
            </div>
        </div>
    )

}
