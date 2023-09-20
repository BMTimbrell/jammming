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
  const [trackUris, setTrackUris] = useState([]);

  useEffect(() => setAccessToken(getAccessToken()), []);
  useEffect(() => {
    if (window.location.hash) {
      const myTimeout = setTimeout(() => {
        window.location = 'https://bmtimbrell.github.io/jammming';
      }, getTokenExpiry() - Date.now());
      return () => clearTimeout(myTimeout);
    } 
  }, [accessToken]);

  function updateSearchResults(results) {
    setSearchResults(results);
  }

  function updatePlaylistName({target}) {
    setPlaylistName(target.value);
  }

  function updatePlaylist(track, update) {
    if (update === 'add') {
      //Check if item is already in playlist
      let alreadyHasTrack = false;
      playlist.forEach(el => {
        if (el.id === track.id) alreadyHasTrack = true;
      });
      if (!alreadyHasTrack) {
        setPlaylist(prev => [...prev, track]);
        setTrackUris(prev => [...prev, track.uri]);
      }
    } else if (update === 'remove') {
      //Remove from playlist
      setPlaylist(prev => prev.filter(item => item.id !== track.id));
      setTrackUris(prev => prev.filter(item => item !== track.uri));
    } else if (update === 'clear') {
      setPlaylist([]);
      setTrackUris([]);
    }else {
      console.log("Must pass a track followed by 'add', 'remove' or 'clear' as parameters!");
      console.log(update);
    }
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <div className={window.location.hash ? 'hidden' : ''}>
        <h2 style={{color: '#DDE6ED'}}>You must log into Spotify to use this app</h2>
        <button id='login' onClick={() => requestAccessToken()}>Log in</button>
      </div>
      <div className={!window.location.hash ? 'hidden' : 'main'}>
        <div id="searchbar"><SearchBar updateSearchResults={updateSearchResults} accessToken={accessToken} /></div>
        <SearchResults searchResults={searchResults} updatePlaylist={updatePlaylist} />
        <Playlist name={playlistName} playlist={playlist} updatePlaylist={updatePlaylist}
         updatePlaylistName={updatePlaylistName} trackUris={trackUris} accessToken={accessToken} />
      </div>
      
    </div>
  );
}

export default App;
