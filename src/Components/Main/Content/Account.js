import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/authContext'
import './Account.css'

export const Account = (props) => {


    const { users, user, addFollow, df, pubs } = React.useContext(AuthContext);
    let { id } = useParams();
    const Account = id;

    const follow = () => {
        let followers = user.followers;
        if (followers.find(x => x.id == Account)) { addFollow(followers.filter(x => x.id != Account), user.id); }
        else { followers.push({ id: Account }); addFollow(followers, user.id); console.log(user); }
    }
    const y = pubs.filter(x => x.userId == Account)

    const x = users.find(u => Account == u.id)
    const displayPosts = (y) => {
        return y.map(x => {
            return (
                <Link className='post_image' key={x.id} to='/post' onClick={() => props.setPost(x)}>

                    <img src={x.pubImage} />

                </Link>
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
                    <div className='details'> {x.username} {user.id != Account ? (<a className='follow' style={{ color: 'blue', cursor: 'pointer' }} onClick={follow}>{user.followers.find(x => x.id == Account) ? 'Unfollow' : 'Follow'}</a>) : ''}</div>
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
