import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
    
  function updateSearchResults(results) {
    setSearchResults(results);
  }

  function updatePlaylistName({target}) {
    setPlaylistName(target.value);
  }

  function updatePlaylist(track, add) {
    if (add === 'add') {
      //Check if item is already in playlist
      let alreadyHasTrack = false;
      playlist.forEach(el => {
        if (el.id === track.id) alreadyHasTrack = true;
      });
      console.log(alreadyHasTrack);
      if (!alreadyHasTrack) setPlaylist(prev => [...prev, track]);
    } else if (add === 'remove') {
      //Remove from playlist
      setPlaylist(prev => prev.filter(item => item.id !== track.id));
    } else {
      (console.log("Must pass a track followed by 'add' or 'remove' as parameters!"));
    }
  }

  return (
    <div className="App">
      <SearchBar updateSearchResults={updateSearchResults} />
      <SearchResults searchResults={searchResults} updatePlaylist={updatePlaylist} />
      <Playlist name={playlistName} playlist={playlist} updatePlaylist={updatePlaylist} updatePlaylistName={updatePlaylistName} />
    </div>
  );
}

export default App;
