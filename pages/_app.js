// _app.js

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;