import Form from "react-bootstrap/Form";
import { EpiBookContext } from "../../Context/ContextEpibook";
import { useContext } from "react";

const ThemeSwitcher = () => {
  const { isDarkMode, updatesData } = useContext(EpiBookContext);

  const handleClick = () => {
    updatesData("setIsDarkMode", true);

    if (isDarkMode) {
      updatesData("setIsDarkMode", false);
    }
  };

  return (
    <Form>
      <Form.Check
        className={isDarkMode ? "bg-dark text-white" : ""}
        onClick={handleClick}
        type="switch"
        id="custom-switch"
        label={isDarkMode ? "Dark" : "Light"}
      />
    </Form>
  );
};

export default ThemeSwitcher;
