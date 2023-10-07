import { getDetails, getID } from "../confing";

export const getIDCommingSoonMovie = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US';
    const generateId = getID(url, "commingsoon")
    return generateId
}


export const getCommingSoonMovie = async () => {

    const getidcommingsoon = await getIDCommingSoonMovie()

    if (getidcommingsoon === null) {
        return getidcommingsoon
    }

    const url = `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=`
    const detailsCommingSoonMovie = getDetails(getidcommingsoon, url)
    return detailsCommingSoonMovie
}