import Head from 'next/head'
import { useRouter } from 'next/router';

import { getCategoryMovies } from "@/lib/category/getCategoryMovie";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TrendingGenres from "@/component/pages/category/Trending-Genres"

const SingleCategory = ({ categoryMovie }) => {

    if (!categoryMovie && categoryMovie !== null) {
        return <Loading />
    }

    if (categoryMovie === null || categoryMovie.length === 0) return <CustomError />

    const router = useRouter()
    const genreSelected = router.query.genre.slice(0, 1).toUpperCase() + router.query.genre.slice(1,)

    return (
        <>
            <Head>
                <title>{genreSelected}</title>
                <meta name="description" content={`show trend movie from ${genreSelected}`} />
            </Head>
            <div>
                <TrendingGenres movies={categoryMovie} />
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {

    const dataCategoryMovie = await new Promise(resolve => resolve(getCategoryMovies(params.genre)))

    return {
        props: {
            categoryMovie: dataCategoryMovie,
        }
    }
}

export default SingleCategory;