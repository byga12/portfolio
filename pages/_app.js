import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
