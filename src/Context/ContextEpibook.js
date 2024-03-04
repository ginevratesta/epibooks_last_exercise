import { createContext, useContext, useState } from "react";

export const EpiBookContext = createContext();

export const EpicBookDataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isData, setIsData] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: null,
  });
  const [commentSection, setCommentSection] = useState([]);
  const [revalidate, setRevalidate] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isId, setIsId] = useState(false);


  const updatesData = (actionState, payload) => {
    switch (actionState) {
      case "setBooks": {
        setBooks(payload);
        break;
      }
      case "setIsData": {
        setIsData(payload);
        break;
      }
      case "setInputValue": {
        setInputValue(payload);
        break;
      }
      case "setFiltered": {
        setFiltered(payload);
        break;
      }
      case "setError": {
        setError(payload);
        break;
      }
      case "setComment": {
        setComment(payload);
        break;
      }
      case "setCommentSection": {
        setCommentSection(payload);
        break;
      }
      case "setRevalidate": {
        setRevalidate(payload);
        break;
      }
      case "setIsDarkMode": {
        setIsDarkMode(payload);
        break;
      }
      case "setIsId": {
        setIsId(payload);
        break;
      }
      default:
        return;
    }
  };

  return (
    <EpiBookContext.Provider
      value={{
        updatesData,
        books,
        isData,
        inputValue,
        error,
        filtered,
        comment,
        commentSection,
        revalidate,
        isDarkMode,
        isId
      }}
    >
      {children}
    </EpiBookContext.Provider>
  );
};

export const useDataEpibook = () => useContext(EpiBookContext);
