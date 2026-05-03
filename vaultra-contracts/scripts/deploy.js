const hre = require("hardhat");

async function main() {
    const Contract = await hre.ethers.getContractFactory("VaultraExecutor");
    const contract = await Contract.deploy();

    await contract.waitForDeployment();

    console.log("Deployed to:", await contract.getAddress());
}

main();