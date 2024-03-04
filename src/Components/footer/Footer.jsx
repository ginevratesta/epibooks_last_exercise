import { useContext } from "react";
import { EpiBookContext } from "../../Context/ContextEpibook";

const Footer = () => {
  const { isDarkMode } = useContext(EpiBookContext);
  return (
    <footer
      className={
        isDarkMode
          ? "bg-dark text-white text-center py-5"
          : "bg-warning text-center py-5"
      }
    >
      <p>Thanks for passing by!</p>
      <p>
        Contact us through our phone number: 333 333 3333 or email: romance@com
      </p>
    </footer>
  );
};

export default Footer;
