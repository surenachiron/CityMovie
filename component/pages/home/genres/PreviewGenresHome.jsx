import { Typography } from "@mui/material";
import Image from "next/image";
import { BoxContentPreviewGenresLarge, BoxImagePreviewGenresLarge, BoxTitlePreviewGenresLarge, MainBoxPreviewGenresLarge } from "./styled-previewgenresHome";
import Link from "next/link";
import { useSelector } from "react-redux";

const PreviewGenresHome = ({ genres }) => {

    const browserwidth = useSelector(state => state.Other.browserWidth)

    return (
        <>
            {browserwidth < 900 ? <Typography variant="h4" sx={{ marginTop: "2rem" }}>Genres</Typography> : ""}
            <MainBoxPreviewGenresLarge>
                {genres.map((genre) => (
                    <BoxContentPreviewGenresLarge sx={{ marginTop: { md: genre.style.marginTop } }} key={genre.title}>
                        <Link href={genre.href}>
                            <BoxImagePreviewGenresLarge>
                                {browserwidth >= 900 ?
                                    <Image
                                        src={genre.img ? genre.img : "/images/blur-image-svg.svg"}
                                        alt={genre.title ? genre.title : ""}
                                        width={180}
                                        height={350}
                                        style={{ height: "100%", borderRadius: "10px" }}
                                        placeholder="blur"
                                        blurDataURL="/images/blur-image.jpg"
                                    />
                                    :
                                    <Image
                                        src={genre.img ? genre.img : "/images/blur-image-svg.svg"}
                                        alt={genre.title ? genre.title : ""}
                                        width={180}
                                        height={350}
                                        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                                        placeholder="blur"
                                        blurDataURL="/images/blur-image.jpg"
                                    />
                                }
                            </BoxImagePreviewGenresLarge>
                            <BoxTitlePreviewGenresLarge>
                                <Typography variant="body1">
                                    {genre.title}
                                </Typography>
                            </BoxTitlePreviewGenresLarge>
                        </Link>
                    </BoxContentPreviewGenresLarge>
                ))
                }
            </MainBoxPreviewGenresLarge >
        </>
    );
}

export default PreviewGenresHome;