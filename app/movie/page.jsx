import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Movie = async () => {

    return (
        <Box>
            <Typography variant="h5" sx={{ mt: "2rem", mb: "10px" }}>
                All Movie
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Image
                    src="https://www.digikala.com/mag/wp-content/uploads/2021/05/photo_2021-05-12_15-29-53.jpg"
                    alt="breacking bad"
                    width={250}
                    height={200}
                    property
                    style={{ borderRadius: "13px", marginBottom: ".5rem" }}
                />
                <Image
                    src="https://www.seyedrezabazyar.com/fa/files/2021/05/Friends.jpg"
                    alt="breacking bad"
                    width={250}
                    height={200}
                    property
                    style={{ borderRadius: "13px", marginBottom: ".5rem" }}
                />
                <Image
                    src="https://www.uptvs.com/wp-contents/uploads/2019/05/8-Mile-2002-2.jpg"
                    alt="breacking bad"
                    width={250}
                    height={200}
                    property
                    style={{ borderRadius: "13px", marginBottom: ".5rem" }}
                />
                <Image
                    src="https://sorenmovie.ir/wp-content/uploads/2022/03/peaky-blinders-2022.jpg"
                    alt="breacking bad"
                    width={250}
                    height={200}
                    property
                    style={{ borderRadius: "13px",marginBottom: ".5rem" }}
                />
            </Box>
        </Box>
    );
}

export default Movie;