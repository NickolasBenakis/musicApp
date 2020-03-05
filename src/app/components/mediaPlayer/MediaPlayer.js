import React,{Fragment} from 'react'

const MediaPlayer = () => {
    return (
        <Fragment>
            <header className='media-player-container'>
                <div className='artwork-container'>
                    <img src alt='artwork-album'/>
                </div>
                <audio controls>
                    <source src type='audio/mp3'/>
                </audio>
            </header>
        </Fragment>
    )
}

export default MediaPlayer
