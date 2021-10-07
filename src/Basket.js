const Basket = ({ items, basket }) => {
  const itemPricer = (item, quantity) => {
    if (items[item].offer) {
      const { price, number } = items[item].offer;
      const offerItemsPriced = Math.floor(quantity / number) * price;
      const nonOfferItemsPriced = (quantity % number) * items[item].price;
      return offerItemsPriced + nonOfferItemsPriced;
    }
    return items[item].price * quantity;
  };

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
              <td>{itemPricer(item, basket[item])}</td>
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
