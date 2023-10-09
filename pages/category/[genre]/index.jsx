import Head from 'next/head'
import { useRouter } from 'next/router';
import { getCategoryMovies } from "@/lib/category/getCategoryMovie";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TrendingGenres from "@/component/pages/category/Trending-Genres"

const SingleCategory = ({ categorymovie }) => {

    console.log(categorymovie)

    if (!categorymovie && categorymovie !== null) {
        return <Loading />
    }

    if (categorymovie === null || categorymovie.length === 0) return <CustomError />

    const router = useRouter()
    const genrenow = router.query.genre.slice(0, 1).toUpperCase() + router.query.genre.slice(1,)

    return (
        <>
            <Head>
                <title>{genrenow}</title>
                <meta name="description" content={`show trend movie from ${genrenow}`} />
            </Head>
            <div>
                <TrendingGenres movies={categorymovie} />
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const datacategorymovie = await new Promise(resolve => resolve(getCategoryMovies(params.genre)))

    return {
        props: {
            categorymovie: datacategorymovie,
        }
    }
}

export default SingleCategory;