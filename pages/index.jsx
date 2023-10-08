import Head from 'next/head'
import CustomError from '@/component/common/CustomError'
import Loading from '@/component/common/Loading'
import HomeContext from '@/component/pages/home/Home-Context'
import { getPapularTvShows } from '@/lib/TvShows/getTvShows'
import { getCommingSoonMovie } from '@/lib/comming-soon/getComingSoon'
import { getPapularMovies } from '@/lib/movies/getMovies'
import { getGenresList } from '@/lib/category/getShowLists'

const Home = ({ commingsoon, trendMovies, trendTvShow, genres }) => {

  console.log(commingsoon, trendMovies, trendTvShow)

  if ((!commingsoon && commingsoon !== null) || (!trendMovies && trendMovies !== null) || (!trendTvShow && trendTvShow !== null)) {
    return <Loading />
  }
  if (trendMovies === null && trendMovies === null && commingsoon === null) return <CustomError />

  return (
    <>
      <Head>
        <title>City Movie</title>
        <meta name="description" content="citymovie a platform for shows trand movie ans series" />
      </Head>
      <div>
        <HomeContext trendMovies={trendMovies} trendTvShow={trendTvShow} commingSoonMovie={commingsoon} genres={genres} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  /// we use this approache with setTimeout because we have limit in request to api actually we can 10 request per second 
  const datacommingsoon = await new Promise(resolve => setTimeout(() => resolve(getCommingSoonMovie()), 5000));
  const datatrendMovies = await new Promise(resolve => setTimeout(() => resolve(getPapularMovies()), 10000));
  const datatrendTvShows = await new Promise(resolve => setTimeout(() => resolve(getPapularTvShows()), 15000));
  const imagesGenres = getGenresList()

  return {
    props: {
      commingsoon: datacommingsoon,
      trendMovies: datatrendMovies,
      trendTvShow: datatrendTvShows,
      genres: imagesGenres
    },
    revalidate: 172800
  }
}


export default Home