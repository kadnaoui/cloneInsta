import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/authContext";
import { Separator } from "./Components/Separator";
import { Other } from "./Components/Other";
import { Field } from "./Components/Field";
import { Box } from "./Components/Box";
import { Button } from "./Components/Button";
import { useNavigate } from "react-router-dom";

export const Signinp = (props) => {
    let navigate = useNavigate();
    const { setUsers, users, setUser } = React.useContext(AuthContext);
    const { Signin, setSignin } = props;
    const [Red, setRed] = React.useState(false);
    const onChange = (e) => {
        setRed(false)
        const id = e.target.id;
        const value = e.target.value;
        setSignin({ ...Signin, [id]: value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (Signin.username && Signin.password && Signin.email && Signin.fullname) {
            let username = Signin.username.toLowerCase();
            let email = Signin.email.toLowerCase();
            let fullname = Signin.fullname.toLowerCase();
            let l = users.length + 1;
            if (users) {
                let r = users.find((u) => u.email.toLowerCase() == email || u.username.toLowerCase() == username);

                if (!r) {
                    setUsers([...users, { id: l, ...Signin, email: Signin.email, profileImage: '', followers: [] }]); setUser({
                        id: l,
                        username: username,
                        fullname: fullname,
                        email: email,
                        password: 'x',
                        profileImage: '',
                        followers: []

                    })
                    navigate("/", { replace: true });
                }
                else setRed(true)
            }
            else setRed(true)
        }
    }
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>

                <h1 className="singin_h1">Sign up to see photos and videos from your friends.</h1>
                <form className="login-form" onSubmit={onSubmit}>

                    <Other title='Log in with Facebook' icon="fa fa-facebook-official fb-icon" />
                    <Separator />
                    <Field
                        id='fullname'
                        type='text'
                        placeholder='Full name'
                        onChange={onChange}
                        label='Full Name'
                        value={Signin.fullname}
                        toggle={false}
                        Red={Red}
                    />
                    <Field
                        id='email'
                        type='text'
                        placeholder='Phone number, username, or email'
                        onChange={onChange}
                        label='Phone number, username, or email'
                        value={Signin.email}
                        toggle={false}
                        Red={Red}
                    />
                    <Field
                        id='username'
                        type='name'
                        placeholder='Username'
                        onChange={onChange}
                        label='Username'
                        value={Signin.username}
                        toggle={false}
                        Red={Red}
                    />
                    <Field
                        id='password'
                        type='text'
                        placeholder='Password'
                        onChange={onChange}
                        label='Password'
                        value={Signin.password}
                        toggle={true}

                        Red={Red} />

                    <Button title='Sign in'
                        disabled={(Signin.username != '' && Signin.password != '' && Signin.fullname != '' && Signin.email != '') ? false : true}
                    />
                </form>
            </div>
            <Box p='Have an account? ' link="/" a='Log in' />
        </div>
    )
}
