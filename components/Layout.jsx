import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
