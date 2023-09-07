"use client"
import { Box, Grid, Typography } from "@mui/material";
// import Image from "next/image";
import { useStyles, ImageFixer } from "./style-page";
import { getMovies } from './useGetMovies'

const Movie = async () => {

    const classes = useStyles()
    const data = await getMovies()

    return (
        <>
            <Box>
                <Typography variant="h5" className={classes.typograhyh5}>
                    All Movie
                </Typography>
                <Grid container spacing={2}>
                    {data.results.map(d => d).map((movie, i) => (
                        <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
                            <Typography variant="h6" style={{ color: "#b2b2b2" }}>
                                {movie.title}
                            </Typography>
                        </Grid>
                    ))}
                    {/* <Grid item xs={6} sm={6} md={4} lg={3}>
                        <ImageFixer>
                            <Image
                                src="https://i.redd.it/4j02vdbcupha1.jpg"
                                alt="breacking bad"
                                width={0}
                                height={0}
                                sizes="100vw"
                                property
                                style={{ borderRadius: "13px", width: '100%', height: "100%" }}
                            />
                        </ImageFixer>
                    </Grid>*/}
                </Grid >
            </Box >
        </>
    );
}

export default Movie;