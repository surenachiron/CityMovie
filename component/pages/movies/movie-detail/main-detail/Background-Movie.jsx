import { Box } from "@mui/material";
import classes from "./Style-BackgroundMovie";

const BackgroundMovie = ({ movie, children }) => {

    return (
        <>
            <Box sx={{ backgroundImage: `url(${movie.title.image.url})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "cover", borderRadius: "10px" }}>
                <Box sx={classes.boxSubParent}>
                    {children}
                </Box>
            </Box>
        </>
    );
}

export default BackgroundMovie;