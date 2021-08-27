// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// import "../styles/styles.css";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
