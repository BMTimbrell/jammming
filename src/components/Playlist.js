import React, {useState, useEffect} from 'react';
import Tracklist from './Tracklist';
import {savePlaylist} from '../modules/fetchRequests';
import styles from '../resources/Playlist.module.css';

function Playlist({name, playlist, updatePlaylist, updatePlaylistName, trackUris, accessToken}) {
    const defaultName = 'My Playlist';
    const defaultText = 'You can\'t save an empty playlist!';
    const [messageStyle, setMessageStyle] = useState(styles.hidden);
    const [messageText, setMessageText] = useState(defaultText);
    const [timeoutToggle, setTimeoutToggle] = useState(0);

    //sets a new timeout whenever save button is clicked
    useEffect(() => {
        const myTimeout = setTimeout(() => {
            setMessageStyle(styles.hidden);
        }, 5000);
        return () => clearTimeout(myTimeout);
    }, [timeoutToggle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playlist.length > 0) {
            savePlaylist(accessToken, trackUris, name === '' ? defaultName : name)
            .then(updatePlaylist({}, 'clear'));
            setMessageStyle(styles.success);
            setMessageText('Playlist saved to Spotify!');
            timeoutToggle === 0 ? setTimeoutToggle(1) : setTimeoutToggle(0);
        } else {
            console.log('You can\'t save an empty playlist!');
            setMessageStyle(styles.warning);
            setMessageText(defaultText);
            timeoutToggle === 0 ? setTimeoutToggle(1) : setTimeoutToggle(0);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.playlist}>
            <h2>{name || defaultName}</h2>
            <input id={styles.nameField} type="text" placeholder="Enter Playlist Name" onChange={updatePlaylistName} value={name} />
            <p className={messageStyle}>{messageText}</p>
            <Tracklist type="playlist" tracks={playlist} updatePlaylist={updatePlaylist} />
            <input id={styles.save} type="submit" value="Save To Spotify" />
        </form>
    );
}

export default Playlist;