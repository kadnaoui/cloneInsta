import React from 'react'
import { TopBar } from './TopBar';
import { Time, showComments, LikeOp } from './PubsFunctions';
import { MainImage } from './MainImage';
const Publications = (props) => {
    const { infos, Eddit, user, users } = props;
    const idd = infos.id;
    const [comment, setComment] = React.useState('');
    const [dcomments, setDcomments] = React.useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const c = infos.pubs.comments;
        const id = infos.pubs.comments.length + 1;

        c.push({ id: id, user: user.username, text: comment });
        setComment('')
        Eddit({ ...infos, pubs: { ...infos.pubs, comments: c } }, idd)




    }


    return (
        <div className="container2">
            <TopBar userId={infos.userId} users={users} />

            <MainImage src={infos.pubImage} />
            <div className="footer">
                <div className="icons2">
                    <div className="left_side">
                        <i className={infos.pubs.likes.find(x => x.id == user.id) ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" onClick={() => LikeOp(infos, user, Eddit, idd)}></i>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="right_side">
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="likeCount">
                    <p> <b> {infos.pubs.likes.length + ' '}</b> Likes</p>
                </div>
                <div className="content">
                    <p><b>{infos.user}</b> {infos.description} </p>
                </div>
                {infos.pubs.comments.length > 0 ? <div className='comments'>
                    {showComments(infos, dcomments)}

                    <a className='controleComments' onClick={() => setDcomments(dcomments + 2)}> {dcomments == 0 ? 'Show comments' : 'Load more comments'}</a>
                    {dcomments > 0 && (<a className='controleComments' onClick={() => setDcomments(0)}> hide comments</a>)}
                    <a className='time'>{Time(infos)}</a>

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
export default Publications;