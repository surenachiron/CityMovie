import Head from "next/head";

import Loading from "@/component/common/Loading";
import CustomError from "@/component/common/CustomError";
import HomeContext from "@/component/pages/home/Home-Context";

import { getComingSoonMovie } from "@/lib/comingSoon/getComingSoon";
import { getTrendsMovies } from "@/lib/movies/getMovies";
import { getTrendsTvShows } from "@/lib/TvShows/getTvShows";
import { getGenresList } from "@/lib/category/getShowLists";

const Home = ({ comingSoon, trendMovies, trendTvShow, genres }) => {
  if (
    (!comingSoon && comingSoon !== null) ||
    (!trendMovies && trendMovies !== null) ||
    (!trendTvShow && trendTvShow !== null)
  ) {
    return <Loading />;
  }
  if (trendMovies === null && trendMovies === null && comingSoon === null)
    return <CustomError />;

  return (
    <>
      <Head>
        <title>City Movie</title>
        <meta
          name="description"
          content="cityMovie a platform for shows trend movie ans series"
        />
      </Head>
      <div>
        <HomeContext
          trendMovies={trendMovies}
          trendTvShow={trendTvShow}
          comingSoonMovie={comingSoon}
          genres={genres}
        />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const dataComingSoon = await getComingSoonMovie();
  const dataTrendMovies = await getTrendsMovies();
  const dataTrendTvShows = await getTrendsTvShows();
  const imagesGenres = getGenresList();

  return {
    props: {
      comingSoon: dataComingSoon,
      trendMovies: dataTrendMovies,
      trendTvShow: dataTrendTvShows,
      genres: imagesGenres,
    },
  };
}

export default Home;
