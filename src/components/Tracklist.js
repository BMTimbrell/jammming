import React from 'react';
import Track from './Track';
import styles from '../resources/Tracklist.module.css';

function Tracklist({tracks}) {
    return (
        <div>
            <ul className={styles.tracklist}>
                {tracks.map(track => (
                    <Track key={track.id} name={track.name} artist={track.artist} album={track.album} />
                ))}
            </ul>
           
        </div>
    );
}

export default Tracklist;