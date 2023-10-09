import Head from "next/head";
import { getPapularMovies, getTopRatedMovies } from "@/lib/movies/getMovies";
import Loading from "@/component/common/Loading";
import TrendingMovie from "@/component/pages/movies/Trending-Movie";
import CustomError from "@/component/common/CustomError";
import TopRatedMovie from "@/component/pages/movies/TopRated-Movie";
import { Box } from "@mui/material";

const ListMovies = ({ trendingmovies, topratedmovies }) => {

   if ((!trendingmovies && trendingmovies !== null) || (!topratedmovies && topratedmovies !== null)) {
      return <Loading />
   }

   if (trendingmovies === null && topratedmovies === null) return <CustomError />

   return (
      <>
         <Head>
            <title>Movies</title>
            <meta name="description" content="dislpay movoies of top until last" />
         </Head>
         <Box>
            {trendingmovies === null || trendingmovies.length <= 1 || trendingmovies.message ? "" :
               <TrendingMovie movies={trendingmovies} />
            }
            {topratedmovies === null || topratedmovies.length <= 1 || topratedmovies.message ? "" :
               <TopRatedMovie movies={topratedmovies} />
            }
         </Box>
      </>
   );
}

export async function getServerSideProps() {

   const [dataTrendingMovie, dataTopRatedMovie] = await Promise.all([
      await new Promise(resolve => setTimeout(() => resolve(getPapularMovies()), 3000)),
      await new Promise(resolve => setTimeout(() => resolve(getTopRatedMovies()), 6000)),
   ]);

   return {
      props: {
         trendingmovies: dataTrendingMovie,
         topratedmovies: dataTopRatedMovie
      }
   }
}


export default ListMovies;