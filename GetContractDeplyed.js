const Web3 = require('web3');
const contract = require('@truffle/contract');

const ERC20Json = require('./ERC20.json');
const NewContractWatcherJson = require('./NewContractWatcher.json');

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');

const ERC20 = contract(ERC20Json);
ERC20.setProvider(web3.currentProvider);

const NewContractWatcher = contract(NewContractWatcherJson);
NewContractWatcher.setProvider(web3.currentProvider);

async function getNewContractAddress() {
  const newContractWatcher = await NewContractWatcher.deployed();
  const newContractAddress = await newContractWatcher.newContractAddress();
  return newContractAddress;
}

getNewContractAddress().then(console.log);
