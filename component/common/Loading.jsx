import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";
import classes from './Style-Loading'

const Loading = ({ shadow }) => {
    return (
        <>
            <Head>
                <title>!Loading...</title>
                <meta name="description" content="page is loading" />
            </Head>
            {shadow ? "" : <Box sx={classes.background}></Box>}
            <Box sx={classes.iconLoading}>
                <Image
                    src={"/images/loading-spinner.svg"}
                    alt="loading gif"
                    width={130}
                    height={130}
                    priority="true"
                />
            </Box>
        </>
    );
}

export default Loading;