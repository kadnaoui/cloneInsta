import React from 'react'
import Publications from './components/publications';
import { Storie } from './components/storie';
import { Sugestion } from './components/Sugestion';
import { AuthContext } from '../../../Contexts/authContext';

const Content = (props) => {
    const { user, pubs, Eddit, users, addFollow, df, str } = React.useContext(AuthContext);
    const s = (c) => {
        for (let index = 0; index < str.length; index++) {

            const element = str[index];
            if (element.userId == c.id && element.stories.length > 0) return (<Storie key={element.id} infos={element} users={users} setAccount={props.setAccount} />)


        }

    }
    const p = (c) => {
        for (let index = 0; index < pubs.length; index++) {

            const element = pubs[index];
            if (element.userId == c.id) return (<Publications key={element.id} infos={element} Eddit={Eddit} user={user} users={users} setAccount={props.setAccount} />)


        }

    }
    const displayPubs = () => {

        return user.followers.map((c) => p(c))
    }
    const displayStories = () => {
        return user.followers.map((c) => s(c))
    }
    const displaySug = () => {
        let x = users.filter((c) => c.id != user.id);
        return x.map((c) => (<Sugestion key={c.id} users={c} user={user} addFollow={addFollow} df={df} setAccount={props.setAccount} />))
    }

    return (
        <section className='home' >

            <div className='pubs'>
                <div className='stories' >{displayStories()}</div>
                {displayPubs()}
            </div>
            <div className='suggestions'>
                {displaySug()}

            </div>
        </section>
    )
}
export default Content
