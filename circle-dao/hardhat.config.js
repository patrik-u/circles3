/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@eth-optimism/plugins/hardhat/compiler");
require("dotenv").config();

module.exports = {
    solidity: "0.7.6",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        optimismGoerliTestnet: {
            url: "https://goerli.optimism.io",
            accounts: [process.env.ETH_TEST_ACCOUNT_PRIVATE_KEY],
            gasPrice: 15000000,
            ovm: true,
        },
    },
};
