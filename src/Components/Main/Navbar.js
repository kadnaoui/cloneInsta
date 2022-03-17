import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Content/Navbar components/Search';
export const Navbar = (props) => {
    const { logout, user, df, setAccount } = props;
    const [selected, setSelected] = React.useState(0);
    const [search, setSearch] = React.useState('');
    return (
        <nav className="navigation">
            <div className="logo">
                <Link className="no-underline" to="/">
                    <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
                </Link>
            </div>
            <Search search={search} setSearch={setSearch} setAccount={setAccount} />
            <div className='icons'>
                <Link to="/" className="navigation-link" >
                    <i className="fa fa-home" aria-hidden="true"></i>
                </Link>
                <Link to="/suggestions" className="navigation-link" id='sug'>
                    <i className="fa fa-list" aria-hidden="true"></i>
                </Link>
                <Link to="/account" className="navigation-link" onClick={() => setAccount(user.id)}>
                    <img className='icon' id='nav_profile_Image' src={user.profileImage ? user.profileImage : df}></img>
                </Link>
                <Link to='/' id="signout" className="navigation-link" onClick={() => logout(0)}>

                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Link >
            </div>
        </nav>
    )
}
