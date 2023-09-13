const baseUrl = 'https://api.spotify.com';

async function searchTracks(token, query) {
    const endpoint = '/v1/search?q=' + query + '&type=track';
    const urlToFetch = baseUrl + endpoint;

    try {
        const response = await fetch(urlToFetch, {
            headers : {
                'Authorization': 'Bearer ' + token
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.tracks.items;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getUserId(token, playlistTracks, playlistName) {
    const endpoint = '/v1/me';
    let urlToFetch = baseUrl + endpoint;

    try {
        const response = await fetch(urlToFetch, {
            headers : {
                'Authorization': 'Bearer ' + token
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

export {searchTracks};