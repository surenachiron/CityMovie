import Head from "next/head";
import NotFound from "@/component/common/NotFound";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 Not-Found</title>
        <meta
          name="description"
          content="404 page for each page that not found"
        />
      </Head>
      <NotFound />
    </>
  );
};

export default Custom404;
