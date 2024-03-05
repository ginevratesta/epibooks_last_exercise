import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CommentsSection from './CommentsSection';
import { EpicBookDataProvider } from '../../Context/ContextEpibook';

test('comments section is rendered correctly', () => {
  const comments = ['Comment 1', 'Comment 2'];

  const { getByText } = render(
    <EpicBookDataProvider comments={comments}>
      <CommentsSection />
    </EpicBookDataProvider>
  );

  expect(getByText('Comments')).toBeInTheDocument();
});
