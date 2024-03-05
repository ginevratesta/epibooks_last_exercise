import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Welcome from './Welcome';

test('Welcome component renders correctly', () => {
  const { getByTestId } = render(<Welcome />);
  const welcomeComponent = getByTestId('welcome-component');
  expect(welcomeComponent).toBeInTheDocument();
});