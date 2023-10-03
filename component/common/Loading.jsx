import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

const classes = {
    background: {
        position: "fixed", backgroundColor: "black", opacity: ".80", inset: "0px",
        zIndex: "100"
    },
    iconloading: {
        display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", width: "100%", inset: "0px", zIndex: "101"
    }
}

const Loading = ({ shadow }) => {
    return (
        <>
            <Head>
                <title>!Loading...</title>
                <meta name="description" content="page is loading" />
            </Head>
            {shadow ? "" : <Box sx={classes.background}></Box>}
            <Box sx={classes.iconloading}>
                <Image
                    src={"/images/loading-sppiner.svg"}
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