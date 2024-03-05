import { useContext, useEffect, useState } from "react";
import { EpiBookContext } from "../../Context/ContextEpibook";
import "./comments.css";

const GetComments = () => {
  const { comment, commentSection, revalidate, updatesData } =
    useContext(EpiBookContext);
  const [prevElementId, setPrevElementId] = useState(null);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${comment.elementId}/comments/`
      );
      if (res.ok) {
        const data = await res.json();
        updatesData("setCommentSection", data);
      } else {
        throw new Error("Failed to fetch comments");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  useEffect(() => {
    if (
      comment.elementId &&
      (revalidate || comment.elementId !== prevElementId)
    ) {
      fetchComments();
      updatesData("setRevalidate", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment.elementId, revalidate, prevElementId, updatesData]);


  useEffect(() => {
    setPrevElementId(comment.elementId);
  }, [comment.elementId]);


  return (
    <div className="comments_" data-testid="comments-area">
      {commentSection.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        commentSection
          .slice()
          .reverse()
          .map((comment, i) => (
            <div className="comment-sec" key={i}>

              <p><span className="comment-det">User:</span> {comment.author}</p>
              <p><span className="comment-det">Comment:</span> {comment.comment}</p>
              <span>
                <p><span className="comment-det">Rating:</span> {comment.rate}</p>
              </span>
            </div>
          ))
      )}
    </div>
  );
};

export default GetComments;
