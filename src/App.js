import { useState } from 'react';
import styled from 'styled-components/macro';

import items from './items';
import Table from './Table';
import Basket from './Basket';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  const [basket, setBasket] = useState({});

  const handleAddBasket = (item) => {
    const update = { [item]: basket[item] ? basket[item] + 1 : 1 };
    setBasket({ ...basket, ...update });
  };

  return (
    <StyledApp>
      <Table items={items} handleAddBasket={handleAddBasket} />
      <Basket items={items} basket={basket} />
      <button onClick={() => setBasket({})}>Empty Basket</button>
    </StyledApp>
  );
};

export default App;
