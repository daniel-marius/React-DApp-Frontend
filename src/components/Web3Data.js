import React, { useState, useEffect, useCallback } from 'react';

const Web3Data = (props) => {
  const { web3Context } = props;
  const { networkId, networkName, accounts, providerName, lib } = web3Context;

  const [balance, setBalance] = useState(0);
  const getBalance = useCallback(async () => {
    let balance = accounts && accounts.length > 0 ? lib.utils.fromWei(await lib.eth.getBalance(accounts[0]), 'ether') : 'Unknown';
    setBalance(balance);
  }, [accounts, lib.eth, lib.utils]);

  useEffect(() => {
    getBalance();
  }, [accounts, getBalance, networkId]);

  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
    } catch (error) {
      console.log(error);
    }
  };

  const requestAccess = useCallback(() => requestAuth(web3Context), []);

  return (
    <div className="row">
      <div className="col s12">
        <h3>Infura/Metamask/OpenZeppelin DApp</h3>
      </div>
      <div className="col s6">Network: { networkId ? `${networkId} - ${networkName}` : 'No connection!' }</div>
      <div className="col s6">Your Address: { accounts && accounts.length ? accounts[0] : 'Unknown' }</div>
      <div className="col s6">Your ETH balance: { balance }</div>
      <div className="col s6">Provider: { providerName }</div>
      { accounts && accounts.length ? (
        <div className="col s6">Accounts & Signing Status: Access Granted</div>
      ) : !!networkId && providerName !== 'infura' ? (
        <div className="col s6">
          <button onClick={ requestAccess }>Request Access</button>
        </div>
      ) : (
        <div className="col s6"></div>
      )}
    </div>
  );
};

export default Web3Data;
