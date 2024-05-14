import { existsSync, readFileSync, writeFileSync } from "fs";
import { ethers } from "ethers";

const main = () => {
  if (existsSync("assets/metadata.json")) {
    console.log("`metadata.json` already exists in the assets folder.");
    return;
  }

  const firstImage = readFileSync("assets/Butter.png").toString("hex");
  const secondImage = readFileSync("assets/Sprinkle.png").toString("hex");
  const iconImage = readFileSync("assets/icon.png").toString("hex");

  const name = "Your collectible name";
  const description = "Description for your collectible";
  const links = [{ title: "Twitter", url: "https://twitter.com/" }];
  const attributes = [
    { key: "Unrevealed", value: true, type: "boolean" },
    { key: "Background", value: "Yellow", type: "string" },
    { key: "Age", value: 10, type: "number" },
  ];
  const images = [
    [
      {
        width: 1024,
        height: 1024,
        url: "ipfs://QmVfYb9D6x5hNuAaMa1qmoS2LmGi9Z78B1JKKaMyedv7wv/Butter.png",
        verification: {
          method: "keccak256(bytes)",
          hash: ethers.keccak256(`0x${firstImage}`),
        },
      },
    ],
    [
      {
        width: 1024,
        height: 1024,
        url: "ipfs://QmZR5P4o322gTtAxsbt2gm93e7bYqBhnjaMog4HnjYmAFt/Sprinkle.png",
        verification: {
          method: "keccak256(bytes)",
          hash: ethers.keccak256(`0x${secondImage}`),
        },
      },
    ],
  ];
  const icon = [
    {
      width: 1024,
      height: 1024,
      url: "ipfs://QmPS3n3xe5gQsGpUnpaYWvzug44JknBZbUv6cv8yKJ7Gsi/icon.png",
      verification: {
        method: "keccak256(bytes)",
        hash: ethers.keccak256(`0x${iconImage}`),
      },
    },
  ];

  const json = {
    LSP4Metadata: {
      name,
      description,
      links,
      attributes,
      images,
      icon,
      assets: [],
    },
  };

  writeFileSync("assets/metadata.json", JSON.stringify(json));
};

main();
