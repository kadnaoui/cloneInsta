import React from "react";
import { AuthContext } from "../../Contexts/authContext";
import { Box } from "./Components/Box";
import { Button } from "./Components/Button";
import { Field } from "./Components/Field";
import { Other } from "./Components/Other";
import { Separator } from "./Components/Separator";
export const Loginp = (props) => {
    const { setUser, users } = React.useContext(AuthContext);
    const [Red, setRed] = React.useState(false);
    const { Login, setLogin } = props;
    const onChange = (e) => {
        setRed(false)
        const id = e.target.id;
        const value = e.target.value;
        setLogin({ ...Login, [id]: value });

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (Login.username && Login.password) {
            let username = Login.username.toLowerCase();
            let password = Login.password.toLowerCase();

            if (users) {
                let r = users.find((u) => u.email.toLowerCase() == username || u.username.toLowerCase() == username);
                if (r && r.password == password) setUser(r);
                else setRed(true)
            }
            else setRed(true)


        }
    }
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <form className="login-form" onSubmit={onSubmit}>

                    <Field
                        id='username'
                        type='text'
                        placeholder='Phone number, username, or email'
                        onChange={onChange}
                        label='Phone number, username, or email'
                        value={Login.username}
                        toggle={false}
                        Red={Red}
                    />
                    <Field
                        id='password'
                        type='text'
                        placeholder='Password'
                        onChange={onChange}
                        label='Password'
                        value={Login.password}
                        toggle={true}
                        Red={Red}
                    />

                    <Button title='log in'
                        disabled={(Login.username != '' && Login.password != '') ? false : true}
                    />
                    <Separator />
                    <Other title='Log in with Facebook' icon="fa fa-facebook-official fb-icon" />
                </form>
            </div>
            <Box p='Don"t have an account? ' link="/signin" a='Sign Up' />
        </div>
    )
}
