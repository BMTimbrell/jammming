import React, {useState} from 'react';
import {searchTracks} from '../modules/fetchRequests';

function SearchBar({updateSearchResults, accessToken}) {
    let resultsList = [
        {
            name: 'blah',
            artist: 'blah',
            album: 'blah',
            id: 0
        },
        {
            name: 'blooo',
            artist: 'beep',
            album: 'yay',
            id: 1
        },
        {
            name: 'hohoho',
            artist: 'santa',
            album: 'christmas',
            id: 2
        }
    ];
    const [text, setText] = useState('');
    const handleTextChange = ({target}) => setText(target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        resultsList = await searchTracks(accessToken, text);
        updateSearchResults(resultsList);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleTextChange} />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;