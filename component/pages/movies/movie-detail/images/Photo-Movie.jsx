import { Box, Typography } from "@mui/material";
import classes from "./Style-PhotoMovie";

const PhotoMovie = ({ photos, type }) => {
  return (
    <Box sx={classes.boxParent}>
      <Typography variant="h4" sx={classes.titlePhotos}>
        Photos
      </Typography>
      <Box sx={classes.boxMainParent}>
        <Box sx={classes.boxSubParent}>
          {photos.slice(0, 10).map((photo) => (
            <>
              {photo.file_path && (
                <Box sx={classes.boxImage} key={photo.file_path}>
                  <img
                    src={
                      photo.file_path
                        ? `https://image.tmdb.org/t/p/w500/${photo.file_path}`
                        : "/images/blur-image-svg.svg"
                    }
                    alt={`image ${photo.file_path}`}
                    style={classes.image}
                  />
                </Box>
              )}
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PhotoMovie;
