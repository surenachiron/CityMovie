import { getDetails, getID } from "../config";

export const getIDCategoryMovies = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${id}&limit=5`
    const generateId = getID(url)
    return generateId
}

export const getCategoryMovies = async (idForIdMovie) => {
    const getIdCategoryMovies = await getIDCategoryMovies(idForIdMovie)

    if (getIdCategoryMovies === null) {
        return getIdCategoryMovies
    }

    const url = "https://online-movie-database.p.rapidapi.com/title/get-details?tconst="
    const detailsCategoryMovies = getDetails(getIdCategoryMovies, url)
    return detailsCategoryMovies
}