export const getIDPapularMovies = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies';
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
    const generateresult = result.slice(0, 5).map(p => p.slice(7, -1))
    return generateresult
}


export const getPapularMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const getidmovies = await getIDPapularMovies()

    if (getidmovies === undefined) {
        return getidmovies
    }

    const requests = getidmovies.map(async id => {
        const res = await fetch(`https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${id}`, options);
        return res.json();
    });
    return await Promise.all(requests);
}