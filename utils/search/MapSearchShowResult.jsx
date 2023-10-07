import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { BoxDetailsSingleSearch, ParentBoxSingleSearch } from "./styled-search";
import { useEffect, useState } from "react";

const MapSearchShowResult = ({ id, image, title, year, type }) => {

    const [orginalID, setOrginalID] = useState("")
    useEffect(() => {
        switch (type) {
            case "movie":
                setOrginalID(`/movies/${id}`);
                break;
            case "tvSeries":
                setOrginalID(`/tv-shows/${id}`)
                break;
            case "tvMiniSeries":
                setOrginalID(`/tv-shows/${id}`);
                break;
            default:
                setOrginalID("")
                break;
        }
    }, [id])

    return (
        <>
            {orginalID === "" ? "" :
                <Link href={orginalID} key={id} >
                    <ParentBoxSingleSearch>
                        <Box>

                        </Box>
                        <Box>
                            {image ?
                                <Image
                                    src={image ? image : '/images/blur-image-svg.svg'}
                                    alt={title ? title : ""}
                                    width={50}
                                    height={50}
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    placeholder="blur"
                                    blurDataURL="/images/blur-image.jpg"
                                />
                                : ""}
                        </Box>
                        <BoxDetailsSingleSearch>
                            <Typography variant="body1" sx={{ color: "white" }}>{title ? title : ""}</Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>{year ? year : ""}</Typography>
                        </BoxDetailsSingleSearch>
                    </ParentBoxSingleSearch>
                </Link >
            }
        </>
    );
}

export default MapSearchShowResult;