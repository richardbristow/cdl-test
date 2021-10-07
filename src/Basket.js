const Basket = ({ basket }) => {
  return (
    <table>
      <caption>Basket</caption>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(basket).length !== 0 ? (
          Object.keys(basket).map((item) => (
            <tr key={`basket-${item}`}>
              <td>{item}</td>
              <td>{basket[item]}</td>
              <td></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Nothing in basket</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Basket;
