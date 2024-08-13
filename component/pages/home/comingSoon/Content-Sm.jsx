import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import classes from "./Style-ContentSm";

import PlayTrailer from "../../movies/movie-detail/main-detail/Play-Trailer";
import { Genres } from "@/lib/category/getShowLists";

const ContentSm = ({ movie }) => {
  return (
    <Box sx={classes.boxMainParent}>
      <Box sx={classes.boxSubParent}>
        <Box sx={classes.boxMainDetail}>
          <Typography variant="h5">
            {movie.title.length <= 30
              ? movie.title
              : movie.title.slice(0, 30) + "..."}
          </Typography>
          <Box sx={classes.boxReleaseDateRating}>
            <Typography variant="body1" sx={classes.spanReleaseDate}>
              {movie.release_date.length !== 0 &&
                movie.release_date !== undefined && (
                  <>{movie.release_date}</>
                )}{" "}
            </Typography>
            {movie.vote_average && (
              <Button
                variant="contained"
                color="warning"
                sx={classes.spanRating}
              >
                {(movie.vote_average * 10).toString().slice(0, 2)}%
              </Button>
            )}
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
        </Box>
        <Box sx={classes.boxPlayTrailerMore}>
          <Box sx={classes.boxPlayTrailer}>
            {/* {movie.poster_path && (
              <PlayTrailer
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                id={movie.id}
              />
            )} */}
          </Box>
          <Box sx={classes.boxMore}>
            <Link href={`/movies/${movie.id}`}>
              <Button variant="text" color="inherit" sx={classes.buttonMore}>
                More
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentSm;
