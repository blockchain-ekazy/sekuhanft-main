import React, { useState, useEffect } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

function Abtn() {
  const [WAddress, setWAddress] = useState("CONNECT");
  useEffect(async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      metaMaskAccount = metaMaskAccount;
      metaMaskAccount =
        metaMaskAccount.substring(0, 5) +
        "........" +
        metaMaskAccount.substring(
          metaMaskAccount.length - 5,
          metaMaskAccount.length
        );

      setWAddress(metaMaskAccount);
      setLBtn({
        display: "none",
      });
    }

    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      }
    }
  }, []);

  const [LogBtn, setLogBtn] = useState("Logout");
  const [LBtn, setLBtn] = useState({ display :"inline " });

  const Logout = async () => {
    if (LogBtn == "Logout") {
      setLBtn({
        display: "none",
      });
      setWAddress("Connect");
    }
  };

  const Login = async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      metaMaskAccount = metaMaskAccount;
      metaMaskAccount =
        metaMaskAccount.substring(0, 5) +
        "........" +
        metaMaskAccount.substring(
          metaMaskAccount.length - 5,
          metaMaskAccount.length
        );

      setWAddress(metaMaskAccount);
      setLBtn({
        display: "inline",
      });
    }
  };

  return (
    <>
      <button className="btn BtnCntHead" onClick={Login}>
        {WAddress}
      </button>
      <button className="btn BtnCntHead ml-2" style={LBtn} onClick={Logout}>
        {LogBtn}
      </button>
    </>
  );
}

export default Abtn;
