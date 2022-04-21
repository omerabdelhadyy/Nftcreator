import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Soqrat from "../../../assets/photos/soqrat.png";
import Select from "../../../component/select";
import { TextField, Button } from "@mui/material";
import DrawingCollectible from "../../../json/DrawingCollectible.json";
import metadata from "./metadata.js";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { OpenSeaPort, Network } from "opensea-js";

export default function CreateNFT() {
  const [deployedContract, setDeployedContract] = useState();
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();

  const ipfsAPI = require("ipfs-api");

  const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });

  const INFURA_HTTPS = "https://ipfs.infura.io/ipfs/";

  useEffect(() => {
    loadWeb3();
    // loadBlockchainData();
  }, []);

  const createNFT = async () => {
    download();
  };
  // const provider = await web3Modal.connect();
  // const web3 = new Web3(provider);
  // const signer = provider.getSigner();
  // const providerOptions = {
  //   /* See Provider Options Section */
  // };

  // const web3Modal = new Web3Modal({
  //   network: "mainnet", // optional
  //   cacheProvider: true, // optional
  //   providerOptions, // required
  // });
  const loadWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.web3.currentProvider);
      const userAccount = await web3.eth.getAccounts();
      if (userAccount.length) {
        //user already login in metamask
        console.log("done login");
      } else {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        window.location.reload();
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3");
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    // console.log("networkId", networkId);
    if (networkId !== 4) {
      window.alert("Please switch network to the Rinkeby and refresh the page");
    }
    const networkData = DrawingCollectible?.[networkId];
    // console.log("networkData", DrawingCollectible[networkId]);
    if (networkData) {
      const contract_address = networkData.address;
      const contract = new web3.eth.Contract(
        DrawingCollectible.abi,
        contract_address
      );
      // console.log("contract_address", contract_address);
      await setDeployedContract(contract);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const bal = await web3.eth.getBalance(accounts[0]);
      setBalance(bal);
      contract.methods.name().call(function (err, res) {
        setName(res);
        // window.location.reload();
      });
      contract.methods.symbol().call(function (err, res) {
        setSymbol(res);
      });
      // ;
    } else {
      alert("Wrong NETWORK");
    }
  };
  const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");
  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  });
  const download = async () => {
    // const buyerAddress = "0x123...";
    // const listing = await seaport.createSellOrder({
    //   tokenAddress: "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d", // Decentraland
    //   tokenId:
    //     "115792089237316195423570985008687907832853042650384256231655107562007036952461", // Token ID
    //   accountAddress: "0xCf241E38B01C596a96aF42eE0Aa4BF036ccb133B",
    //   startAmount: 10,
    //   buyerAddress,
    // });
    // let canvas = canvasRef.current.canvasContainer.children[1];
    // let dataUrl = canvas.toDataURL("image/png");
    // const buffer = Buffer(dataUrl.split(",")[1], 'base64');
    // const data = "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B";
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const erc20 = new ethers.Contract(data, DrawingCollectible, provider);
    // console.log(await erc20.name());
    // console.log("buffer");
    // metadata.image = "testtest";
    // console.log("image uploaded to IPFS image URI:" + metadata.image);
    // console.log(metadata);
    // let metadataBuffer = Buffer.from(JSON.stringify(metadata));
    // ipfs?.files?.add?.(metadataBuffer, (error, secondResult) => {
    //   if (secondResult) {
    //     console.log("secondResult", secondResult?.[0].hash);
    //     const tokenURI = INFURA_HTTPS + secondResult?.[0].hash;
    //     console.log("Metadata uploaded to IPFS image as JSON URI:" + tokenURI);
    //     deployedContract.methods
    //       .createCollectible(tokenURI)
    //       .send({ from: account })
    //       .on("transactionHash", (hash) => {
    //         console.log("success, transction hash: ", hash);
    //       });
    //   }
    //   if (error) {
    //     console.log("error", error);
    //   }
    // });
  };

  return (
    <>
      <Button
        onClick={createNFT}
        style={{
          borderRadius: 16,
          fontSize: 25,
          backgroundColor: "#18408D",
          margin: 10,
        }}
        className={style.buttonSave}
        variant="contained"
      >
        Create NFT
      </Button>
      <div className={style.continer}>
        <img src={Soqrat} />
        <Select />
        <TextField
          InputLabelProps={{ style: { fontSize: 35 } }}
          inputProps={{ style: { fontSize: 30, padding: 10 } }}
          style={{ marginTop: 30, fontSize: 40 }}
          rows={6}
          multiline
          className={style.inputText}
          id="outlined-basic"
          label="Text"
          variant="outlined"
        />
      </div>
    </>
  );
}
