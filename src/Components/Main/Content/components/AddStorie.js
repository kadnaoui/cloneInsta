import React from 'react'
import { Modal } from '../../../Modal';
import addImage from '../../icons/Add.jpg';
import { useNavigate } from 'react-router-dom';
export const AddStorie = (props) => {
    const { str, user, setStr, df } = props;
    const [displayed, setDisplayed] = React.useState(-1)
    const [img, setImage] = React.useState(null)
    let navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault();
        if (img) {
            if (str.find(s => s.userId == user.id)) {
                let newStr = str.map(s => {
                    if (s.userId == user.id) { s.stories.push(img); }
                    return s;
                });
                setStr(newStr)
                navigate(`/`, { replace: true });
                setDisplayed(-1)
            }
            else {
                let newStr = {
                    id: str.length,
                    userId: user.id,
                    stories: [img]
                }
                setStr([...str, newStr])
                navigate(`/`, { replace: true });
                setDisplayed(-1)
            }
            setImage(null)
        }
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

    const showStorie = () => {
        if (displayed > -1) {

            return <Modal>
                <div className='modal'>
                    <div className='str'>
                        <div className='strinfos'>
                            <div className='userInfos'>
                                <div className='userInfos'>
                                    <img className='profilImg' src={user.profileImage ? user.profileImage : df} />
                                    <a><b>{user.username}</b></a>
                                </div>



                            </div>
                            <a onClick={() => setDisplayed(-1)} className='close'><i className="fa fa-times" aria-hidden="true"></i></a>
                        </div>
                        <form className='add' onSubmit={onSubmit}>
                            <img className='upload' src={img} />

                            <input type="file" name="file" id="file" className="inputfile" onChange={onChange} />
                            <label htmlFor="file">Choose a file</label>
                            <input type="submit" id='submit' className="inputfile" />
                            <label htmlFor="submit">upload</label>

                        </form>
                    </div>
                </div>

            </Modal>
        }
    }
    return (
        <> <div className='profilImg2' >
            <a onClick={() => setDisplayed(displayed + 1)} > <img className='profilImg' style={{ border: '0.2em solid black' }} src={addImage} />
            </a> </div >
            {showStorie()} </>
    )
}
