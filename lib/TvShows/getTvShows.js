import { getDetails, getID } from "../confing";

export const getIDPapularTvShows = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-tv-shows';
    const generateId = getID(url)
    return generateId
}

export const getPapularTvShows = async () => {
    const getidTVShows = await getIDPapularTvShows()

    if (getidTVShows === null) {
        return getidTVShows
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsPapularTvShows = getDetails(getidTVShows, url)
    return detailsPapularTvShows
}

export const getIDTopRatedTvShows = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-top-rated-tv-shows';
    const generateId = getID(url, "rating")
    return generateId
}

export const getTopRatedTvShows = async () => {
    const getidTopRatedTVShows = await getIDTopRatedTvShows()

    if (getidTopRatedTVShows === null) {
        return getidTopRatedTVShows
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=`
    const detailsTopRatedTvShows = getDetails(getidTopRatedTVShows, url)
    return detailsTopRatedTvShows
}