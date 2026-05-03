const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;

const abi = [
    "function executeAction(string memory action) external",
];

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function execute(plan) {
    const tx = await contract.executeAction(plan);
    await tx.wait();

    return tx.hash;
}

module.exports = { execute };