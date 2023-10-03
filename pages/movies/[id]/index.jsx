import Head from "next/head";

import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";

import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import { getDetails, getCasts, getPhotos, } from "@/lib/getDetailMovieAndSeries";
import { getIDPapularMovies } from "@/lib/movies/getMovies";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";

const SingleMovie = ({ movie, casts, photos }) => {

    if (!movie && movie !== null) {
        return <Loading />
    }

    if (movie === null) return <CustomError />

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

export async function getStaticPaths() {

    const AllKeyMovies = await getIDPapularMovies()

    if (AllKeyMovies === null) {
        return;
    } else {
        const pathsMovie = AllKeyMovies.slice(0, 3).map((id) => ({
            params: { id },
        }))
        return { paths: pathsMovie, fallback: true }
    }

}

export async function getStaticProps({ params }) {

    const datamovie = await getDetails(params.id)
    const photosmovie = await getPhotos(params.id)
    const castsmovie = await getCasts(params.id)

    return {
        props: {
            movie: datamovie,
            photos: photosmovie,
            casts: castsmovie,
        },
        revalidate: 172800
    }
}

export default SingleMovie;
