import React from 'react';

function Track({name, artist, album, button, updatePlaylist, track}) {
    
    return (
        <div>
            <h3>{name}</h3>
            <span>Artist: {artist} </span>
            <span>| Album: {album}</span>
        </div>
    );
}

export default Track;