import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
    
  function updateSearchResults(results) {
    setSearchResults(results);
  }

  function updatePlaylist(track, add) {
    if (add === 'add') {setPlaylist(prev => [...prev, track]); console.log(track)}
    else if (add === 'remove') setPlaylist(prev => prev.filter(item => item.id !== track.id));
    else (console.log("Must pass a track followed by 'add' or 'remove' as parameters!"));
  }

  return (
    <div className="App">
      <SearchBar updateSearchResults={updateSearchResults} />
      <SearchResults searchResults={searchResults} updatePlaylist={updatePlaylist} />
      <Playlist playlist={playlist} updatePlaylist={updatePlaylist} />
    </div>
  );
}

export default App;
