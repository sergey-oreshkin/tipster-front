const host = window.location.hostname;
const protocol = window.location.protocol;
const port = window.location.port;

export const apiPrefix = '/api/v0';
export const hostUrl = protocol + '//' + host + ':' + port;
export const googleLoginUri = '/oauth2/authorize/google';
export const githubLoginUri = '/oauth2/authorize/github';

export const userProfileUri = '/users/profile';

export const tokenStorageName = 'BaererToken';
