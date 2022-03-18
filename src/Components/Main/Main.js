import React from 'react'
import { Navbar } from './Navbar';
import Content from './Content/Content';
import { AuthContext } from '../../Contexts/authContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sugestions from './Content/Sugestions';
import { Account } from './Content/Account';
import Post from './Content/Post';

export const Main = () => {

    const { setUser, user, df } = React.useContext(AuthContext);
    const [account, setAccount] = React.useState(user.id);
    const [post, setPost] = React.useState(0);

    return (
        <BrowserRouter>
            <Navbar logout={setUser} user={user} df={df} setAccount={setAccount} />
            <Routes>
                <Route path="/" element={<Content setAccount={setAccount} />}></Route>
                <Route path="/suggestions" element={<Sugestions setAccount={setAccount} account={account} />}></Route>
                <Route path="/account" element={<Account account={account} setPost={setPost} />}></Route>
                <Route path="/post" element={<Post post={post} setAccount={setAccount} setPost={setPost} />}></Route>

            </Routes>

        </BrowserRouter>
    )
}
