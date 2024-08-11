import { Box } from "@mui/material";
import TrendingMovie from "../movies/Trending-Movie";
import TrendingTvShows from "../tv-shows/Trending-TvShows";
import SliderComingSoon from "./comingSoon/SliderComingSoon";
import PreviewGenres from "../category/PreviewGenres";

const HomeContext = ({ trendMovies, trendTvShow, comingSoonMovie, genres }) => {
  return (
    <div>
      <Box>
        {comingSoonMovie !== null && (
          <SliderComingSoon comingSoonMovie={comingSoonMovie} />
        )}
        {trendMovies !== null && <TrendingMovie movies={trendMovies} />}
        {trendTvShow !== null && <TrendingTvShows tvShows={trendTvShow} />}
        <PreviewGenres genres={genres} />
      </Box>
    </div>
  );
};

export default HomeContext;
