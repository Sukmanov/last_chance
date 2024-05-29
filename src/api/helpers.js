export function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function generateNowISODateTime() {
    const now = new Date();
    return now.toISOString();
}

export function createDictionaryForFilter() {
    return {
        "0": "боевик",
        "8": "вестерн",
        "9": "документальный",
        "2": "драма",
        "1": "комедия",
        "-1": "короткометражка",
        "10": "криминал",
        "6": "мелодрама",
        "7": "приключения",
        "5": "триллеры",
        "4": "ужасы",
        "3": "фантастика",
    };
}