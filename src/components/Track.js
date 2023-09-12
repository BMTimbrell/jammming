import React from 'react';
import styles from '../resources/Track.module.css';

function Track({name, artist, album, button, updatePlaylist, track}) {
    
    return (
        <div>
            <h3>{name}</h3>
            <span>Artist: {artist} </span>
            <span>Album: {album}</span>
        </div>
    );
}

export default Track;