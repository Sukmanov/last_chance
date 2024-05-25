const URL = "http://localhost:8060";

export const sendLoginRequest = async (login, password) => {
    const response = await
}

const sendApiRequest = async (path, method = "GET", body = "") => {
    return await fetch(URL + path, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: body === "" ? null : JSON.stringify(body),
    });
}