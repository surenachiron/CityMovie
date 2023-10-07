import { Box } from "@mui/material";
import TrendingMovie from "../movies/Trending-Movie";
import TrendingTvShows from "../tv-shows/Trending-TvShows";
import SliderComminSoon from "./commingsoon/SliderComminSoon";
import PreviewGenresHome from "./genres/PreviewGenresHome";

const HomeContext = ({ trendMovies, trendTvShow, commingSoonMovie, genres, toprateMovie, toprateSeries }) => {

    return (
        <div>
            <Box>
                {commingSoonMovie === null ? "" :
                    <SliderComminSoon commingSoonMovie={commingSoonMovie} />
                }
                {trendMovies === null || trendMovies.length <= 1 || trendMovies.message ? "" :
                    <TrendingMovie movies={trendMovies} />
                }
                {trendTvShow === null || trendTvShow.length <= 1 || trendTvShow.message ? "" :
                    <TrendingTvShows tvShows={trendTvShow} />
                }
                <PreviewGenresHome genres={genres} />
            </Box>
        </div>
    );
}

export default HomeContext;