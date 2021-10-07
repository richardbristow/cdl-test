import { render, screen } from '@testing-library/react';
import Basket from '../Basket';

const items = {
  A: {
    price: 50,
    offer: {
      number: 3,
      price: 130,
    },
  },
  B: {
    price: 30,
    offer: {
      number: 2,
      price: 45,
    },
  },
  C: {
    price: 20,
  },
  D: {
    price: 15,
  },
};

describe('Basket', () => {
  test('should render "Nothing in basket" on empty basket, and total price "£0.00"', () => {
    render(<Basket items={items} basket={{}} />);
    const emptyBasket = screen.getByText('Nothing in basket');
    expect(emptyBasket).toBeInTheDocument();
    expect(
      screen.getByRole('cell', { name: 'Total:' }).nextElementSibling,
    ).toHaveTextContent('£0.00');
  });

  test('should render total price of £1.15', () => {
    render(<Basket items={items} basket={{ A: 1, B: 1, C: 1, D: 1 }} />);
    expect(
      screen.getByRole('cell', { name: 'Total:' }).nextElementSibling,
    ).toHaveTextContent('£1.15');
  });

  test('should render total price of £2.10', () => {
    render(<Basket items={items} basket={{ A: 3, B: 2, C: 1, D: 1 }} />);
    expect(
      screen.getByRole('cell', { name: 'Total:' }).nextElementSibling,
    ).toHaveTextContent('£2.10');
  });

  test('should render total price of £2.90', () => {
    render(<Basket items={items} basket={{ A: 4, B: 3, C: 1, D: 1 }} />);
    expect(
      screen.getByRole('cell', { name: 'Total:' }).nextElementSibling,
    ).toHaveTextContent('£2.90');
  });
});
