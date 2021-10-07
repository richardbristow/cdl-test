import { render, screen } from '@testing-library/react';
import Table from '../Table';

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

describe('Table', () => {
  test('should render the item table, with the correct number of rows', () => {
    render(<Table items={items} />);
    const table = screen.getByRole('table');
    const rows = screen.queryAllByRole('row');
    expect(table).toBeInTheDocument();
    expect(rows).toHaveLength(5);
  });
});
