import React, {useState} from 'react';
import Tracklist from './Tracklist';
import styles from '../resources/SearchResults.module.css';
function SearchResults({searchResults, updatePlaylist}) {

    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist type="search" tracks={searchResults} updatePlaylist={updatePlaylist} />
        </div>
    );
}

export default SearchResults;