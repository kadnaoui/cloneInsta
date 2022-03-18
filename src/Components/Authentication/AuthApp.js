import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loginp } from './Login';
import { Signinp } from './Signin';
import './Style.css';


export const AuthApp = () => {
    const [Login, setLogin] = React.useState({ username: "", password: "" });

    const [Signin, setSignin] = React.useState({ email: "", fullname: "", username: "", password: "" });
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loginp Login={Login} setLogin={setLogin} />}></Route>

                <Route path="/signin" element={<Signinp Signin={Signin} setSignin={setSignin} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
