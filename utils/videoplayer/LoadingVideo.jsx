import Image from "next/image";
import { Loadingvideo } from "./styled-videoplayer";
import { Box } from "@mui/material";

const LoadingVideo = () => {
    return (
        <Box sx={Loadingvideo}>
            <Image
                src={"/images/loading-sppiner.svg"}
                alt="loading gif"
                width={130}
                height={130}
                priority="true"
            />
        </Box>
    );
}

export default LoadingVideo;