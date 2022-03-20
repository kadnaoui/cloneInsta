import React from 'react';
import { useNavigate } from "react-router-dom";

export const Add = (props) => {
    const { pubs, setPubs, user } = props;
    const [img, setImage] = React.useState(null)
    const [des, setDes] = React.useState([''])
    let navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault();
        const current = new Date();


        const x = {

            id: pubs.length,
            userId: user.id,
            pubImage: img,
            description: des,

            pubs: {
                likes: [],
                comments: [],
                time: `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}-${current.getHours()}-${current.getMinutes()}`
            }
        }
        const newpubs = pubs;
        newpubs.push(x);
        setPubs(newpubs);

        navigate("/account", { replace: true });
    }
    const onChange = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }
    return (
        <form className='add' onSubmit={onSubmit}>
            <img className='upload' src={img} />
            <input className='addButton' type='file' onChange={onChange}></input>
            <label htmlFor='description'>description</label>
            <textarea id='description' rows="4" cols="45" value={des} onChange={e => setDes(e.target.value)} />
            <button className='addButton'> upload</button>
        </form>
    )
}
