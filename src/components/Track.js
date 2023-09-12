import React from 'react';
import styles from '../resources/Track.module.css';

function Track({key, name, artist, album}) {
    return (
        <div>
            <li key={key} className={styles.track}>
                
                {name}{artist}{album}
            </li> 
        </div>
    );
}

export default Track;