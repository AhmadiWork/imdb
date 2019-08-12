import Hashids from 'hashids';
import {PAGE_SIZE, PROJECT_UNIQUE_SALT, URLS} from './global_variables';
import * as qs from 'query-string';

// HTTP set/get
export const getResponseData = response => {
    try {
        return response.data;
    } catch (e) {
        return {};
    }
};

export const getResponseResults = response => {
    try {
        return response.data.results;
    } catch (e) {
        return [];
    }
};

export const setRequestHeader = state => {
    try {
        if (state.auth.isAuthenticated) {
            return {'authorization': 'JWT ' + state.auth.token};
        }
        return {};
    } catch (e) {
        return {};
    }
};

// Hashids
const HASH_ID_INSTANCE = new Hashids(PROJECT_UNIQUE_SALT);

export const encodeId = id => {
    try {
        return HASH_ID_INSTANCE.encode(id);
    } catch (e) {
        return null;
    }
};

export const decodeId = hashId => {
    try {
        return HASH_ID_INSTANCE.decode(hashId)[0];
    } catch (e) {
        return null;
    }
};

// media URL generator
export const mediaHandler = (imagePath, size = null) => {
    try {
        if (size) {
            let imagePathSplit = imagePath.split('.');
            let size_with_format = size + '.' + imagePathSplit.pop();
            let imagePathWithoutFormat = '';
            for (let i of imagePathSplit) {
                imagePathWithoutFormat += i + '.';
            }

            return URLS.mediaFullUrl + imagePathWithoutFormat + size_with_format;
        }
        return URLS.mediaFullUrl + imagePath;
    } catch (e) {
        return '';
    }
};

// Simple kb/mb/gb size snippet
export const sizify = value => {
    value = parseFloat(value);
    let ext;
    if (value < 512000) {
        value = value / 1024.0;
        ext = 'kb';
    } else if (value < 4194304000) {
        value = value / 1048576.0;
        ext = 'mb';
    } else {
        value = value / 1073741824.0;
        ext = 'gb';
    }
    return value.toFixed(2).toString() + ' ' + ext;
};

// History (URL) set/get/add
export const getLocationParams = history => {
    if (history.location.search) {
        return qs.parse(history.location.search);
    }
    return {};
};

export const setHistoryParams = (history, params) => {
    history.push({search: '?' + qs.stringify(params)});
};

export const addHistoryParams = (history, newParams) => {
    let oldParams = getLocationParams(history);
    setHistoryParams(history, {...oldParams, ...newParams})
};

// Pagination set/get
export const setPaginationData = (resultCount, props, size = PAGE_SIZE) => {
    return {
        'pageCount': Math.ceil(resultCount / size),
        'initialPage': (parseInt(getLocationParams(props.history).page) || 1),
        'props': props
    };
};