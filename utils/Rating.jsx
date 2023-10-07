import { Box, CircularProgress, Typography } from "@mui/material";

const Rating = ({ rate }) => {

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex',alignItems:"center" }}>
            <CircularProgress variant="determinate" color="warning" value={rate} />
            <Box
                sx={{
                    top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="p" color="light">
                    {rate}%
                </Typography>
            </Box>
        </Box>

    );
}

export default Rating;