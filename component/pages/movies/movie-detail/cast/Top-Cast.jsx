import Link from "next/link";
import { Box, Card, Typography } from "@mui/material";
import ImageCast from "./Image-Cast";
import classes from "./Style-Casts";

const TopCast = ({ casts }) => {

    return (
        <Box sx={classes.boxParent}>
            <Typography variant="h4" sx={classes.titleTopCast}>Top Cast</Typography>
            <Box sx={classes.boxMainParentCast}>
                <Box sx={classes.boxSubParentCast} >
                    {casts.map(cast => (
                        <>{cast.id &&
                            <Card sx={classes.boxCardCast} key={cast.id ? cast.id : cast.name}>
                                <Link href={cast.id && `actor/${cast.id.slice(6, -1)}`} >
                                    <Box sx={classes.boxCardCast} >
                                        <ImageCast image={cast.image ? cast.image.url : undefined} alt={cast.name} />
                                        <Typography variant="body1" sx={classes.spanNameCast}>
                                            {cast.name}
                                        </Typography>
                                    </Box >
                                </Link>
                            </Card>
                        }</>
                    ))}
                </Box>
            </Box>
        </Box >
    );
}

export default TopCast;