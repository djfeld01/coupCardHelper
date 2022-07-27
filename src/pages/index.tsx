import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import CoinCounter from '@/components/CoinCounter';

export default function HomePage() {
  const [showAction, setShowAction] = useState(true);
  const [coins, setCoins] = useState([2, 2, 2, 2, 2, 2, 2]);

  const resetCoins = () => {
    setCoins([2, 2, 2, 2, 2, 2, 2]);
  };

  const updateCoin = (index, updatedValue) => {
    const currentCoins = [...coins];
    currentCoins[index] = updatedValue;
    setCoins(currentCoins);
  };

  return (
    <>
      <Button onClick={() => setShowAction(!showAction)}>
        {showAction ? 'Hide Actions' : 'Show Actions'}
      </Button>
      <Button onClick={resetCoins}>Reset Coins</Button>
      {coins.map((value, index) => {
        return (
          <CoinCounter
            showAction={showAction}
            updateCoin={updateCoin}
            index={index}
            value={value}
            key={index}
          />
        );
      })}
    </>
  );
}
