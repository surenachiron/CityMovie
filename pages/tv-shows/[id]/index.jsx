import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TopCast from "@/component/pages/movies/movie-detail/cast/Top-Cast";
import PhotoMovie from "@/component/pages/movies/movie-detail/images/Photo-Movie";
import MainDetail from "@/component/pages/movies/movie-detail/main-detail/Main-Detail";
import { getDetails, getCasts, getPhotos, } from "@/lib/getDetailMovieAndSeries";
import { getIDPapularTvShows } from "@/lib/TvShows/getTvShows";
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

export async function getStaticPaths() {

    const AllKeyTvShow = await getIDPapularTvShows()

    if (AllKeyTvShow === null) {
        return;
    } else {
        const pathsTvShow = AllKeyTvShow.slice(0, 3).map((id) => ({
            params: { id },
        }))
        return { paths: pathsTvShow, fallback: true }
    }

}

export async function getStaticProps({ params }) {

    const datatvshow = await getDetails(params.id)
    const photostvshow = await getPhotos(params.id)
    const caststvshow = await getCasts(params.id)

    return {
        props: {
            tvshow: datatvshow,
            photos: photostvshow,
            casts: caststvshow,
        },
        revalidate: 172800
    }
}

export default SingleTvShow;