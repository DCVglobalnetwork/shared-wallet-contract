require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    myQuickNode: {
      url: "https://crimson-falling-shard.ethereum-goerli.quiknode.pro/e6845dfdba4bbee61e68429ef113982e329ad027/",
      accounts: [
        "a5062d9972dddff2e4f88ffa2b294da0f73f3876cafbc9a3c5217d2f3932e9d7",
      ],
    },
  },
  solidity: "0.8.19",
};