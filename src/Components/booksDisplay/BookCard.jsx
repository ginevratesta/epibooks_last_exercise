import { Col, Card, Button, ListGroup } from "react-bootstrap";
import "./Library.css";
import { useContext } from "react";
import { EpiBookContext } from "../../Context/ContextEpibook";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, onClick, id }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/details/${id}`);
  };
  const { isDarkMode } = useContext(EpiBookContext);

  return (
    <Col md="6" lg="4">
      <Card className={isDarkMode ? "dark_" : ""} data-testid="book-card">
        <Card.Img variant="top" src={book.img} />
        <Card.Body
          className={
            isDarkMode
              ? "dark_ card_body d-flex flex-column justify-content-between"
              : "card_body d-flex flex-column justify-content-between"
          }
        >
          <Card.Title>{book.title}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className={isDarkMode ? "dark_" : ""}>
              {book.price} $
            </ListGroup.Item>
            <ListGroup.Item className={isDarkMode ? "dark_" : ""}>
              {book.category}
            </ListGroup.Item>
          </ListGroup>

          <div className="d-flex justify-content-between">
          <Button className="px-1" variant="danger" id={id} onClick={onClick} data-testid="clicked">
            Comments
          </Button>
          <Button variant="danger" onClick={handleButtonClick} className="link-warning link-underline link-underline-opacity-0">
              Details
            </Button>
          </div>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
