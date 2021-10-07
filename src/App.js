import { useState } from 'react';

import items from './items';
import Table from './Table';

const App = () => {
  const [basket, setBasket] = useState({});

  const handleAddBasket = (item) => {
    const update = { [item]: basket[item] ? basket[item] + 1 : 1 };
    setBasket({ ...basket, ...update });
  };

  return (
    <div>
      <Table items={items} handleAddBasket={handleAddBasket} />
    </div>
  );
};

export default App;
