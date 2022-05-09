const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8546");
web3.eth.getAccounts().then(console.log);
const address = "0xAFe10811e87C6Cb61655aa5Cf38280F0a796F08e";
const abi = [
  {
    inputs: [{ internalType: "bytes32", name: "k", type: "bytes32" }],
    name: "getValue",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "v", type: "string" }],
    name: "store",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let contract = new web3.eth.Contract(abi, address);
const tr = { from: "0x350c9229a136736c053b3adc9b6d50a522e9dda4" };
oye("44554323", tr);

async function oye(str, tr) {
  console.log("set:", await setSend(str, tr));
  let ret = await setCall(str);
  console.log("ret:", ret);
  console.log("get", await get(ret, tr));
}

async function get(str) {
  return await contract.methods.getValue(str).call();
}

async function setSend(str, tr) {
  return await contract.methods.store(str).send(tr);
}
async function setCall(str) {
  return await contract.methods.store(str).call();
}

// console.log(web3);
