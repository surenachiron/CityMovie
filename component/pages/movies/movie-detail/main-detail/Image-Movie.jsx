import { Box } from "@mui/material";
import classes from "./Style-ImageMovie";

const ImageMovie = ({ image, title }) => {
  return (
    <Box sx={classes.boxImageMovie}>
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/w500/${image}`
            : "/images/blur-image-svg.svg"
        }
        alt={title ? title : "image"}
        sizes="100vw"
        style={classes.image}
        width={300}
        height={450}
      />
    </Box>
  );
};

export default ImageMovie;
