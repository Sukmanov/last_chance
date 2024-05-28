import {ElMessage} from "element-plus";

const URL = "http://localhost:5123";
const axios = require('axios');

export async function getRandomMovie() {
    try {
        const movies = await getMovies();
        const index = Math.floor(Math.random() * movies.length);
        return movies[index];
    } catch (e) {
        console.error(e);
    }
}

export async function getMovieById(movieId) {
    try {
        const response = await axios.get(URL + "/api/movie/" + movieId);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export async function getMovies() {
    try {
        const response = await axios.get(URL + "/api/movie");
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export async function sendLoginRequest (login, password) {
    try {
        const response = await fetch(URL + "/api/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        });
        return response;
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
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