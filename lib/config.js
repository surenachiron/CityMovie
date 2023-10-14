export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5846e6ae03msh0e5fe1e5f427cf8p14b5c0jsnfbdbeac995f5',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};


export async function getID(url, type) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (!response.ok) {
            return null;
        }
        switch (type) {
            case "comingSoon": {
                const generateResult = result.slice(0, 5).map(p => p.id.slice(7, -1))
                return await generateResult;
            }
            case "rating": {
                const generateResult = result.slice(0, 5).map(p => p.id.slice(7, -1))
                return await generateResult;
            }
            case "casts": {
                const generateResult = result.slice(0, 5).map(p => p.slice(6, -1))
                return await generateResult
            }
            default: {
                const generateResult = result.slice(0, 5).map(p => p.slice(7, -1))
                return await generateResult
            }
        }
    } catch {
        return null;
    }
}

export async function getDetails(idsForDetails, url) {
    if (idsForDetails === null) {
        return idsForDetails
    }
    const requests = idsForDetails.map(async id => {
        try {
            const res = await fetch(`${url}${id}`, options);
            if (!res.ok) {
                return null;
            }
            return res.json();
        } catch {
            return null;
        }
    });
    const combinePromise = await Promise.all(requests);
    if (!(combinePromise.find(re => re === null) === null))
        return combinePromise
    else
        return null
}