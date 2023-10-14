import Head from "next/head";
import dynamic from "next/dynamic";

import { getDetailsMovie, getCasts, getPhotos, } from "@/lib/getDetailMovieAndSeries";
const MainDetail = dynamic(() => import("@/component/pages/movies/movie-detail/main-detail/Main-Detail"));
const TopCast = dynamic(() => import("@/component/pages/movies/movie-detail/cast/Top-Cast"));
const CustomError = dynamic(() => import("@/component/common/CustomError"));
const Loading = dynamic(() => import("@/component/common/Loading"));
const PhotoMovie = dynamic(() => import("@/component/pages/movies/movie-detail/images/Photo-Movie"));

const SingleMovie = ({ movie, casts, photos }) => {

    if (!movie && movie !== null) {
        return <Loading />
    }

    if (movie === null || movie.length === 0) return <CustomError />

    return (
        <>
            <Head>
                <title>{movie.title.title}</title>
                <meta name="description" content="show all details for movie choised" />
            </Head>
            <section>
                <MainDetail movie={movie} />
                {photos !== null && <PhotoMovie photos={photos.images} />}
                {casts !== null && <TopCast casts={casts} />}
            </section>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const [dataMovie, photosMovie, castsMovie] = await Promise.all([
        await new Promise(resolve => setTimeout(() => resolve(getDetailsMovie(params.id)), 1000)),
        await new Promise(resolve => setTimeout(() => resolve(getPhotos(params.id)), 2000)),
        await new Promise(resolve => setTimeout(() => resolve(getCasts(params.id)), 3000))
    ]);
    return {
        props: {
            movie: dataMovie,
            photos: photosMovie,
            casts: castsMovie,
        }
    }
}

export default SingleMovie;
