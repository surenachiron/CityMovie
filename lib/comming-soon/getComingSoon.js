export const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '935d6ef672mshb73110657b46841p1ac8c0jsn74f1d11f6984',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

export const getIDCommingSoonMovie = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US';

    const response = await fetch(url, options);
    const result = await response.json();
    if (result.message !== undefined || result === undefined) {
        return null;
    }
    const generateresult = result.slice(0, 5).map(p => p.id.slice(7, -1))
    return generateresult
}


export const getCommingSoonMovie = async () => {

    const getidcommingsoon = await getIDCommingSoonMovie()

    if (getidcommingsoon === null) {
        return getidcommingsoon
    }

    const requests = getidcommingsoon.map(async id => {
        const res = await fetch(`https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=${id}`, options);
        return res.json();
    });
    
    return await Promise.all(requests);
}