require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/e0b71a5174144b1e8a1c98e40826f0c4",
      accounts: [
        "4036ec838e9db72652077219d9b409c55a249de085acab665f396cc71b0d8990",
      ],
    },
  },
};
