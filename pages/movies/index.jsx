import { Box } from "@mui/material";
import Head from "next/head";
import { getPapularMovies } from "@/lib/movies/getMovies";
import Loading from "@/component/common/Loading";
import TrendingMovie from "@/component/pages/movies/Trending-Movie";
import CustomError from "@/component/common/CustomError";

const ListMovies = ({ movies }) => {

   if (!movies && movies !== null) {
      return <Loading />
   }

   return (
      <>
         <Head>
            <title>Movies</title>
            <meta name="description" content="dislpay movoies of top until last" />
         </Head>
         {movies === null ? "" :
            <Box>
               <TrendingMovie movies={movies} />
            </Box>
         }
      </>
   );
}

export async function getStaticProps() {

   const dataArraMovies = await getPapularMovies()

   return {
      props: {
         movies: dataArraMovies
      },
      revalidate: 172800
   }
}


export default ListMovies;