export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        };
        return headers;
    } else {
        return {};
    }
}