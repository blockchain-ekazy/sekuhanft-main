import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

import LoadingImg from "./Imgs/Loading.gif";
require("dotenv").config();

const REACT_APP_CONTRACT_ADDRESS = "0x38e6E1F014cb08e1A01d4C448804061578dF5D9a";
const SELECTEDNETWORK = "1";
const SELECTEDNETWORKNAME = "Ethereum Mainnet";
const nftquantity = 500;

function Mintbtn2() {
  const [errormsg, setErrorMsg] = useState(false);
  const [items, setItems] = useState(
    <img className="d-block mx-auto" src={LoadingImg} />
  );

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        let b = await ct.methods.balanceOf(metaMaskAccount).call();

        let t = await ct.methods.totalSupply().call();

        console.log(t);
        console.log(b);

        let ListMinted = [];

        for (let i = 1; i <= t && ListMinted.length <= b; i++) {
          if ((await ct.methods.ownerOf(i).call()) == metaMaskAccount)
            ListMinted.push(
              <div className="col-md-3">
                <a
                  href={
                    "https://opensea.io/assets/ethereum/0x38e6e1f014cb08e1a01d4c448804061578df5d9a/" +
                    i
                  }
                  target="_blank"
                >
                  <img
                    className="w-100 "
                    src={
                      "https://nft.sekuya.io/ultrarare/collection/" + i + ".png"
                    }
                  />
                </a>
              </div>
            );
        }
        if (ListMinted.length == 0)
          setItems(
            <h4 className="text-center col-12 text-white">Collection Empty</h4>
          );
        else setItems(ListMinted);

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("All NFTs minted, Sale has ended");
        }
      } else {
        // setProvider(false);
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else {
      setErrorMsg(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      // setProvider(false);
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
      if (ethereum) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      } else {
        setErrorMsg("Please install MetaMask!");
        // setProvider(false);
      }
    }
  }, []);

  return (
    <div className="BtnDiv container">
      {/* <h6 className="text-center">{userAddress}</h6> */}
      {!errormsg ? (
        <div className="row align-items-center">{items}</div>
      ) : (
        <h5 className="mt-2 supplytext text-center">
          <b>{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn2;
