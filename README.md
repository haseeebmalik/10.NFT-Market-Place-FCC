# 10.NFT-Market-Place-FCC
This is a full stack Nft market place project with nextjs and hardhat.

1. Create a decentralized NFT Marketplace
   1. `listItem`: List NFTs on the marketplace.
   2. `buyItem`: Buy the NFTs.
   3. `cancelItems`: Cancel the listing.
   4. `ipdateListing`: Update Price.
   5. `withdrawProceeds`: Withdraw payments for my bought NFTs.
   6. After writing the contract ,we test it and write script for minting nfts, after it we deploy it on localhost by:
   npx hardhat node
   it will run all files in our deploy folder and deploy all contracts, then run:
   npx hardhat run scripts/mint-and-list.js --network localhost