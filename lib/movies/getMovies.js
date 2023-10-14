import { getDetails, getID } from "../config";

export const getIDPapularMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies';
    const generateId = await getID(url)
    return generateId
}


export const getPapularMovies = async () => {
    const getIdMovies = await getIDPapularMovies()

    if (getIdMovies === null) {
        return getIdMovies
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsPapularMovies = await getDetails(getIdMovies, url)
    return detailsPapularMovies
}

export const getIDTopRatedMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies';
    const generateId = await getID(url, "rating")
    return generateId
}

export const getTopRatedMovies = async () => {
    const getIdMovies = await getIDTopRatedMovies()

    if (getIdMovies === null) {
        return getIdMovies
    }
    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsTopRatedMovies = await getDetails(getIdMovies, url)
    return detailsTopRatedMovies
}