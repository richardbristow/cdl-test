const Table = ({ items, handleAddBasket }) => (
  <table>
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
          <td>{`${items[item].price}`}</td>
          <td>
            {items[item].offer &&
              `${items[item].offer.number} for ${items[item].offer.price}`}
          </td>
          <td>
            <button onClick={() => handleAddBasket(item)}>Add to basket</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
