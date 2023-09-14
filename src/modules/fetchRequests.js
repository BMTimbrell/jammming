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

async function getUserId(token) {
    const endpoint = '/v1/me';
    let urlToFetch = baseUrl + endpoint;

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.id;
        }
    } catch (error) {
        console.log(error);
    }
}

async function createPlaylist(token, playlistName) {
    const userId = await getUserId(token);
    const endpoint = `/v1/users/${userId}/playlists`;
    const urlToFetch = baseUrl + endpoint;
    const data = JSON.stringify({
        name: playlistName,
        description: 'A playlist made in the awesome web app Jammming!',
        public: true
    });

    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: data
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return [userId, jsonResponse.id];
        }
    } catch (error) {
        console.log(error);
    }
}

async function savePlaylist(token, playlistTracks, playlistName) {
    const ids = await createPlaylist(token, playlistName);
    const userId = ids[0];
    const playlistId = ids[1];
    const endpoint = `/v1/users/${userId}/playlists/${playlistId}/tracks`;
    const urlToFetch = baseUrl + endpoint;
    const data = JSON.stringify({uris: playlistTracks});

    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: data
        });
        if (response.ok) {
            console.log('Playlist saved to Spotify account');
        }
    } catch (error) {
        console.log(error);
    }
}



export {searchTracks, savePlaylist};