import { useEffect, useContext, useState } from "react";
import { EpiBookContext } from "../../Context/ContextEpibook";
import fetchLibrary from "./fetchLibrary";
import ErrorMessage from "../errorHandling/ErrorMessage";
import { Row, Col } from "react-bootstrap";
import "./Library.css";
import CommentsSection from "../commentsSection/CommentsSection";
import BookCard from "./BookCard";
import Welcome from "../welcome/Welcome";

const BooksDisplay = () => {
  const {
    books,
    isData,
    inputValue,
    filtered,
    error,
    comment,
    updatesData,
    isDarkMode,
  } = useContext(EpiBookContext);
  const [isError, setIsError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const libraryData = await fetchLibrary();
        updatesData("setBooks", libraryData);
        updatesData("setIsData", true);
      } catch (e) {
        console.error("Error fetching library data:", e);
        updatesData("setIsData", false);
        updatesData("setBooks", []);
        updatesData("setError", e.message);
        setIsError(true);
      }
    };

    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClicked = (e) => {
    const selectedBook = e.currentTarget;

    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("clicked-card");
    });

    selectedBook.closest(".card").classList.add("clicked-card");

    const clickedId = selectedBook.id;
    updatesData("setComment", { ...comment, elementId: clickedId });
    setIsClicked(true);
  };

  return (
    <>
      <div
        className={isDarkMode ? "bg-dark text-white py-5 px-5" : "py-5 px-5"}
      >
    <Welcome />
        {isError ? (
          <ErrorMessage error={error} />
        ) : (
          <>
            {!isData ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              <Row>
                <Col lg="8">
                  <Row className="g-4">
                    {inputValue && inputValue.length > 0
                      ? filtered.map((book, i) => (
                          <BookCard
                            onClick={handleClicked}
                            key={i}
                            book={book}
                            id={book.asin}
                          />
                        ))
                      : books?.map((book, i) => (
                          <BookCard
                            onClick={handleClicked}
                            key={i}
                            book={book}
                            id={book.asin}
                          />
                        ))}
                  </Row>
                </Col>

                <Col lg="4">
                  {isClicked ? (
                    <CommentsSection />
                  ) : (
                    <p className="text-center">
                      Click on a card to see the comments
                    </p>
                  )}
                </Col>
              </Row>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BooksDisplay;
