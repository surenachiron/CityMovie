import Head from "next/head";

import {
  getPhotos,
  getDetailsMovie,
  getCasts,
} from "@/lib/getDetailMovieAndSeries";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";
import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import Loading from "@/component/common/Loading";
import CustomError from "@/component/common/CustomError";

const SingleTvShow = ({ tvShow, photos, casts }) => {
  if (!tvShow && tvShow !== null) {
    return <Loading />;
  }

  if (tvShow === null) return <CustomError />;

  return (
    <>
      <Head>
        <title>{tvShow.name}</title>
        <meta name="description" content="show all details for movie choised" />
      </Head>
      <section>
        <MainDetail movie={tvShow} type="tv" />
        {photos !== null && <PhotoMovie photos={photos.backdrops} type="tv" />}
        {casts !== null && <TopCast casts={casts} type={"tv"} />}
      </section>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const dataTvShow = await getDetailsMovie(params.id, "tv");
  const photosMovie = await getPhotos(params.id, "tv");
  const castsMovie = await getCasts(params.id, "tv");

  return {
    props: {
      tvShow: dataTvShow,
      photos: photosMovie,
      casts: castsMovie,
    },
  };
}

export default SingleTvShow;
