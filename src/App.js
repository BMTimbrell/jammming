import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
    
  function updateSearchResults(results) {
    setSearchResults(results);
  }

  return (
    <div className="App">
      <SearchBar updateSearchResults={updateSearchResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
