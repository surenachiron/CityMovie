import Head from "next/head";
import { getDetailsMovie, getCasts, getPhotos, } from "@/lib/getDetailMovieAndSeries";
import { getIDPapularMovies } from "@/lib/movies/getMovies";
import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";

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
                {photos !== null ? <PhotoMovie photos={photos.images} /> : ""}
                {casts !== null ? <TopCast casts={casts} /> : ""}
            </section>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const [datamovie, photosmovie, castsmovie] = await Promise.all([
        await new Promise(resolve => resolve(getDetailsMovie(params.id))),
        await new Promise(resolve => resolve(getPhotos(params.id))),
        await new Promise(resolve => resolve(getCasts(params.id)))
    ]);
    return {
        props: {
            movie: datamovie,
            photos: photosmovie,
            casts: castsmovie,
        }
    }
}

export default SingleMovie;
