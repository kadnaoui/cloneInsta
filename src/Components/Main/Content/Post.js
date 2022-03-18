import React from 'react'
import { TopBar } from './components/TopBar';
import { Time, showComments } from './components/PubsFunctions';
import { MainImage } from './components/MainImage';
import { AuthContext } from '../../../Contexts/authContext';
const Post = (props) => {
    const { post, setAccount, setPost } = props;
    const { Eddit, user, users } = React.useContext(AuthContext);
    const idd = post.id;
    const [comment, setComment] = React.useState('');
    const [dcomments, setDcomments] = React.useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const c = post.pubs.comments;
        const id = post.pubs.comments.length + 1;

        c.push({ id: id, user: user.username, text: comment });
        setComment('')
        Eddit({ ...post, pubs: { ...post.pubs, comments: c } }, idd)
    }
    const LikeOp = () => {
        let Likes = post.pubs.likes;
        Likes.find(x => x.id == user.id) ? Likes = Likes.filter(x => x.id != user.id) : Likes.push({ id: user.id });
        Eddit({ ...post, pubs: { ...post.pubs, likes: Likes } }, idd);
        setPost({ ...post, pubs: { ...post.pubs, likes: Likes } });


    }


    return (
        <div className="container2 co">
            <TopBar userId={post.userId} users={users} setAccount={setAccount} />

            <MainImage src={post.pubImage} />
            <div className="footer">
                <div className="icons2">
                    <div className="left_side">
                        <i className={post.pubs.likes.find(x => x.id == user.id) ? "fa fa-heart" : "fa fa-heart-o"}
                            aria-hidden="true" onClick={() => { LikeOp(post, user, Eddit, idd, 2) }}></i>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="right_side">
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="likeCount">
                    <p> <b> {post.pubs.likes.length + ' '}</b> Likes</p>
                </div>
                <div className="content">
                    <p><b>{post.user}</b> {post.description} </p>
                </div>
                {post.pubs.comments.length > 0 ? <div className='comments'>
                    {showComments(post, dcomments)}

                    <a className='controleComments' onClick={() => setDcomments(dcomments + 2)}> {dcomments == 0 ? 'Show comments' : 'Load more comments'}</a>
                    {dcomments > 0 && (<a className='controleComments' onClick={() => setDcomments(0)}> hide comments</a>)}
                    <a className='time'>{Time(post)}</a>

                </div>
                    : <div className='comments'><a className='controleComments'> No comments</a></div>}
                <form className="comments_box" onSubmit={onSubmit}>
                    <div className="icon">😊</div>
                    <div className="input_field">
                        <input type="text" placeholder="Add a Comments..." value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>
                    <div className="btn"><button disabled={comment ? false : true} > Post </button></div>
                </form>
            </div>
        </div>
    )
}
export default Post;