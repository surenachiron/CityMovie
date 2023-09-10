import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ImageFixer } from "./style-page";
// import { getMovies } from './useGetMovies'

// const getMovies = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTQyY2I0NTM2N2I5YjJhZGUyYmE2MDI3Nzg0ZjZiOCIsInN1YiI6IjY0ZjcyNzkxOGUyMGM1MGNkODQzNWI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Coj1XqkHwJFAKiOqVqRJRibmrsUlCP1r1Z4EC4_UA8w'
//         }
//     };

//     const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     return data.json();
// }

const getMoviestest = async () => {
    const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}')
    return data.json();
}

export const metadata = {
    title: 'Movie',
    description: 'all movie',
}

const Movie = async () => {

    // const data = await getMovies()
    const datatest = await getMoviestest()

    return (
        <>
            <Box>
                <Typography variant="h5" mt={4} mb={1.4}>
                    All Movie
                </Typography>
                <Grid container spacing={1}>
                    {datatest.data.map((movie, i) => (
                        <Grid item xs={4} sm={4} md={2} lg={2} key={i}>
                            <ImageFixer>
                                <Image
                                    src={movie.poster}
                                    alt={movie.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    property
                                    style={{ borderRadius: "13px", width: '100%', height: "100%" }}
                                />
                            </ImageFixer>
                            <Typography variant="subtitle1" component={"p"} sx={{ marginTop: "1rem" }}>
                                {movie.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid >
            </Box >
        </>
    );
}

export default Movie;