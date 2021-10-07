import StyledTable from './StyledTable';

const Table = ({ items, handleAddBasket }) => (
  <StyledTable>
    <caption>Products</caption>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Special Offer</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {Object.keys(items).map((item) => (
        <tr key={item}>
          <td>{item}</td>
          <td>{`£${(items[item].price / 100).toFixed(2)}`}</td>
          <td>
            {items[item].offer &&
              `${items[item].offer.number} for £${(
                items[item].offer.price / 100
              ).toFixed(2)}`}
          </td>
          <td>
            <button onClick={() => handleAddBasket(item)}>Add to basket</button>
          </td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
