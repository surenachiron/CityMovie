export const options = {
    method: 'GET',
    headers: {
<<<<<<< HEAD
        'X-RapidAPI-Key': '963f3266ddmsh686c2d77482b215p12e607jsn0e63da720342',
=======
        'X-RapidAPI-Key': '1d4c64df33msha4f870b328cec80p12306ajsn6974ab582101',
>>>>>>> 930bda3e579adab73475adaceeebbf71fd712a26
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};


export async function getID(url, type) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("getUD" + result);
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
    console.log("getdetails" + combinepromise);
    if (!(combinepromise.find(re => re === null) === null))
        return combinepromise
    else
        return null
}