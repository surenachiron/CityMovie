import Image from "next/image";
import { Box } from "@mui/material";
import classes from "./Style-ImageComingSoon";

const ImageComingSoon = ({ movie }) => {
  return (
    <Box sx={classes.boxImageComingSoon}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/images/blur-image-svg.svg"
        }
        alt={movie.title ? movie.title : "image"}
        width={500}
        height={450}
        style={classes.imageComingSoon}
        placeholder="blur"
      />
    </Box>
  );
};

export default ImageComingSoon;
