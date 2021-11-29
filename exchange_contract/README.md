# forart exchange contract
## overview
The exchange is completed in cooperation with
on-chain and off-chain for gas efficiency. The whole process is as follows:

The seller sign a order that describe the information for sale about the NFT, the order and signature will be save off-chain. Then the sale will be showed on our website.
the buyer also need to sign a order when select the NFT to purchase. Then the signs and orders of buyer and seller will be upload to exchange contract, and the transation will be perform on on-chain.
## Installation
```
echo "WALLET_PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY_HERE" >> .env
yarn install
```