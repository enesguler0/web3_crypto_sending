// https://eth-goerli.g.alchemy.com/v2/0Ub5wRIQ6W4yXXjli8jsBks5QpwVjhXc

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/0Ub5wRIQ6W4yXXjli8jsBks5QpwVjhXc",
      accounts: [
        "0898213c64d8c5c04153acdb9631b8e828fbc76d6f7f1b84a64f3ede481a618c",
      ],
    },
  },
};
