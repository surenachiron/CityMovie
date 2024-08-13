import { Box } from "@mui/material";
import classes from "./Style-Casts";

const ImageCast = ({ image, alt }) => {
  return (
    <Box sx={classes.boxImageCast} key={alt}>
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/w500/${image}`
            : "/images/blur-image-svg.svg"
        }
        alt={alt ? alt : "image"}
        sizes="100vw"
        width={140}
        height={210}
      />
    </Box>
  );
};

export default ImageCast;
