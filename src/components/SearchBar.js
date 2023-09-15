import React, {useState} from 'react';
import {searchTracks} from '../modules/fetchRequests';
import styles from '../resources/SearchBar.module.css';

function SearchBar({updateSearchResults, accessToken}) {
    let resultsList = [];
    const [text, setText] = useState('');
    const handleTextChange = ({target}) => setText(target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text) {
            resultsList = await searchTracks(accessToken, text);
            //sometimes get network error when trying to retrieve search results
            if (resultsList) updateSearchResults(resultsList);
            else console.log("resultsList is undefined");
        } else {
            updateSearchResults([]);
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={handleTextChange} />
            <input id={styles.search} type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;