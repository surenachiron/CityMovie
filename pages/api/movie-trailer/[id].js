export const optionsgetidvedio = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};
export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c236b037e4msh147181c7f889b80p18ec77jsnaa91ff885733',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

async function handler(req, res) {

    const id = req.query.id

    if (req.method === "GET") {

        if (!id) {
            res.status(422).json({ message: "Invalid id." })
            console.log("Invalid id.")
            return;
        }

        const urlgetidvedio = `https://online-movie-database.p.rapidapi.com/title/get-videos?tconst=${id}&limit=25&region=US`;

        try {
            const responseidvideo = await fetch(urlgetidvedio, optionsgetidvedio);
            const resultidvideo = await responseidvideo.json();
            const idvideo = resultidvideo.resource.videos[0].id.slice(9,)

            const url = `https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=${idvideo}`;
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.resource.encodings.find(tr => tr.definition === "480p"))
            res.status(201).json(result)
            return;
        } catch (error) {
            console.error(error.message, "error");
            res.status(201).json({ message: "server error. please try again!" })
            return undefined;
        }

    }
}

export default handler