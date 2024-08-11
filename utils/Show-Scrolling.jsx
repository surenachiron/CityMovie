import Link from "next/link";
import { Box, Typography } from "@mui/material";
import classes from "@/utils/Style-ShowScrolling";

const ShowScrolling = ({ movies, type }) => {
  return (
    <Box sx={classes.boxMainParent}>
      <Box sx={classes.boxSubParent}>
        {movies.results.map((movie) => (
          <>
            {movie && (
              <div key={movie.id}>
                <Box key={movie.id} sx={classes.boxData}>
                  <Link
                    href={type ? `/tv-shows/${movie.id}` : `/movies/${movie.id}`}
                    style={classes.link}
                  >
                    <Box sx={classes.boxImage}>
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : "/images/blur-image-svg.svg"
                        }
                        alt={type ? movie.name : movie.title}
                        width={140}
                        height={250}
                        style={classes.image}
                      />
                      <Box sx={classes.boxHoverImage} />
                    </Box>
                    <Box sx={classes.boxTitle}>
                      <Typography variant="caption">
                        <bdi>
                          {type ? (
                            <>
                              {movie.name.length >= 50
                                ? movie.name.slice(0, 50) + "..."
                                : movie.name}
                            </>
                          ) : (
                            <>
                              {movie.title.length >= 50
                                ? movie.title.slice(0, 50) + "..."
                                : movie.title}
                            </>
                          )}
                        </bdi>
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
            )}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default ShowScrolling;
