import Head from "next/head";
import { Box } from "@mui/material";

import { getPapularMovies, getTopRatedMovies } from "@/lib/movies/getMovies";
import Loading from "@/component/common/Loading";
import TrendingMovie from "@/component/pages/movies/Trending-Movie";
import CustomError from "@/component/common/CustomError";
import TopRatedMovie from "@/component/pages/movies/TopRated-Movie";

const ListMovies = ({ trendingMovies, topRatedMovies }) => {

   if ((!trendingMovies && trendingMovies !== null) || (!topRatedMovies && topRatedMovies !== null)) {
      return <Loading />
   }

   if (trendingMovies === null && topRatedMovies === null) return <CustomError />

   return (
      <>
         <Head>
            <title>Movies</title>
            <meta name="description" content="display movies of top until last" />
         </Head>
         <Box>
            {(trendingMovies !== null) && <TrendingMovie movies={trendingMovies} />}
            {(topRatedMovies !== null) && <TopRatedMovie movies={topRatedMovies} />}
         </Box>
      </>
   );
}

export async function getStaticProps() {

   const [dataTrendingMovie, dataTopRatedMovie] = await Promise.all([
      await new Promise(resolve => setTimeout(() => resolve(getPapularMovies()), 1000)),
      await new Promise(resolve => setTimeout(() => resolve(getTopRatedMovies()), 3000)),
   ]);

   return {
      props: {
         trendingMovies: dataTrendingMovie,
         topRatedMovies: dataTopRatedMovie
      },
      revalidate: 172800
   }
}


export default ListMovies;