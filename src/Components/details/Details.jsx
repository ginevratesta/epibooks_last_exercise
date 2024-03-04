import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import CommentsSection from "../commentsSection/CommentsSection";
import { EpiBookContext } from "../../Context/ContextEpibook";
import "./Details.css";

const BookDetails = () => {
  const { id } = useParams();
  const { comment, updatesData, isId, isDarkMode} = useContext(EpiBookContext);
  const [singleBook, setSingleBook] = useState(null);

  useEffect(() => {
    if (id) {
      updatesData("setIsId", true);
    }
  }, [id]);
  
  useEffect(() => {
    updatesData("setComment", { ...comment, elementId: id });
  }, []);

  const getSingleBook = async () => {
    try {
      const res = await fetch(`https://epibooks.onrender.com/${id}`);
      const data = await res.json();

      if (!res.ok) {
        console.log(res.status);
        throw new Error("Failed to fetch data");
      }

      if (data && data.length > 0) {
        setSingleBook(data[0]);
      } else {
        throw new Error("No data found");
      }
    } catch (e) {
      console.error(e);
      throw new Error("There has been a problem: " + e);
    }
  };

  useEffect(() => {
    getSingleBook();
  }, [id, comment.elementId]);

  return (
    <div className={isDarkMode ? "bg-dark py-5 px-5" : "py-5 px-5"}>
      <Row>
        <Col>
          {singleBook && (
            <Card className={isDarkMode ? "dark_" : ""}>
              <Card.Img variant="top" src={singleBook.img} />
              <Card.Body>
                <Card.Title>{singleBook.title}</Card.Title>
                <Card.Text>{singleBook.price}</Card.Text>
                <Card.Text>{singleBook.category}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col>
          <CommentsSection />
        </Col>
      </Row>
    </div>
  );
};

export default BookDetails;
