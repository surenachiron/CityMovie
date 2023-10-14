import { Box, CircularProgress, Typography } from "@mui/material";
import classes from './Style-Rating'

const Rating = ({ rate }) => {

    return (
        <Box sx={classes.boxParent}>
            <CircularProgress variant="determinate" color="warning" value={rate} />
            <Box sx={classes.boxRate}>
                <Typography variant="caption" component="p" color="light">
                    {rate}%
                </Typography>
            </Box>
        </Box>

    );
}

export default Rating;