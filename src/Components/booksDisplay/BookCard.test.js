import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from './BookCard';
import { EpiBookContext } from "../../Context/ContextEpibook";
import '@testing-library/jest-dom';

test('clicking on Comments button adds clicked-card class to the card', () => {
  const contextValue = {
    isDarkMode: false,
  };

  const { getByTestId } = render(
    <Router>
      <EpiBookContext.Provider value={contextValue}>
        <BookCard book={{ img: 'example.jpg', title: 'Example', price: 10, category: 'Example' }} />
      </EpiBookContext.Provider>
    </Router>
  );

  const commentsButton = getByTestId('clicked');
  expect(commentsButton).toBeInTheDocument();

});
