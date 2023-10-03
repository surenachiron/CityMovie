export const getDetails = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '935d6ef672mshb73110657b46841p1ac8c0jsn74f1d11f6984',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (result.message !== undefined || result === undefined) {
        return null;
    }

    return result
}

export const getIDCasts = async (id) => {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-top-cast?tconst=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '935d6ef672mshb73110657b46841p1ac8c0jsn74f1d11f6984',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    if (result.message !== undefined || result === undefined) {
        return null;
    }

    const generateresult = result.slice(0, 5).map(p => p.slice(6, -1))
    return generateresult
}

export const getCasts = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const getidcasts = await getIDCasts(id)

    if (getidcasts === null) {
        return getidcasts
    }

    const requests = getidcasts.map(async id => {
        const res = await fetch(`https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${id}`, options);
        return res.json();
    });
    return await Promise.all(requests);
}

export const getPhotos = async (id) => {
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
        return null;
    }
    return result
}