import { Box } from "@mui/material";
import Image from "next/image";

const classes = {
    background: {
        position: "fixed", backgroundColor: "black", opacity: ".50", inset: "0px"
    },
    iconloading: {
        display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", width: "100%", inset: "0px"
    }
}

const loading = () => {
    return (
        <>
            <Box sx={classes.background}></Box>
            <Box sx={classes.iconloading}>
                <Image
                    src={"/images/loading-sppiner.svg"}
                    alt="loading gif"
                    width={150}
                    height={150}
                />
            </Box>
        </>
    );
}

export default loading;