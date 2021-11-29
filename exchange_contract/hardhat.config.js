require("@nomiclabs/hardhat-waffle");
// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require("@nomiclabs/hardhat-waffle");
require("./tasks/account");
require("./tasks/transfer");
require("./tasks/mint");
require("./tasks/balanceOf");
require("./tasks/approve");
require("./tasks/transferFrom");
require('dotenv').config();

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet_celo: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 44787,
    },
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    },
    local_aurora: {
      url: 'http://localhost:8545',
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 3,
      live: true,
      gasPrice: 50000000000,
      gasMultiplier: 2,
    },
  }
};

