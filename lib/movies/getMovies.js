import { getDetails, getID } from "../confing";

export const getIDPapularMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies';
    const generateId = getID(url)
    return generateId
}


export const getPapularMovies = async () => {
    const getidmovies = await getIDPapularMovies()

    if (getidmovies === null) {
        return getidmovies
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsPapularMovies = getDetails(getidmovies, url)
    return detailsPapularMovies
}

export const getIDTopRatedMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies';
    const generateId = getID(url, "rating")
    return generateId
}

export const getTopRatedMovies = async () => {
    const getidMovies = await getIDTopRatedMovies()

    if (getidMovies === null) {
        return getidMovies
    }
    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsTopRatedMovies = getDetails(getidMovies, url)
    return detailsTopRatedMovies
}