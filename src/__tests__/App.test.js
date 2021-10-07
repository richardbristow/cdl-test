import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const productTable = screen.getByRole('table', { name: /products/i });
    const basketTable = screen.getByRole('table', { name: /basket/i });
    expect(productTable).toBeInTheDocument();
    expect(basketTable).toBeInTheDocument();
  });
});
