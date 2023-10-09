export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '00457c66f7msh77ff4fb9b7412d0p138242jsnacbf9bea3a37',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};


export async function getID(url, type) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        if (!response.ok) {
            return null;
        }
        switch (type) {
            case "commingsoon": {
                const generateresult = result.slice(0, 5).map(p => p.id.slice(7, -1))
                return await generateresult;
            }
            case "rating": {
                const generateresult = result.slice(0, 5).map(p => p.id.slice(7, -1))
                return await generateresult;
            }
            case "casts": {
                const generateresult = result.slice(0, 5).map(p => p.slice(6, -1))
                return await generateresult
            }
            default: {
                const generateresult = result.slice(0, 5).map(p => p.slice(7, -1))
                return await generateresult
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
    const combinepromise = await Promise.all(requests);
    if (!(combinepromise.find(re => re === null) === null))
        return combinepromise
    else
        return null
}