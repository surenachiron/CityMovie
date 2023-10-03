import { Box } from "@mui/material";
import TrendingMovie from "../movies/Trending-Movie";
import CustomError from "@/component/common/CustomError";
import TrendingTvShows from "../tv-shows/Trending-TvShows";
import SliderTranding from "./papulars/SliderTranding";

const HomeContext = ({ trendMovies, trendTvShow, commingSoonMovie, genres, toprateMovie, toprateSeries }) => {

    console.log(trendMovies, trendTvShow, commingSoonMovie)

    return (
        <div>
            <Box>
                {commingSoonMovie === null ? "" :
                    <SliderTranding commingSoonMovie={commingSoonMovie} />
                }
                {trendMovies === null ? "" :
                    <Box sx={{ my: "1rem" }}>
                        <TrendingMovie movies={trendMovies} />
                    </Box>
                }
                {trendTvShow === null ? "" :
                    <Box sx={{ my: "1rem" }}>
                        <TrendingTvShows tvShows={trendTvShow} />
                    </Box>
                }
            </Box>
        </div>
    );
}

export default HomeContext;