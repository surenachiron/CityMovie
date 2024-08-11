import { Box, Button } from "@mui/material";
import ImageComingSoon from "./Image-ComingSoon";
import ContentLg from "./Content-Lg";
import ContentSm from "./Content-Sm";
import classes from "./Style-MainContent";

const MainContent = ({ movie }) => {
  return (
    <>
      <Button variant="contained" color="error" sx={classes.buttonComingSoon}>
        Coming Soon
      </Button>
      <Box sx={classes.boxMainContent}>
        <ImageComingSoon movie={movie} />
        <ContentLg movie={movie} />
        <ContentSm movie={movie} />
      </Box>
    </>
  );
};

export default MainContent;
