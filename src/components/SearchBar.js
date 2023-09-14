import React, {useState} from 'react';
import {searchTracks} from '../modules/fetchRequests';

function SearchBar({updateSearchResults, accessToken}) {
    let resultsList = [];
    const [text, setText] = useState('');
    const handleTextChange = ({target}) => setText(target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text) {
            resultsList = await searchTracks(accessToken, text);
            updateSearchResults(resultsList);
        } else {
            updateSearchResults([]);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleTextChange} />
            <input type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;