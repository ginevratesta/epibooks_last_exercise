import Navbar from "../nav/NavBar";
import Footer from "../footer/Footer";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Mainlayout;
