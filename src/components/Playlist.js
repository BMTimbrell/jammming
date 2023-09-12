import React from 'react';
import Tracklist from './Tracklist';

function Playlist({playlist, updatePlaylist}) {
    return (
        <form>
            <h2>Playlists</h2>
            <input />
            <Tracklist type="playlist" tracks={playlist} updatePlaylist={updatePlaylist} />
            <button>Save To Spotify</button>
        </form>
    );
}

export default Playlist;