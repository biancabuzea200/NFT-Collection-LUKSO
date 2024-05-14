import { ethers } from "hardhat";
import { Munchkins__factory } from "../typechain-types";

import { config as LoadEnv } from "dotenv";
LoadEnv();

const { PUBLIC_KEY, COLLECTION_OWNER } = process.env;

const main = async () => {
  if (!PUBLIC_KEY || !COLLECTION_OWNER) return;

  const signer = await ethers.getSigner(PUBLIC_KEY);
  const collection = await new Munchkins__factory(signer).deploy(
    "Munchkins",
    "MNK",
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
