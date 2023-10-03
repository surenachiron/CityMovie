import Head from 'next/head'
import CustomError from '@/component/common/CustomError'
import Loading from '@/component/common/Loading'
import HomeContext from '@/component/pages/home/Home-Context'
import { getPapularTvShows } from '@/lib/TvShows/getTvShows'
import { getCommingSoonMovie } from '@/lib/comming-soon/getComingSoon'
import { getPapularMovies } from '@/lib/movies/getMovies'

const Home = ({ trendMovies, trendTvShow, commingsoon }) => {

  if ((!commingsoon && commingsoon !== null) || (!trendMovies && trendMovies !== null) || (!trendTvShow && trendTvShow !== null)) {
    return <Loading />
  }

  if (trendMovies === null && trendMovies === null && commingsoon === null) return <CustomError />

  console.log(commingsoon)

  return (
    <>
      <Head>
        <title>City Movie</title>
        <meta name="description" content="citymovie a platform for shows trand movie ans series" />
      </Head>
      <div>
        {/* {trendMovies === null && trendMovies === null && commingsoon === null ? <CustomError /> : ""} */}
        <HomeContext trendMovies={trendMovies} trendTvShow={trendTvShow} commingSoonMovie={commingsoon} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  const datacommingsoon = await getCommingSoonMovie()
  const datatrendMovies = await getPapularMovies()
  const datatrendTvShows = await getPapularTvShows()

  return {
    props: {
      commingsoon: datacommingsoon,
      trendMovies: datatrendMovies,
      trendTvShow: datatrendTvShows,
    },
    revalidate: 172800
  }
}


export default Home