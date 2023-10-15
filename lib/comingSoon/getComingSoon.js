import { getDetails, getID } from "../config";

export const getIDComingSoonMovie = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US';
    const generateId = await getID(url, "comingSoon")
    return generateId
}


export const getComingSoonMovie = async () => {

    const getIdComingSoon = await getIDComingSoonMovie()

    if (getIdComingSoon === null) {
        return getIdComingSoon
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=`
    const detailsComingSoonMovie = await getDetails(getIdComingSoon, url)
    return detailsComingSoonMovie
}