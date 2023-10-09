import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";
import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import { getCasts, getPhotos, getDetailsMovie, } from "@/lib/getDetailMovieAndSeries";
import Head from "next/head";

const SingleTvShow = ({ tvshow, casts, photos }) => {

    if (!tvshow && tvshow !== null) {
        return <Loading />
    }

    if (tvshow === null) return <CustomError />

    return (
        <>
            <Head>
                <title>{tvshow.title.title}</title>
                <meta name="description" content="show all details for movie choised" />
            </Head>
            <section>
                <MainDetail movie={tvshow} />
                {photos !== null ? <PhotoMovie photos={photos.images} /> : ""}
                {casts !== null ? <TopCast casts={casts} /> : ""}
            </section>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const [datatvshow, photostvshow, caststvshow] = await Promise.all([
        await new Promise(resolve => resolve(getDetailsMovie(params.id))),
        await new Promise(resolve => resolve(getPhotos(params.id))),
        await new Promise(resolve => resolve(getCasts(params.id)))
    ]);
    return {
        props: {
            tvshow: datatvshow,
            photos: photostvshow,
            casts: caststvshow,
        }
    }
}

export default SingleTvShow;