import { Box, Button } from "@mui/material";
import ImageComminSoon from "./Image-ComminSoon";
import ContentLg from "./Content-Lg";
import ContentSm from "./Content-Sm";

const MainContent = ({ movie }) => {

    return (
        <>
            <Button variant='contained' color='error' sx={{ p: "5px", borderRadius: "25px", position: "absolute", top: "5px", right: "5px", zIndex: "1", fontSize: "10px", }}>Comming Soon</Button>
            <Box sx={{ position: "relative", width: "100%", height: "100%", borderRadius: "16px" }} key={movie}>
                <ImageComminSoon movie={movie} />
                <ContentLg movie={movie} />
                <ContentSm movie={movie} />
            </Box >
        </>
    );
}

export default MainContent;