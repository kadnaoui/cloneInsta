import React from 'react'
import { Modal } from '../../../Modal';
export const Storie = (props) => {
    const { infos, users, df } = props;
    const [displayed, setDisplayed] = React.useState(-1)
    const x = users.find(x => x.id == infos.userId)
    const next = () => {
        if (displayed > -1) {
            let x = displayed + 1;
            infos.stories[x] ? x = x : x = -1;
            setDisplayed(x);
        }
    }

    React.useEffect(() => {
        const interval = setTimeout(() => {
            next();
        }, 8000);
        return () => clearTimeout(interval);
    }, [displayed]);
    const showStorie = () => {
        if (displayed > -1) {

            return <Modal>
                <div className='modal'>
                    <div className='str'>
                        <div className='strinfos'>
                            <div className='userInfos'>
                                <div className='userInfos'>
                                    <img className='profilImg' src={x.profileImage ? x.profileImage : df} />
                                    <a><b>{x.username}</b></a>
                                </div>



                            </div>
                            <a onClick={() => setDisplayed(-1)} className='close'><i className="fa fa-times" aria-hidden="true"></i></a>
                        </div>
                        <img src={infos.stories[displayed]} onClick={next} />
                    </div>
                </div>

            </Modal>
        }
    }
    return (
        <> <div className='profilImg2' >
            <a onClick={() => setDisplayed(displayed + 1)} > <img className='profilImg' style={{ border: '0.2em solid red' }} src={x.profileImage ? x.profileImage : df} />
            </a> </div >
            {showStorie()} </>
    )
}
