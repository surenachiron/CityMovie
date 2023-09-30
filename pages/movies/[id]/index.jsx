import Head from "next/head";

import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";

import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/_loading";
import { getCastsMovie, getDetailsMovie, getPhotosMovie, getTrailer } from "@/lib/movies/getDetailMovie";
import { getIDPapularMovies } from "@/lib/movies/getMovies";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";

const DetailsUser = ({ movie, casts, photos }) => {

    if (!movie) {
        return <Loading />
    }

    return (
        <>
            {movie === "error" ? <CustomError /> :
                <>
                    <Head>
                        <title>{movie.title.title}</title>
                        <meta name="description" content="show all details for movie choised" />
                    </Head>
                    <section>
                        <MainDetail movie={movie} />
                        {photos !== undefined ? <PhotoMovie photos={photos} /> : ""}
                        {casts !== undefined ? <TopCast casts={casts} /> : ""}
                    </section>
                </>
            }
        </>
    );
}

export async function getStaticPaths() {

    const AllKeyMovies = await getIDPapularMovies()

    if (AllKeyMovies === undefined) {
        return;
    } else {
        const pathsMovie = AllKeyMovies.slice(0, 3).map((id) => ({
            params: { id },
        }))
        return { paths: pathsMovie, fallback: true }
    }

}

export async function getStaticProps({ params }) {

    const datamovie = await getDetailsMovie(params.id)
    // const castsmovie = await getCastsMovie(params.id)
    // const photosmovie = await getPhotosMovie(params.id)

    if (datamovie === undefined) {
        return {
            props: {
                movie: "error"
            },
        }
    } else {
        // if (photosmovie !== undefined && castsmovie !== undefined) {
        //     return {
        //         props: {
        //             movie: datamovie,
        //             photos: photosmovie.images,
        //             casts: castsmovie,
        //         },
        //         revalidate: 172800
        //     }
        // }
        // else if (photosmovie !== undefined && castsmovie === undefined) {
        //     return {
        //         props: {
        //             movie: datamovie,
        //             photos: photosmovie.images,
        //         },
        //         revalidate: 172800
        //     }
        // } else if (castsmovie !== undefined && photosmovie === undefined) {
        //     return {
        //         props: {
        //             movie: datamovie,
        //             casts: castsmovie,
        //         },
        //         revalidate: 172800
        //     }
        // } else {
        //     return {
        //         props: {
        //             movie: datamovie
        //         },
        //         revalidate: 172800
        //     }
        // }
        return {
            props: {
                movie: datamovie
            },
            revalidate: 172800
        }
    }
}

export default DetailsUser;
