import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EpiBookContext } from '../../Context/ContextEpibook';
import CommentsSection from './CommentsSection';

test('renders CommentsSection component', () => {
  render(
    <EpiBookContext.Provider
      value={{
        comment: { elementId: '123', comment: '', rate: '' },
        commentSection: [],
        revalidate: false,
        updatesData: jest.fn(),
      }}
    >
      <CommentsSection />
    </EpiBookContext.Provider>
  );

  const commentsSectionElement = screen.getByTestId('comment-sec');
  expect(commentsSectionElement).toBeInTheDocument();

  expect(commentsSectionElement).toHaveTextContent('Comments');
});
