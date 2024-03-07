import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import { EpicBookDataProvider } from '../../Context/ContextEpibook';
import '@testing-library/jest-dom/extend-expect';

test('search bar functionality', () => {
  const books = ["hello", "hi"];

  const { getByPlaceholderText } = render(
    <BrowserRouter>
      <EpicBookDataProvider books={books}>
        <NavBar />
      </EpicBookDataProvider>
    </BrowserRouter>
  );

  const input = getByPlaceholderText('Search by book title...');
  fireEvent.change(input, { target: { value: 'test query' } });

  expect(input.value).toBe('test query');
});
