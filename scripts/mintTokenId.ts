import { readFileSync } from "fs";
import { ethers } from "hardhat";
import { toBeHex } from "ethers";

import { Munchkins__factory } from "../typechain-types";
import { config as LoadEnv } from "dotenv";

LoadEnv();

const { COLLECTION_OWNER } = process.env;

const main = async () => {
  if (!COLLECTION_OWNER) {
    console.log("COLLECTION_OWNER is not set in .env");
    return;
  }

  const signer = await ethers.getSigner(COLLECTION_OWNER);

  const collectionAddress = "0x06910205196C7393c1e37835A0b9F8EEbC7f30a1";
  //const collectionAddress ="0x0B9AAdd3C34DF45207c028bce69704E7FDdCB49d";
  const collection = Munchkins__factory.connect(
    collectionAddress,
    signer
  );

  const to = "0x5bBdacCe1c93175F3953D84E6f2c9e9c2be1C205";
  const tokenId = toBeHex(1, 32);
  const force = false;
  const data = "0x";

  const tx = await collection.mint(to, tokenId, force, data);

  await tx.wait(1);

  console.log(await collection.tokenOwnerOf(tokenId));
};

main();
