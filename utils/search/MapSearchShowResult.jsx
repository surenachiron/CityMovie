import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { classesMapSearchShowResult } from "./Style-Search";
import { Box, Typography } from "@mui/material";

const MapSearchShowResult = ({ id, image, title, year, type }) => {

    const [originalID, setOriginalID] = useState("")
    useEffect(() => {
        switch (type) {
            case "movie":
                setOriginalID(`/movies/${id}`);
                break;
            case "tvSeries":
                setOriginalID(`/tv-shows/${id}`)
                break;
            case "tvMiniSeries":
                setOriginalID(`/tv-shows/${id}`);
                break;
            default:
                setOriginalID("")
                break;
        }
    }, [id])

    return (
        <>
            {originalID !== "" &&
                <Link href={originalID} key={id} >
                    <Box sx={classesMapSearchShowResult.boxParentBoxSingleSearch}>
                        <Box>
                            {image &&
                                <Image
                                    src={image ? image : '/images/blur-image-svg.svg'}
                                    alt={title ? title : "image"}
                                    width={50}
                                    height={50}
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    placeholder="blur"
                                    blurDataURL="/images/blur-image.jpg"
                                />
                            }
                        </Box>
                        <Box sx={classesMapSearchShowResult.boxDetailsSingleSearch}>
                            <Typography variant="body1" sx={classesMapSearchShowResult.spanTitle}>{title && title}</Typography>
                            <Typography variant="body2" sx={classesMapSearchShowResult.spanYear}>{year && year}</Typography>
                        </Box>
                    </Box>
                </Link >
            }
        </>
    );
}

export default MapSearchShowResult;