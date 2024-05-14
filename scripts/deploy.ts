import { ethers } from "hardhat";
import { YourCollectionName__factory } from "../typechain-types";

import { config as LoadEnv } from "dotenv";
LoadEnv();

const { PUBLIC_KEY, COLLECTION_OWNER } = process.env;

const main = async () => {
  if (!PUBLIC_KEY || !COLLECTION_OWNER) return;

  const signer = await ethers.getSigner(PUBLIC_KEY);
  const collection = await new YourCollectionName__factory(signer).deploy(
    "Your collection name",
    "Your collection ticker",
    COLLECTION_OWNER
  );

  console.log(await collection.getAddress());
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
