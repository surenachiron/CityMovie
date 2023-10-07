import Link from "next/link";
import ImageCast from "./Image-Cast";
import { Box, Card, Typography } from "@mui/material";

const TopCast = ({ casts }) => {

    return (
        <Box sx={{ my: "2rem" }}>
            <Typography variant="h4" sx={{ mb: "1rem" }}>Top Cast</Typography>
            <Box sx={{ position: "relative" }}>
                <Box sx={{
                    WebkitOverflowScrolling: "touch", overflowY: "hidden", overflowX: "scroll", whiteSpace: "normal", boxSizing: "border-box", pb: "10px", display: "flex",
                }} >
                    {casts.map(cast => (
                        <>{cast.id ?
                            <Card sx={{ minWidth: 140, width: "140px", mr: "1rem", pb: "10px" }} key={cast.id ? cast.id : cast.name}>
                                <Link href={cast.id ? `actor/${cast.id.slice(6, -1)}` : ""} >
                                    <Box sx={{ minWidth: 140, width: "140px", mr: "1rem", pb: "10px" }} >
                                        <ImageCast image={cast.image ? cast.image.url : undefined} alt={cast.name} />
                                        <Typography variant="body1" sx={{ fontSize: "1em", px: "10px", pt: "5px" }}>
                                            {cast.name}
                                        </Typography>
                                    </Box >
                                </Link>
                            </Card>
                            : ""}</>
                    ))}
                </Box>
            </Box>
        </Box >
    );
}

export default TopCast;