const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("MyToken", function () {
  async function deployFixture() {
    let mintTokenNumber = 10;
    let mintPrice = 1000;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(mintTokenNumber, mintPrice);

    return { myToken, mintPrice, mintTokenNumber, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { myToken, owner } = await loadFixture(deployFixture);

      expect(await myToken.owner()).to.equal(owner.address);
    });

    it("Should set the right mintPrice", async function () {
      const { myToken, mintPrice } = await loadFixture(deployFixture);

      expect(await myToken.mintPrice()).to.equal(mintPrice);
    });
  });

  describe("Mint", function () {
    it("Should mint the right token number to mint account", async function () {
      const { myToken, mintPrice, mintTokenNumber, owner, otherAccount } =
        await loadFixture(deployFixture);

      await expect(
        myToken
          .connect(otherAccount)
          .mint(otherAccount.address, { value: mintPrice })
      )
        .to.changeEtherBalance(myToken.address, mintPrice)
        .to.changeEtherBalance(otherAccount.address, -mintPrice)
        .to.changeTokenBalance(myToken, otherAccount.address, mintTokenNumber);
    });
  });
});
