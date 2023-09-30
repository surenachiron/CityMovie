import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { getPapularMovies } from "@/lib/movies/getMovies";
import Loading from "@/component/common/_loading";
import TrendingMovie from "@/component/pages/movies/Trending-Movie";
import CustomError from "@/component/common/CustomError";

const ListMovies = ({ movies }) => {

   if (!movies) {
      return <Loading />
   }

   return (
      <>
         <Head>
            <title>Movies</title>
            <meta name="description" content="dislpay movoies of top until last" />
         </Head>
         {movies === "error" ? <CustomError /> :
            <Box>
               <TrendingMovie movies={movies} />
            </Box>
         }
      </>
   );
}

export async function getStaticProps() {

   const dataArraMovies = await getPapularMovies()

   if (dataArraMovies === undefined) {
      return {
         props: {
            movies: "error"
         },
      }
   } else {
      return {
         props: {
            movies: dataArraMovies
         },
      }
   }
}


export default ListMovies;