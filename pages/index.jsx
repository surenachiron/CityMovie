import Head from 'next/head'
import dynamic from 'next/dynamic';

const CustomError = dynamic(() => import("@/component/common/CustomError"));
const Loading = dynamic(() => import("@/component/common/Loading"));
const HomeContext = dynamic(() => import("@/component/pages/home/Home-Context"));
import { getPapularTvShows } from '@/lib/TvShows/getTvShows'
import { getComingSoonMovie } from '@/lib/comingSoon/getComingSoon'
import { getPapularMovies } from '@/lib/movies/getMovies'
import { getGenresList } from '@/lib/category/getShowLists'

const Home = ({ comingSoon, trendMovies, trendTvShow, genres }) => {

  if ((!comingSoon && comingSoon !== null) || (!trendMovies && trendMovies !== null) || (!trendTvShow && trendTvShow !== null)) {
    return <Loading />
  }
  if (trendMovies === null && trendMovies === null && comingSoon === null) return <CustomError />

  return (
    <>
      <Head>
        <title>City Movie</title>
        <meta name="description" content="cityMovie a platform for shows trend movie ans series" />
      </Head>
      <div>
        <HomeContext trendMovies={trendMovies} trendTvShow={trendTvShow} comingSoonMovie={comingSoon} genres={genres} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  /// we use this approach with setTimeout because we have limit in request to api actually we can 10 request per second 
  const [dataComingSoon, dataTrendMovies, dataTrendTvShows] = await Promise.all([
    await new Promise(resolve => setTimeout(() => resolve(getComingSoonMovie()), 1000)),
    await new Promise(resolve => setTimeout(() => resolve(getPapularMovies()), 3000)),
    await new Promise(resolve => setTimeout(() => resolve(getPapularTvShows()), 6000)),
  ]);
  const imagesGenres = getGenresList()

  return {
    props: {
      comingSoon: dataComingSoon,
      trendMovies: dataTrendMovies,
      trendTvShow: dataTrendTvShows,
      genres: imagesGenres
    }
  }
}


export default Home