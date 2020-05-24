import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

import Web3Data from './Web3Data';

const App = () => {
  const infuraProjectId = 'INFURA_PROJECT_ID...';
  const web3Context = useWeb3(`wss//mainnet.infura.io/ws/v3/${infuraProjectId}`);

  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper">
          <h2>Infura React Dapp Frontend!</h2>
        </div>
      </nav>
      <Web3Data web3Context={ web3Context } />
    </div>
  );
};

export default App;
