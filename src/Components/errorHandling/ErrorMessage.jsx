import Toast from "react-bootstrap/Toast";
import "./ErrorMessage.css";
import { useContext } from "react";
import { EpiBookContext } from "../../Context/ContextEpibook";

const ErrorMessage = ({ error }) => {
  const { isDarkMode } = useContext(EpiBookContext);

  return (
    <Toast
      className={isDarkMode ? "dark_ w-50 error-modal" : "w-50 error-modal"}
    >
      <Toast.Header>
        <strong className="me-auto">Error</strong>
        <small>There's been an error</small>
      </Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>
  );
};

export default ErrorMessage;
