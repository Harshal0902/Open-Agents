const axios = require("axios");
const { ethers } = require("ethers");

const UNISWAP_API = "https://api.uniswap.org/v1/quote";

async function getQuote({
    tokenIn,
    tokenOut,
    amount,
    chainId = 11155111, // Sepolia
}) {
    try {
        const res = await axios.get(UNISWAP_API, {
            params: {
                tokenIn,
                tokenOut,
                amount,
                type: "exactIn",
                chainId,
            },
            headers: {
                "x-api-key": process.env.UNISWAP_API_KEY,
            },
        });

        return res.data;
    } catch (err) {
        console.error("Uniswap Quote Error:", err.response?.data || err.message);
        throw err;
    }
}

async function buildSwapTx({
    userAddress,
    tokenIn,
    tokenOut,
    amount,
    slippage = 0.5,
}) {
    const quote = await getQuote({
        tokenIn,
        tokenOut,
        amount,
    });

    const tx = {
        to: quote.to,
        data: quote.data,
        value: quote.value || "0",
        from: userAddress,
    };

    return {
        tx,
        quote,
    };
}

async function createSwapPlan(planText, userAddress) {
    const amount = ethers.parseUnits("2000", 6);

    const USDC = "0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
    const WETH = "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2";

    const { tx, quote } = await buildSwapTx({
        userAddress,
        tokenIn: USDC,
        tokenOut: WETH,
        amount: amount.toString(),
    });

    return {
        type: "swap",
        description: "Swap 2000 USDC → ETH",
        tx,
        expectedOut: quote.amountOut,
    };
}

module.exports = {
    getQuote,
    buildSwapTx,
    createSwapPlan,
};
