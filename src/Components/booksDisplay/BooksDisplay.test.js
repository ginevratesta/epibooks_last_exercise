import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { EpicBookDataProvider } from "../../Context/ContextEpibook"
import BooksDisplay from './BooksDisplay';
import fetchLibrary from './fetchLibrary';

jest.mock('./fetchLibrary');

const mockBooks = [
  { asin: '123', title: 'Book 1', desc: 'Description 1', price: '$10', src: 'path/to/img1.jpg' },
  { asin: '456', title: 'Book 2', desc: 'Description 2', price: '$15', src: 'path/to/img2.jpg' },
];

describe('BooksDisplay Component', () => {
  beforeEach(() => {
    fetchLibrary.mockResolvedValue(mockBooks);
  });

  test('renders the correct number of cards based on fetched data', async () => {
    render(
      <MemoryRouter>
        <EpicBookDataProvider>
          <BooksDisplay />
        </EpicBookDataProvider>
      </MemoryRouter>
    );

    await screen.findAllByTestId('book-card');

    const cards = screen.getAllByTestId('book-card');
    expect(cards.length).toBe(mockBooks.length);
  });
});
