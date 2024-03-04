import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EpiBookContext } from "../../Context/ContextEpibook";
import { useContext } from "react";
import postComment from "./postComments";
import GetComments from "./GetComments";

const CommentsSection = () => {
  const { comment, updatesData } = useContext(EpiBookContext);

  const handleCommentValue = (e) => {
    updatesData("setComment", { ...comment, comment: e.target.value });
  };

  const handleRateValue = (e) => {
    updatesData("setComment", { ...comment, rate: e.target.value });
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const res = await postComment(comment);
    if (res.ok) {
      updatesData("setComment", { ...comment, comment: "", rate: "" });
      updatesData("setRevalidate", true);
      return res;
    }
  };

  return (
    <Container>
      <Row>
        <h3 className="text-center mt-0 pb-2">Comments</h3>
        <Col>
          <GetComments />
        </Col>

        <Col>
          <Form onSubmit={sendComment}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter comment here</Form.Label>
              <Form.Control
                type="text"
                placeholder="Comment"
                value={comment.comment}
                onChange={handleCommentValue}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rate here from 1 to 5</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rate"
                value={comment.rate}
                onChange={handleRateValue}
              />
            </Form.Group>

            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentsSection;
