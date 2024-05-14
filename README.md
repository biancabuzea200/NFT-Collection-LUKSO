# Munchkins Collection

A cute collection of Munchkins NFTs.

## Steps

1. npx hardhat compile
2. npx hardhat run scripts/deploy.ts --network lukso_testnet
3. npx hardhat run scripts/generateMetadataJSON.ts --network lukso_testnet
4. npx hardhat run scripts/updateTokenIdMetadata.ts --network lukso_testnet
5. npx hardhat run scripts/minttokenId.ts --network lukso_testnet
