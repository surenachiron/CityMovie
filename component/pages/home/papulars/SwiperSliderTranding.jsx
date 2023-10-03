import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

const SwiperSliderTranding = ({ image, title, relaseData, ratings, genres, id }) => {

    return (
        <>
            <Button variant='contained' color='error' sx={{ p: "5px", borderRadius: "25px", position: "absolute", top: "5px", left: "5px", zIndex: "1", fontSize: "10px" }}>Comming Soon</Button>
            <Box sx={{ width: "100%", height: "100%", position: "absolute" }}>
                <Image
                    src={image}
                    alt={title}
                    width={1120}
                    height={450}
                    style={{ width: "100%", height: "100%" }}
                />
            </Box>
            <Box sx={{ backgroundColor: "#00000070", backdropFilter: "blur(4px)", p: "10px", borderRadius: "0 0 10px 10px", width: "100%", position: "absolute", bottom: "0", left: "0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ textAlign: "start" }}>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant='body1' sx={{ color: "#bbbbbb", my: "7px" }}>
                            {relaseData}
                        </Typography>
                        {ratings ?
                            <Button variant='contained' color='warning' sx={{ width: "fit-content", minWidth: "auto", p: "0 4px", mx: "10px", cursor: "auto" }}>
                                {ratings.rating}
                            </Button>
                            : ""}
                    </Box>
                    {genres.length >= 4 ?
                        <>
                            {genres.slice(0, 4).map((genre, item) => <Link href={`/genre/${genre}`} key={item}><Typography variant="body1" sx={{ mr: "2px", display: "inline", color: "#bbbbbb" }}>{genre}{(item + 1) === 4 ? "" : ","}</Typography></Link>)}
                        </> :
                        <>
                            {genres.map((genre, item) => <Link href={`/genre/${genre}`} key={item}><Typography variant="body1" sx={{ mr: "2px", display: "inline", color: "#bbbbbb" }}>{genre}{(item + 1) === genres.length ? "" : ","}</Typography></Link>)}
                        </>
                    }
                </Box>
                <Link href={`/movies/${id.slice(7, -1)}`}>
                    <Button variant='text' color='inherit' sx={{ p: "4px", background: "red", backdropFilter: "blur(5px)", borderRadius: "25px" }}>More</Button>
                </Link>
            </Box>
        </>
    );
}

export default SwiperSliderTranding;