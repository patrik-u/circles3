const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CircleDAO", function () {
    let CircleDAO;
    let circleDAO;

    beforeEach(async function () {
        CircleDAO = await ethers.getContractFactory("CircleDAO");
        circleDAO = await CircleDAO.deploy();
        await circleDAO.deployed();
    });

    it("Should create a new circle", async function () {
        const data = '{"name": "Test Circle", "description": "A test circle."}';

        let result = await circleDAO.createCircle(data);

        // Wait until the transaction is mined
        let receipt = await result.wait();

        // Find CircleCreated event
        const event = receipt.events.find((e) => e.event === "CircleCreated");

        // Get the circle's DID from the event
        const { did } = event.args;

        const circle = await circleDAO.getCircle(did);
        expect(circle.data).to.equal(data);
    });

    // You can add more tests here to test additional functionality
});
