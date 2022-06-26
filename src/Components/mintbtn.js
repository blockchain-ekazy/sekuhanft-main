import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const REACT_APP_CONTRACT_ADDRESS = "0x38e6E1F014cb08e1A01d4C448804061578dF5D9a";
const SELECTEDNETWORK = "1";
const SELECTEDNETWORKNAME = "Ethereum Mainnet";
const nftquantity = 500;

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [walletConnected, setWalletConnected] = useState(0);

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      // setProvider(true);
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

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

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          console.log("Sold out");
          return;
        }

        let price = await ct.methods.getPrice().call(); //await ct.methods.getPrice().call();

        let alreadyMinted = await ct.methods.balanceOf(metaMaskAccount).call();
        let maxa = await ct.methods.MAX_PER_Address().call();

        if (Number(alreadyMinted) + Number(quantity) <= maxa) {
          await ct.methods.mint(quantity).send({
            from: metaMaskAccount,
            value: price * quantity,
          });
        } else {
          setErrorMsg("Already Minted Max");
        }

        setQuantity(1);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        const WAddress = metaMaskAccount;
        metaMaskAccount =
          metaMaskAccount.substring(0, 15) +
          "........" +
          metaMaskAccount.substring(
            metaMaskAccount.length - 10,
            metaMaskAccount.length
          );

        const Status = await ct.methods.getStatus().call();
        if (Status == 0) {
          setErrorMsg("Sale Not started");
        } else if (Status == 1) {
        } else if (Status == 2) {
          setWalletConnected(1);
        }
      }
    }
  }

  return (
    <div className="BtnDiv ">
      {/* <h6 className="text-center">{userAddress}</h6> */}
      {!errormsg ? (
        <div className="row align-items-center">
           <div className="col-sm-12 my-3">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="count btn mx-4 "
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="quantity text-dark"> {quantity} </span>
                  <button
                    className="count btn mx-3 "
                    onClick={() => setQuantity(quantity + 1)}
                    // disabled={quantity == maxallowed}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
          {walletConnected == 0 ? (
            <div className="col-12">
              <h4
                onClick={() => {
                  loadWeb3();
                }}
                className="text-white text-center d-block w-100"
              >
                <a
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "#d5ac1e",
                    padding: "5px 20px",
                    borderRadius: "6px",
                  }}
                >
                  Mint Now
                </a>
              </h4>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-sm-12 my-3">
                {/* <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="count btn mx-4 "
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button
                    className="count btn mx-3 "
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity == maxallowed}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div> */}
                {/* <span className="quantity text-dark"> 1 </span> */}
              </div>
              {/* <div className="col-sm-12 pt-3 pt-sm-0">
                <h4
                  type="button"
                  className="connectbtn text-white d-block text-center"
                  onClick={() => loadWeb3()}
                >
                  <a
                    style={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      color: "#d5ac1e",
                      padding: "5px 20px",
                      borderRadius: "6px",
                    }}
                  >
                    Mint 
                  </a>
                </h4>
              </div> */}
            </>
          ) : (
            ""
          )}
          {/* <p className="mt-3 text-white mx-auto mb-0 text-center">{nftquantity-totalSupply}/{nftquantity} Available</p> */}
        </div>
      ) : (
        <h5 className="mt-2 supplytext text-center">
          <b>{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn;
