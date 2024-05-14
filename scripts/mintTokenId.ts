import { readFileSync } from "fs";
import { ethers } from "hardhat";
import { toBeHex } from "ethers";

import { YourCollectionName__factory } from "../typechain-types";
import { config as LoadEnv } from "dotenv";

LoadEnv();

const { COLLECTION_OWNER } = process.env;

const main = async () => {
  if (!COLLECTION_OWNER) return;

  const signer = await ethers.getSigner(COLLECTION_OWNER);

  const collectionAddress = "0x0aFD5980A261b71399Be95EAb9Fbf94e2f63245d";
  const collection = YourCollectionName__factory.connect(
    collectionAddress,
    signer
  );

  const to = "0x201eA0Cf799181CdC6548D5C7CFE6E95DcdEe0eE";
  const tokenId = toBeHex(1, 32);
  const force = false;
  const data = "0x";

  const tx = await collection.mint(to, tokenId, force, data);

  await tx.wait(1);

  console.log(await collection.tokenOwnerOf(tokenId));
};

main();
