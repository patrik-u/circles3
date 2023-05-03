const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const CircleDAO = await hre.ethers.getContractFactory("CircleDAO");
    const circleDAO = await CircleDAO.deploy();

    await circleDAO.deployed();

    console.log("CircleDAO deployed to:", circleDAO.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
