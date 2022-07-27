import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

function CoinCounter({ showAction, updateCoin, index, value }) {
  //const [coins, setCoins]=useState(2);
  const [name, setName] = useState('Name');

  return (
    <div className='m-3 flex-row content-center border-4 border-sky-500 hover:border-dotted'>
      <input
        className='content-center text-5xl'
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
      />
      <div className='content-center text-5xl'>{value}</div>
      <Button onClick={() => updateCoin(index, value + 1)}>
        {showAction ? 'Income (1)' : '+1'}
      </Button>

      <Button onClick={() => updateCoin(index, value + 2)}>
        {showAction ? 'Foreign Aid/Steal (2)' : '+2'}
      </Button>

      <Button onClick={() => updateCoin(index, value + 3)}>
        {showAction ? 'Duke-Tax (3)' : '+3'}
      </Button>

      <Button onClick={() => updateCoin(index, value - 2)}>
        {showAction ? 'Stolen From (-2)' : '-2'}
      </Button>

      <Button onClick={() => updateCoin(index, value - 3)}>
        {showAction ? 'Assasinate (-3)' : '-3'}
      </Button>

      <Button onClick={() => updateCoin(index, value - 7)}>
        {showAction ? 'Coup (-7)' : '-7'}
      </Button>
    </div>
  );
}

export default CoinCounter;
