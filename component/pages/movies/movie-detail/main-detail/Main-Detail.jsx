import { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ImageMovie from "./Image-Movie";
import DurationExchange from "@/utils/DurationExchange";
import { setTrailer } from "@/redux/reducers/trailerMovie";
import Rating from "@/utils/Rating";
import PlayTrailer from "./Play-Trailer";
import BackgroundMovie from "./Background-Movie";
import { Box, Typography } from "@mui/material";
import { BeforeDot, classes } from "./Style-MainDetail";

const MainDetail = ({ movie, type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTrailer([]));
  }, []);

  return (
    <>
      <BackgroundMovie poster={movie.poster_path}>
        <Box sx={classes.boxMainParent}>
          <ImageMovie
            image={movie.poster_path}
            title={type ? movie.name : movie.title}
          />
          <Box sx={classes.boxSubParent}>
            <Box sx={classes.boxSpanTitle}>
              <Typography variant="h4">
                {type ? movie.name : movie.title}{" "}
                <span style={classes.spanYear}>
                  (
                  {type
                    ? movie.first_air_date.slice(0, 4)
                    : movie.release_date.slice(0, 4)}
                  )
                </span>
              </Typography>
            </Box>
            <Box sx={classes.boxMainDetails}>
              <Box sx={classes.boxCertificates}>
                <Typography variant="body1">
                  {type
                    ? movie.first_air_date && <>{movie.first_air_date}</>
                    : movie.release_date.length !== 0 && (
                        <>{movie.release_date}</>
                      )}
                </Typography>
              </Box>
              {movie.genres.length !== 0 && movie.genres !== undefined && (
                <BeforeDot>
                  <>
                    <Typography variant="body1" display={classes.spanTypeMovie}>
                      Episodes :{" "}
                    </Typography>
                    {movie.genres.slice(0, 4).map((genre, item) => (
                      <Link href={`/category/${genre.name}`} key={item}>
                        <Typography
                          variant="body1"
                          sx={classes.spanLinkCategory}
                        >
                          {genre.name}
                          {item + 1 === 4 ? "" : ","}
                        </Typography>
                      </Link>
                    ))}
                  </>
                </BeforeDot>
              )}
              {movie.runtime && (
                <BeforeDot>
                  <Typography variant="body1" sx={classes.spanTitleEpisodes}>
                    Duration :
                  </Typography>
                  <Typography variant="body1">
                    <DurationExchange duration={movie.runtime} />
                  </Typography>
                </BeforeDot>
              )}
            </Box>
            <Box sx={classes.boxRatingTrailer}>
              {movie.vote_average && (
                <Box sx={classes.boxRating}>
                  <Rating rate={+movie.vote_average} />
                  <Box sx={classes.boxTextRating}>
                    <Typography variant="body2">User</Typography>
                    <Typography variant="body2">Score</Typography>
                  </Box>
                </Box>
              )}
              {/* <PlayTrailer image={movie.title.image.url} id={movie.title.id} /> */}
            </Box>
            <Box sx={classes.boxOverview}>
              {movie.overview && (
                <>
                  <Typography variant="h6">Overview</Typography>
                  <Box>
                    <Typography variant="body1" sx={classes.spanOverview}>
                      {movie.overview}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </BackgroundMovie>
    </>
  );
};

export default MainDetail;
