const URL = "http://localhost:5123";
const axios = require('axios');

export async function deleteChallenge(challengeId) {
    try {
        await axios.delete(URL + `/api/challenge/${challengeId}`);
    } catch (error) {
        console.error(error);
    }
}

export async function getChallenges() {
    try {
        const response = await axios.get(URL + "/api/challenge");
        return  response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getActor(actorId) {
    try {
        const response = await axios.get(URL + `/api/actor/${actorId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteComment(commentId) {
    try {
        await axios.delete(URL + `/api/movie-feedback/${commentId}`);
    } catch (error) {
        console.error(error);
    }
}

export async function getDirector(directorId) {
    try {
        const response = await axios.get(URL + `/api/director/${directorId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getChallenge(challengeId) {
    try {
        const response = await axios.get(URL + `/api/challenge/${challengeId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function putUser(requestBody) {
    try {
        await fetch(URL + `/api/user/${requestBody.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
    } catch (error) {
        console.log(error);
    }
}

export async function putFile(fileId, fileName, formData) {
    try {
        await fetch(URL + `/api/file/${fileId}?fileName=${fileName}`, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
            },
            body: formData,
        });
    } catch (e) {
        console.error(e);
    }
}

export async function getUserById(userId) {
    try {
        const response = await axios.get(URL + `/api/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMoviesByName(name) {
    try {
        const response = await axios.get(URL + `/api/movie/${name}`);
        console.log(response.status);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function putMovieFeedback(requestBody) {
    try {
        const response = await fetch(URL + `/api/movie-feedback/${requestBody.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function getUsernameById(userId) {
    try {
        const user = await axios.get(URL + "/api/user/" + userId);
        return user.data.name;
    } catch (e) {
        console.log(e);
    }
}

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