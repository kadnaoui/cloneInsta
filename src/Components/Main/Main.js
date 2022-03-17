import React from 'react'
import { Navbar } from './Navbar';
import Content from './Content/Content';
import { AuthContext } from '../../Contexts/authContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sugestions from './Content/Sugestions';
import { Account } from './Content/Account';

export const Main = () => {

    const { setUser, user, df } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(user.id);

    return (
        <BrowserRouter>
            <Navbar logout={setUser} user={user} df={df} setAccount={setAccount} />
            <Routes>
                <Route path="/" element={<Content setAccount={setAccount} />}></Route>
                <Route path="/suggestions" element={<Sugestions setAccount={setAccount} account={account} />}></Route>
                <Route path="/account" element={<Account account={account} />}></Route>

            </Routes>

        </BrowserRouter>
    )
}
