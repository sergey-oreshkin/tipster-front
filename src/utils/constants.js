
const host = window.location.hostname;
const protocol = window.location.protocol;
const port = window.location.port;

export const apiPrefix = '/api/v0';
export const hostUrl = protocol + '//' + host + ':' + port;
export const googleLoginUri = '/oauth2/authorize/google';
export const githubLoginUri = '/oauth2/authorize/github';

export const userProfileUri = '/users/profile';

export const tokenStorageName = 'BaererToken';


// // const host = window.location.hostname;
// // const protocol = window.location.protocol;
// // const port = window.location.port;

// export const apiPrefix = '/api/v0';
// export const hostUrl = 'http://localhost:8080';
// // export const hostUrl = protocol + '//' + host + ':' + port;
// export const googleLoginUri = 'http://localhost:8080/oauth2/authorize/google';
// export const githubLoginUri = 'http://localhost:8080/oauth2/authorize/github';

// export const userProfileUri = '/users/profile';

// export const themesUri = '/themes';
// export const tipsUri = '/tips';

// export const tokenStorageName = 'BaererToken';
