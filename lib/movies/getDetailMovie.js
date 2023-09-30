export const getDetailsMovie = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (result.message !== undefined || result === undefined) {
        return undefined;
    }

    return result
}

export const getIDCastsMovie = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-top-cast?tconst=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    if (result.message !== undefined || result === undefined) {
        return undefined;
    }

    const generateresult = result.slice(0, 5).map(p => p.slice(6, -1))
    return generateresult
}

export const getCastsMovie = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const getidcasts = await getIDCastsMovie(id)

    if (getidcasts === undefined) {
        return getidcasts
    }

    const requests = getidcasts.map(async id => {
        const res = await fetch(`https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${id}`, options);
        return res.json();
    });
    return await Promise.all(requests);
}

export const getPhotosMovie = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-images?tconst=${id}&limit=10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (result.message !== undefined || result === undefined) {
        return undefined;
    }
    return result
}