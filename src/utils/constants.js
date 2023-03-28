const host = window.location.hostname;
const protocol = window.location.protocol;
const port = window.location.port;

export const apiPrefix = '/api/v0';
export const hostUrl = protocol + '//' + host + ':' + port;
export const googleLoginUri = 'http://localhost:8080/oauth2/authorize/google';
export const githubLoginUri = 'http://localhost:8080/oauth2/authorize/github';

export const userProfileUri = '/users/profile';

export const tokenStorageName = 'BaererToken';
