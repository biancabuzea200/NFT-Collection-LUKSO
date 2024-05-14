import { existsSync, readFileSync, writeFileSync } from "fs";
import { ethers } from "ethers";

const main = () => {
  if (existsSync("assets/metadata.json")) {
    console.log("`metadata.json` already exists in the assets folder.");
    return;
  }

  const firstImage = readFileSync("assets/1.png").toString("hex");
  const secondImage = readFileSync("assets/2.png").toString("hex");
  const iconImage = readFileSync("assets/icon.png").toString("hex");

  const name = "Your collectible name";
  const description = "Description for your collectible";
  const links = [{ title: "Twitter", url: "https://twitter.com/" }];
  const attributes = [
    { key: "Unrevealed", value: true, type: "boolean" },
    { key: "Background", value: "Green", type: "string" },
    { key: "Age", value: 10, type: "number" },
  ];
  const images = [
    [
      {
        width: 1024,
        height: 1024,
        url: "ipfs://QmQTtwSsSyVdGGu88TzSrXibdFqsf2nLRYVJpVaCsRvwxL/1.png",
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
        url: "ipfs://QmPuL2Vehgg9E4UFpJsAeVHKiHfvNXzvmYAjLP7Y6Z7B2K/2.png",
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
      url: "ipfs://ipfs://QmYrhk2m4YHHtwMKZgcUixzYw6VCkXGmV76HZbFCxDUpXT/icon.png",
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
