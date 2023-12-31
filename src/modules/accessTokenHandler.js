function requestAccessToken() {
    const client_id = '54e6f6d238684fc7adfaf4bf6a3d32bd';
    const redirect_uri = 'https://bmtimbrell.github.io/jammming';
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=playlist-modify-public';
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    window.location = url;
}

const hash = window.location.hash;
function getAccessToken() {
    if (hash) {
        const startIndex = hash.indexOf('=') + 1;
        const endIndex = hash.indexOf('&');
        const accessToken = hash.substring(startIndex, endIndex);
    return accessToken;
    }
    return '';
}

function getTokenExpiry() {
    if (hash) {
        const startIndex = hash.indexOf('expires_in=') + 11;
        const endIndex = hash.length;
        const expiry = parseInt(hash.substring(startIndex, endIndex));
        return Date.now() + expiry * 1000;
    }
    return 0;
}

export {requestAccessToken, getAccessToken, getTokenExpiry};