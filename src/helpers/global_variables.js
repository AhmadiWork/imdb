// Salt (50 characters) (Must change in every project)
export const PROJECT_UNIQUE_SALT = 'yVa7v?-w9^V^28=Cg3sdT3v^#et%SYV8W7gXD*Y#gVLV6@xBK-';

// Default page size
export const PAGE_SIZE = 10;

// URLS
export const URLS = {
    backendUrl: 'http://localhost',
    backendPort: '3001'
};
URLS.backendFullUrl = URLS.backendUrl + ':' + URLS.backendPort;
URLS.mediaFullUrl = URLS.backendFullUrl;