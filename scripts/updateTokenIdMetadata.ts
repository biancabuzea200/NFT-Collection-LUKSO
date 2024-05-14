import { readFileSync } from "fs";
import { ethers } from "hardhat";
import { toBeHex } from "ethers";
import { YourCollectionName__factory } from "../typechain-types";

import { config as LoadEnv } from "dotenv";
import { ERC725 } from "@erc725/erc725.js";
import LSP4DigitalAssetSchema from "@erc725/erc725.js/schemas/LSP4DigitalAsset.json";

const erc725 = new ERC725(LSP4DigitalAssetSchema);
LoadEnv();

const { COLLECTION_OWNER } = process.env;

const main = async () => {
  if (!COLLECTION_OWNER) return;

  const signer = await ethers.getSigner(COLLECTION_OWNER);

  const url =
    "ipfs://QmV4eQTCVoNjj9jTRVzN7KDWuFAQ19yKiiWS1VWAAPPRLG/metadata.json";
  const json = JSON.parse(readFileSync("assets/metadata.json").toString());

  const encodedMetadataURI = erc725.encodeData([
    {
      keyName: "LSP4Metadata",
      value: {
        url,
        json,
      },
    },
  ]);

  const collectionAddress = "0x0aFD5980A261b71399Be95EAb9Fbf94e2f63245d";
  const tokenId = toBeHex(1, 32);
  const collection = YourCollectionName__factory.connect(
    collectionAddress,
    signer
  );

  const tx = await collection.setDataForTokenId(
    tokenId,
    encodedMetadataURI.keys[0],
    encodedMetadataURI.values[0]
  );

  await tx.wait(1);

  console.log(
    await collection.getDataForTokenId(tokenId, encodedMetadataURI.keys[0])
  );
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
