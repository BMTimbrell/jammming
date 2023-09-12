import React from 'react';
import Tracklist from './Tracklist';

function Playlist({name, playlist, updatePlaylist, updatePlaylistName}) {
    return (
        <form>
            <h2>{name || 'Playlist Name'}</h2>
            <input type="text" placeholder="Enter Playlist Name" onChange={updatePlaylistName} value={name} />
            <Tracklist type="playlist" tracks={playlist} updatePlaylist={updatePlaylist} />
            <button>Save To Spotify</button>
        </form>
    );
}

export default Playlist;