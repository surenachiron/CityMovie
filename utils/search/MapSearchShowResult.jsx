import { useEffect, useState } from "react";
import Link from "next/link";

import { Box, Typography } from "@mui/material";

import { classesMapSearchShowResult } from "./Style-Search";

const MapSearchShowResult = ({ id, image, title, year, type }) => {
  console.log(image);
  const [originalID, setOriginalID] = useState("");
  useEffect(() => {
    switch (type) {
      case "movie":
        setOriginalID(`/movies/${id}`);
        break;
      case "tv":
        setOriginalID(`/tv-shows/${id}`);
        break;
      case "tvMiniSeries":
        setOriginalID(`/tv-shows/${id}`);
        break;
      default:
        setOriginalID("");
        break;
    }
  }, [id]);

  return (
    <>
      {originalID !== "" && (
        <Link href={originalID} key={id}>
          <Box sx={classesMapSearchShowResult.boxParentBoxSingleSearch}>
            <Box>
              <img
                src={
                  image
                    ? `https://image.tmdb.org/t/p/w500/${image}`
                    : "/images/blur-image-svg.svg"
                }
                alt={title ? title : "image"}
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box sx={classesMapSearchShowResult.boxDetailsSingleSearch}>
              <Typography
                variant="body1"
                sx={classesMapSearchShowResult.spanTitle}
              >
                {title && title}
              </Typography>
              <Typography
                variant="body2"
                sx={classesMapSearchShowResult.spanYear}
              >
                {year && year.slice(0, 4)}
              </Typography>
            </Box>
          </Box>
        </Link>
      )}
    </>
  );
};

export default MapSearchShowResult;
