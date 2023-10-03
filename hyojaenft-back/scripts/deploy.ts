import { ethers } from "hardhat";

async function main() {
  const HyojaeNFTFactory = await ethers.getContractFactory("HyojaeNFT");
  const hyojaeNFT = await HyojaeNFTFactory.deploy();
  
  console.log("HyojaeNFT deployed to:", hyojaeNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });