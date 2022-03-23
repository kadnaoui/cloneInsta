import React from 'react'
import { Navbar } from './Navbar';
import Content from './Content/Content';
import { AuthContext } from '../../Contexts/authContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sugestions from './Content/Sugestions';
import { Account } from './Content/Account';
import Post from './Content/Post';
import { Add } from './Content/Add';

export const Main = () => {

    const { setUser, user, df, pubs, setPubs } = React.useContext(AuthContext);

    const [post, setPost] = React.useState(0);

    return (
        <BrowserRouter>
            <Navbar logout={setUser} user={user} df={df} />
            <Routes>
                <Route path="/" element={<Content />}></Route>
                <Route path="/suggestions" element={<Sugestions />}></Route>
                <Route path="/account/:id" element={<Account setPost={setPost} />}></Route>
                <Route path="/post" element={<Post post={post} setPost={setPost} />}></Route>
                <Route path="/add" element={<Add pubs={pubs} setPubs={setPubs} user={user} />}></Route>

            </Routes>

        </BrowserRouter>
    )
}
