import Head from "next/head";

import { getTrendsTvShows, getTopRatedTvShows } from "@/lib/TvShows/getTvShows";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TrendingTvShows from "@/component/pages/tv-shows/Trending-TvShows";
import TopRatedTvShows from "@/component/pages/tv-shows/TopRated-TvShows";

const TvShowList = ({ trendTvShows, topRatedTvShows }) => {
  if (
    (!trendTvShows && trendTvShows !== null) ||
    (!topRatedTvShows && topRatedTvShows !== null)
  ) {
    return <Loading />;
  }

  if (trendTvShows === null && topRatedTvShows === null) return <CustomError />;

  return (
    <div>
      <Head>
        <title>TV-Shows</title>
        <meta name="description" content="display TVShows of top until last" />
      </Head>
      {trendTvShows !== null && <TrendingTvShows tvShows={trendTvShows} />}
      {topRatedTvShows !== null && (
        <TopRatedTvShows tvShows={topRatedTvShows} />
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const dataTrendTvShows = await getTrendsTvShows();
  const dataTopRatedTvShows = await getTopRatedTvShows();

  return {
    props: {
      trendTvShows: dataTrendTvShows,
      topRatedTvShows: dataTopRatedTvShows,
    },
  };
}

export default TvShowList;
