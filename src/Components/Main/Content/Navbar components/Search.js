import React from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/authContext'

export const Search = (props) => {
    const { users, user } = React.useContext(AuthContext);
    const { search, setSearch, setAccount } = props;
    const [results, setResults] = React.useState([])
    const options = (search) => {
        const id = user.id;
        const others = users.filter(x => x.id != id)
        const r = [];
        others.map(x => {
            if (x.username.toLowerCase().startsWith(search.toLowerCase()) && search) { r.push(x) }
        })
        setResults(r)
        setSearch(search)
    }
    React.useEffect(() => {
        const timeOut = setTimeout(() => options(search), 500);
        return () => clearTimeout(timeOut);
    }, [search]);

    const displayOptions = () => {
        return results.map(x => {
            return (
                <Link key={x.id} to={`/account/${x.id}`} onClick={() => { options('') }}>{x.username}</Link>

            )
        })
    }
    return (
        <div className="navigation-search-container">

            <input className="search-field" type="text" placeholder="Search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <div className="search-container" style={{ display: results == 0 ? 'none' : 'flex' }}>
                <div className="search-container-box">
                    <div className="search-results">
                        {displayOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}
