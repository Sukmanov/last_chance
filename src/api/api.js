const URL = "http://localhost:5123";
const axios = require('axios');

export async function getRandomMovie() {
    try {
        const response = await axios.get("http://localhost:5123/api/movie");
        const movies = response.data;
        const index = Math.floor(Math.random() * movies.length);
        return movies[index];
    } catch (e) {
        console.error(e);
    }
}

export const sendLoginRequest = async (login, password) => {
    //const response = await
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