import Head from "next/head";
import "../globals.css";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
// import ogImage from "/images/og_image.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://portfolio-byga12.vercel.app/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://portfolio-byga12.vercel.app/og_image.png"
          key="ogimage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Portfolio | Gabriel Shimabuku"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Portfolio website for Gabriel Shimabuku"
          key="ogdesc"
        />
        <title>Portfolio | Gabriel Shimabuku</title>
        <meta
          name="description"
          content="Portfolio website for Gabriel Shimabuku"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
