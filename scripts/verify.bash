SELECTED_NETWORK="lukso_testnet" # `lukso_testnet` / `lukso_mainnet`
CONTRACT_ADDRESS="0x3Eb59c7d90f0A6EE95414244464e203Ea276641e"
CONTRACT_PATH="contracts/YourCollectionName.sol:YourCollectionName"

# constructor parameters
COLLECTION_NAME="Your collection name"
COLLECTION_TICKER="Your collection ticker"
COLLECTION_OWNER="0xd3670af0936da66D4ccE09ACb8a359f573Ebb54e"

npx hardhat verify \
  $CONTRACT_ADDRESS \
  --network $SELECTED_NETWORK \
  --contract $CONTRACT_PATH \
  $COLLECTION_NAME \
  $COLLECTION_TICKER \
  $COLLECTION_OWNER 