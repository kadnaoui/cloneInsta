
import { Comments } from './Comments'
export const showComments = (infos, x) => {
    const d = infos.pubs.comments.map((c) => (<Comments key={c.id} user={c.user} text={c.text} />))
    return d.slice(0, x)
}

export const Time = (infos) => {
    const current = new Date();
    const year = infos.pubs.time.slice(0, 4);
    const month = infos.pubs.time.slice(5, 7);
    const day = infos.pubs.time.slice(8, 10);
    const hour = infos.pubs.time.slice(11, 13);
    const min = infos.pubs.time.slice(14, 16);
    if (year < current.getFullYear()) {
        return infos.pubs.time.slice(0, 10)
    }
    else if (month < current.getMonth()) {
        let x = current.getMonth() - month;
        return x + ' months'
    }
    else if (day < current.getDate()) {
        let x = current.getDate() - day;
        return x + ' days'
    }
    else if (hour < current.getHours()) {
        let x = current.getHours() - hour;
        return x + ' hours'
    }
    else if (min < current.getMinutes()) {
        let x = current.getMinutes() - min;
        return x + ' mins'
    }
}
export const LikeOp = (infos, user, Eddit, idd, n = 0) => {
    let Likes = infos.pubs.likes;
    Likes.find(x => x.id == user.id) ? Likes = Likes.filter(x => x.id != user.id) : Likes.push({ id: user.id });

    // console.log(Likes);
    Eddit({ ...infos, pubs: { ...infos.pubs, likes: Likes } }, idd);
    if (n) { console.log({ ...infos, pubs: { ...infos.pubs, likes: Likes } }); }


}
