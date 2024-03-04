import React from "react";
import Mainlayout from "../layouts/Mainlayout";
import BooksDisplay from "../booksDisplay/BooksDisplay";

const Homepage = () => {
  return (
    <Mainlayout>
      <BooksDisplay />
    </Mainlayout>
  );
};

export default Homepage;
