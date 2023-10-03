import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PhotoMovie = ({ photos }) => {

    return (
        <Box sx={{ my: "2rem" }}>
            <Typography variant="h4" sx={{ mb: "1rem" }}>Photos</Typography>
            <Box sx={{ position: "relative" }}>
                <Box sx={{
                    WebkitOverflowScrolling: "touch", overflowY: "hidden", overflowX: "scroll", whiteSpace: "normal", boxSizing: "border-box", pb: "10px", display: "flex"
                }} >
                    {photos.map(photo => (
                        <Box sx={{ minWidth: 300, width: "300px", minHeight: 200, height: "200px", mr: "1rem" }} key={photo.url}>
                            <Image
                                src={photo ? photo.url : "/images/blur-image.jpg"}
                                alt={photo.caption ? photo.caption : ""}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: "8px"
                                }}
                                placeholder="blur"
                                blurDataURL="/images/blur-image.jpg"
                                width={300}
                                height={300}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default PhotoMovie;