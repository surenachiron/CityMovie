import Image from "next/image";
import { LoadingVideoStyle } from "./Style-VideoPlayer";
import { Box } from "@mui/material";

const LoadingVideo = () => {
    return (
        <Box sx={LoadingVideoStyle}>
            <Image
                src={"/images/loading-spinner.svg"}
                alt="loading gif"
                width={130}
                height={130}
                priority="true"
            />
        </Box>
    );
}

export default LoadingVideo;