import React from 'react'
import { Sugestion } from './components/Sugestion';
import { AuthContext } from '../../../Contexts/authContext';
const Sugestions = (props) => {
    const { user, users, addFollow, df, setAccount } = React.useContext(AuthContext);





    const displaySug = () => {
        let x = users.filter((c) => c.id != user.id);
        return x.map((c) => (<Sugestion key={c.id} users={c} user={user} addFollow={addFollow} df={df} setAccount={props.setAccount} />))
    }

    return (
        <section className='home' >

            <div className='suggestions2'>
                {displaySug()}

            </div>
        </section>
    )
}
export default Sugestions
