import dateFormat from './DateFormatter';

const sessionStorage = window.sessionStorage;

function setItem(key, value) {
    if (!key) {
        throw new Error("cache key cannot be null");
    }
    if (sessionStorage) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

function getItem(key) {
    if (!key) {
        throw new Error("cannot get data from null key");
    }
    if (sessionStorage) {
        return JSON.parse(sessionStorage.getItem(key));
    }
}

function getSimpleDate(date) {
    return dateFormat(date, "yyyy-MM-dd");
}

function getFullDate(date) {
    return dateFormat(date, "yyyy-MM-dd HH:mm:ss");
}

export default {
    setItem,
    getItem,
    dateFormat,
    getSimpleDate,
    getFullDate
}
