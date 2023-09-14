import React, {useState} from 'react';
import Tracklist from './Tracklist';
import {savePlaylist} from '../modules/fetchRequests';
import styles from '../resources/Playlist.module.css';

function Playlist({name, playlist, updatePlaylist, updatePlaylistName, trackUris, accessToken}) {
    const defaultName = 'My Playlist';
    const [warningStyle, setWarningStyle] = useState(styles.hidden);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (playlist.length > 0) {
            savePlaylist(accessToken, trackUris, name === '' ? defaultName : name)
            .then(updatePlaylist({}, 'clear'));
            setWarningStyle(styles.hidden);
        } else {
            console.log('You can\'t save an empty playlist!');
            setWarningStyle(styles.warning);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.playlist}>
            <h2>{name || defaultName}</h2>
            <input type="text" placeholder="Enter Playlist Name" onChange={updatePlaylistName} value={name} />
            <p className={warningStyle}>You can't save an empty playlist!</p>
            <Tracklist type="playlist" tracks={playlist} updatePlaylist={updatePlaylist} />
            <input type="submit" value="Save To Spotify" />
        </form>
    );
}

export default Playlist;