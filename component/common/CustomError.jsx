import Head from "next/head";
import { Box, Typography } from "@mui/material";
import classes from "./Style-CustomError";

const CustomError = () => {

    return (
        <div>
            <Head>
                <title>Error</title>
                <meta name="description" content="this page something will error" />
            </Head>
            <Box sx={classes.BoxError}>
                <Box sx={classes.BoxContent}>
                    <Typography variant="h5" sx={classes.HeadingError}>Connection with the server failed.</Typography>
                    <Typography variant="body1" sx={classes.ParagraphError}>Please check your internet connection and try again</Typography>
                    <Typography variant="body1"><span style={classes.SpanError}>( </span>make sure vpn is connected or dns is set<span style={classes.SpanError}> )</span></Typography>
                </Box>
            </Box>
        </div>
    );
}

export default CustomError;