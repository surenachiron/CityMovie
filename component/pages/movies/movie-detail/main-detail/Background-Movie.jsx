import { Box } from "@mui/material";
import classes from "./Style-BackgroundMovie";

const BackgroundMovie = ({ poster, children }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <Box sx={classes.boxSubParent}>{children}</Box>
      </Box>
    </>
  );
};

export default BackgroundMovie;
