import Head from "next/head";

import {
  getDetailsMovie,
  getPhotos,
} from "@/lib/getDetailMovieAndSeries";
import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";

const SingleMovie = ({ movie, photos }) => {
  if (!movie && movie !== null) {
    return <Loading />;
  }

  if (movie === null || movie.length === 0) return <CustomError />;

  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content="show all details for movie choised" />
      </Head>
      <section>
        <MainDetail movie={movie} />
        {photos !== null && <PhotoMovie photos={photos.backdrops} />}
        {/* {casts !== null && <TopCast casts={casts} />} */}
      </section>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const dataMovie = await getDetailsMovie(params.id);
  const photosMovie = await getPhotos(params.id);

  return {
    props: {
      movie: dataMovie,
      photos: photosMovie,
    },
  };
}

export default SingleMovie;
