import { Box } from "@mui/material";

const BackgroundMovie = ({ movie, children }) => {

    return (
        <>
            <Box sx={{ backgroundImage: `url(${movie.title.image.url})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "cover", borderRadius: "10px" }}>
                <Box sx={{ backgroundColor: "#000000ba", backdropFilter: "blur(1px)", padding: { lg: "1rem", xs: ".5rem" }, borderRadius: "8px" }}>
                    {children}
                </Box>
            </Box>
        </>
    );
}

export default BackgroundMovie;