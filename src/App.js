import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import {requestAccessToken, getAccessToken, getTokenExpiry} from './modules/accessTokenHandler';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => setAccessToken(getAccessToken()), []);
  useEffect(() => {
    if (window.location.hash) {
      const myTimeout = setTimeout(() => {
        window.location = 'http://localhost:3000';
      }, getTokenExpiry());
      return () => clearTimeout(myTimeout);
    } 
  }, [accessToken]);

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
      <h1>Jamming</h1>
      <div className={window.location.hash ? 'hidden' : ''}>
        <h2>You must login to Spotify to use this app</h2>
        <button onClick={() => requestAccessToken()}>Log in</button>
      </div>
      <div className={!window.location.hash ? 'hidden' : ''}>
        <SearchBar updateSearchResults={updateSearchResults} accessToken={accessToken} />
        <SearchResults searchResults={searchResults} updatePlaylist={updatePlaylist} />
        <Playlist name={playlistName} playlist={playlist} updatePlaylist={updatePlaylist} updatePlaylistName={updatePlaylistName} />
      </div>
      
    </div>
  );
}

export default App;
