import { getDetails, getID } from "../confing";

export const getIDCategoryMovies = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${id}&limit=5`
    const generateId = getID(url)
    return generateId
}

export const getCategoryMovies = async (idforidmovie) => {
    const getidcategorymovies = await getIDCategoryMovies(idforidmovie)

    if (getidcategorymovies === null) {
        return getidcategorymovies
    }

    const url = "https://online-movie-database.p.rapidapi.com/title/get-details?tconst="
    const detailsCategoryMovies = getDetails(getidcategorymovies, url)
    return detailsCategoryMovies
}