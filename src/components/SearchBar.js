import React from 'react';

function SearchBar({updateSearchResults}) {
    const resultsList = [
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateSearchResults(resultsList);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;