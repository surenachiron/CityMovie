import DurationExchange from "@/utils/DurationExchange";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";
import classes from "./Style-ContentLg";
import { Genres } from "@/lib/category/getShowLists";

const ContentLg = ({ movie }) => {
  return (
    <Box sx={classes.boxMainParent}>
      <Box sx={classes.boxSubParent}>
        <Box>
          <Typography variant="h4">
            {movie.title.length <= 25
              ? movie.title
              : movie.title.slice(0, 25) + "..."}
          </Typography>
        </Box>
        <Box sx={classes.mainDetails}>
          <Box sx={classes.boxCertificatesReleaseDate}>
            <Typography variant="body1">
              {movie.release_date.length !== 0 &&
                movie.release_date !== undefined && <>{movie.release_date}</>}
            </Typography>
          </Box>
          {movie.genre_ids.length !== 0 && movie.genre_ids !== undefined && (
            <Box sx={classes.beforeDot}>
              <>
                {movie.genre_ids.map((genre, item) => (
                  <Link
                    href={`/category/${
                      Genres.find((gen) => gen.id === genre).name
                    }`}
                    key={item}
                  >
                    <Typography variant="body1" sx={classes.spanGenre}>
                      {Genres.find((gen) => gen.id === genre).name}
                      {item + 1 === movie.genre_ids.length ? "" : ","}
                    </Typography>
                  </Link>
                ))}
              </>
            </Box>
          )}
          {/* {movie.title.titleType === "movie" ? (
            <>
              {movie.title.runningTimeInMinutes && (
                <Box sx={classes.beforeDot}>
                  <DurationExchange
                    duration={movie.title.runningTimeInMinutes}
                  />
                </Box>
              )}
            </>
          ) : (
            <>
              {movie.title.numberOfEpisodes && (
                <Box sx={classes.beforeDot}>
                  <Typography variant="body1">
                    {movie.title.numberOfEpisodes}
                    <Box component={"span"} sx={classes.spanEpisodes}>
                      Episodes
                    </Box>
                  </Typography>
                </Box>
              )}
            </>
          )} */}
        </Box>
        <Box sx={classes.boxOverview}>
          {movie.overview && (
            <>
              <Typography variant="h6">Overview</Typography>
              <Box>
                <Typography variant="body1" sx={classes.spanSummary}>
                  {movie.overview}
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box sx={classes.boxTrailerMore}>
          {movie.image && (
            <Box sx={classes.ButtonTrailer}>
              <PlayTrailer
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                id={movie.id}
              />
            </Box>
          )}
          <Link href={`/movies/${movie.id}`}>
            <Button variant="contained" color="error" sx={classes.buttonMore}>
              More
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentLg;
