import { options } from "@/lib/config";

async function handler(req, res) {

    const id = req.query.id

    if (req.method === "GET") {

        if (!id) {
            res.status(422).json({ message: "Invalid id." })
            return;
        }

        const urlDetIdVideo = `https://online-movie-database.p.rapidapi.com/title/get-videos?tconst=${id}&limit=25&region=US`;
        try {
            const responseIdVideo = await fetch(urlDetIdVideo, options);
            const resultIdVideo = await responseIdVideo.json();
            const idVideo = resultIdVideo.resource.videos.find(vid => vid.contentType === 'Trailer').id.slice(9,)

            const url = `https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=${idVideo}`;
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