import { getDetails, getID } from "../config";

export const getIDPapularTvShows = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-tv-shows';
    const generateId = await getID(url)
    return generateId
}

export const getPapularTvShows = async () => {
    const getIdTVShows = await getIDPapularTvShows()

    if (getIdTVShows === null) {
        return getIdTVShows
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsPapularTvShows = await getDetails(getIdTVShows, url)
    return detailsPapularTvShows
}

export const getIDTopRatedTvShows = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-top-rated-tv-shows';
    const generateId = await getID(url, "rating")
    return generateId
}

export const getTopRatedTvShows = async () => {
    const getIdTopRatedTVShows = await getIDTopRatedTvShows()

    if (getIdTopRatedTVShows === null) {
        return getIdTopRatedTVShows
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsTopRatedTvShows = await getDetails(getIdTopRatedTVShows, url)
    return detailsTopRatedTvShows
}