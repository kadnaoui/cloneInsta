import React from 'react';
import { AuthApp } from './Components/Authentication/AuthApp';
import { AuthContext } from './Contexts/authContext';
import { Main } from './Components/Main/Main';
import "./Components/Main/Style2.css";
import { pubsdb, usersdb, strdb } from './db';
import df from './Components/du.png'
const App = () => {

    const Eddit = (c, x) => {
        const n = pubs.map((p) => {
            if (p.id == x) {
                return c
            } else return p

        })
        setPubs(n)

    }
    const addFollow = (info, id) => {
        const n = users.map((p) => {
            if (p.id == id) {
                setUser({ ...p, followers: info })
                return { ...p, followers: info }

            } else return p

        }

        )

        setUsers(n)
    }
    const [pubs, setPubs] = React.useState(pubsdb);
    const [user, setUser] = React.useState(0);
    const [users, setUsers] = React.useState(usersdb);
    const [str, setstr] = React.useState(strdb);

    const display = () => {
        if (user == 0) {

            return (<AuthContext.Provider value={{ users, setUsers, user, setUser }}>
                <AuthApp />
            </AuthContext.Provider>)
        }
        else {
            return (<AuthContext.Provider value={{ user, setUser, pubs, setPubs, Eddit, users, addFollow, df, str }}>
                <Main />
            </AuthContext.Provider>)
        }
    }
    return display()
}
export default App;