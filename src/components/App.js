import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

import Web3Data from './Web3Data';

const App = () => {
  const infuraProjectId = 'a16e4588a1b44d059162f94155937b34';
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
