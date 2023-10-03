import Head from "next/head";
import { getPapularTvShows } from "@/lib/TvShows/getTvShows";
import { Box } from "@mui/material";
import CustomError from "@/component/common/CustomError";
import Loading from "@/component/common/Loading";
import TrendingTvShows from "@/component/pages/tv-shows/Trending-TvShows";

const TvShowList = ({ trendTvShows }) => {

    if (!trendTvShows && trendTvShows !== null) {
        return <Loading />
    }

    return (
        <div>
            <Head>
                <title>TV-Shows</title>
                <meta name="description" content="dislpay TVShows of top until last" />
            </Head>
            {trendTvShows === null ? '' :
                <Box>
                    <TrendingTvShows tvShows={trendTvShows} />
                </Box>
            }
        </div>
    );
}

export async function getStaticProps() {

    const datatrendTvShows = await getPapularTvShows()

    return {
        props: {
            trendTvShows: datatrendTvShows
        },
        revalidate: 172800
    }
}

export default TvShowList;