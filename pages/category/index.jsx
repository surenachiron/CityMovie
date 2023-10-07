import Head from "next/head";
import { getGenresList } from "@/lib/category/getShowLists";
import PreviewGenres from "@/component/pages/category/PreviewGenres";

const PageCategory = ({ genres }) => {

    return (
        <>
            <Head>
                <title>Category</title>
            </Head>
            <PreviewGenres genres={genres} key={genres} />
        </>
    );
}

export async function getServerSideProps() {
    const imagesGenres = getGenresList()

    return {
        props: {
            genres: imagesGenres
        }
    }
}

export default PageCategory;