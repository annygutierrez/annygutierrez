import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

vi.mock('react-ga', () => ({ default: { initialize: vi.fn(), pageview: vi.fn(), event: vi.fn() } }));

test('renders without crashing', () => {
  render(<App />);
});
