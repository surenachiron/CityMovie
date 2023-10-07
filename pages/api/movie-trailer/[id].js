import { options } from "@/lib/confing";

async function handler(req, res) {

    const id = req.query.id

    if (req.method === "GET") {

        if (!id) {
            res.status(422).json({ message: "Invalid id." })
            return;
        }

        const urlgetidvedio = `https://online-movie-database.p.rapidapi.com/title/get-videos?tconst=${id}&limit=25&region=US`;
        try {
            const responseidvideo = await fetch(urlgetidvedio, options);
            const resultidvideo = await responseidvideo.json();
            const idvideo = resultidvideo.resource.videos.find(vid => vid.contentType === 'Trailer').id.slice(9,)

            const url = `https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=${idvideo}`;
            const response = await fetch(url, options);
            const result = await response.json();
            res.status(201).json(result)
            return;
        } catch (error) {
            return undefined;
        }

    }
}

export default handler