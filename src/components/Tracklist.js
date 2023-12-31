import React from 'react';
import Track from './Track';
import styles from '../resources/Tracklist.module.css';

function Tracklist({type, tracks, updatePlaylist}) {
    const handleAdd = (track) => updatePlaylist(track, 'add');
    const handleRemove = (track) => updatePlaylist(track, 'remove');
    return (
        <div>
            <ul className={styles.tracklist}>
                {tracks.map(track => (
                    <li key={track.id} className={styles.track}>
                        <Track name={track.name} artist={track.artists[0].name} album={track.album.name} />
                        <button onClick={type === "search" ? () => handleAdd(track) : () => handleRemove(track)}>
                            {type === "search" ? "+" : "-"}
                        </button>
                    </li>   
                ))}
            </ul>
        </div>
    );
}

export default Tracklist;