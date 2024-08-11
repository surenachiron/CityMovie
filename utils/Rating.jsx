import { Box, CircularProgress, Typography } from "@mui/material";
import classes from "./Style-Rating";

const Rating = ({ rate }) => {
  console.log(rate);
  const percentRate = rate * 10;
  return (
    <Box sx={classes.boxParent}>
      <CircularProgress
        variant="determinate"
        color="warning"
        value={rate * 10}
      />
      <Box sx={classes.boxRate}>
        <Typography variant="caption" component="p" color="light">
          {percentRate.toString().slice(0, 2)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Rating;
