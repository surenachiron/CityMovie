import { getDetails, getID, options } from "./config";

export const getDetailsMovie = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (!response.ok) {
            return null;
        }
        return result
    } catch {
        return null;
    }
}

export const getIDCasts = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-top-cast?tconst=${id}`;
    const generateId = await getID(url, "casts")
    return generateId
}

export const getCasts = async (id) => {
    const getIdCasts = await getIDCasts(id)

    if (getIdCasts === null) {
        return getIdCasts
    }

    const url = "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst="
    const detailsCasts = await getDetails(getIdCasts, url)
    return detailsCasts
}

export const getPhotos = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-images?tconst=${id}&limit=10`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (!response.ok) {
            return null;
        }
        return result
    } catch {
        return null;
    }
}