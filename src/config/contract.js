import React from "react";
import ABI from "./abi";
import web3 from "./web3";

const contractAddress = '0x70B07d323801155c18D99e32fbb9B121F32Edd4b';
const mainContract = new web3.eth.Contract(ABI, contractAddress);

export default mainContract;