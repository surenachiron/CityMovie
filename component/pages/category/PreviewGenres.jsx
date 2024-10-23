import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import {
  BoxContentPreviewGenresLarge,
  BoxImagePreviewGenresLarge,
  BoxTitlePreviewGenresLarge,
  ImageLargeStyle,
  ImageSmStyle,
  MainBoxPreviewGenresLarge,
  TitleInSm,
} from "./Style-PreviewGenres";

const PreviewGenres = ({ genres }) => {
  const gerBrowserWidth = useSelector((state) => state.Other.browserWidth);
  const Router = useRouter();

  return (
    <>
      {Router.pathname === "/" && gerBrowserWidth < 900 && (
        <Typography variant="h4" sx={TitleInSm}>
          Genres
        </Typography>
      )}
      <MainBoxPreviewGenresLarge>
        {genres.map((genre) => (
          <BoxContentPreviewGenresLarge
            sx={{ marginTop: { md: genre.style.marginTop } }}
            key={genre.title}
          >
            <Link href={genre.href}>
              <BoxImagePreviewGenresLarge>
                {gerBrowserWidth >= 900 ? (
                  <Image
                    src={genre.img ? genre.img : "/images/blur-image-svg.svg"}
                    alt={genre.title ? genre.title : "image"}
                    width={180}
                    height={350}
                    style={ImageLargeStyle}
                    placeholder="blur"
                    blurDataURL="/images/blur-image.jpg"
                  />
                ) : (
                  <Image
                    src={genre.img ? genre.img : "/images/blur-image-svg.svg"}
                    alt={genre.title ? genre.title : "image"}
                    width={180}
                    height={350}
                    style={ImageSmStyle}
                    placeholder="blur"
                    blurDataURL="/images/blur-image.jpg"
                  />
                )}
              </BoxImagePreviewGenresLarge>
              <BoxTitlePreviewGenresLarge>
                <Typography variant="body1">{genre.title}</Typography>
              </BoxTitlePreviewGenresLarge>
            </Link>
          </BoxContentPreviewGenresLarge>
        ))}
      </MainBoxPreviewGenresLarge>
    </>
  );
};

export default PreviewGenres;
