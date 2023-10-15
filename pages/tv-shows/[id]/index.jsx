import Head from "next/head";
import dynamic from "next/dynamic";

import { getCasts, getPhotos, getDetailsMovie, } from "@/lib/getDetailMovieAndSeries";
const MainDetail = dynamic(() => import("@/component/pages/movies/movie-detail/main-detail/Main-Detail"));
const PhotoMovie = dynamic(() => import("@/component/pages/movies/movie-detail/images/Photo-Movie"));
const TopCast = dynamic(() => import("@/component/pages/movies/movie-detail/cast/Top-Cast"));
const Loading = dynamic(() => import("@/component/common/Loading"));
const CustomError = dynamic(() => import("@/component/common/CustomError"));

const SingleTvShow = ({ tvShow, casts, photos }) => {

    if (!tvShow && tvShow !== null) {
        return <Loading />
    }

    if (tvShow === null) return <CustomError />

    return (
        <>
            <Head>
                <title>{tvShow.title.title}</title>
                <meta name="description" content="show all details for movie choised" />
            </Head>
            <section>
                <MainDetail movie={tvShow} />
                {photos !== null && <PhotoMovie photos={photos.images} />}
                {casts !== null && <TopCast casts={casts} />}
            </section>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const [dataTvShow, photosTvShow, castsTvShow] = await Promise.all([
        await new Promise(resolve => setTimeout(() => resolve(getDetailsMovie(params.id)), 1000)),
        await new Promise(resolve => setTimeout(() => resolve(getPhotos(params.id)), 2000)),
        await new Promise(resolve => setTimeout(() => resolve(getCasts(params.id)), 3000))
    ]);
    return {
        props: {
            tvShow: dataTvShow,
            photos: photosTvShow,
            casts: castsTvShow,
        }
    }
}

export default SingleTvShow;