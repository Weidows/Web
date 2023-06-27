const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  let mintTokenNumber = 10;
  let mintPrice = 1000;

  const myTokenContractFactory = await hre.ethers.getContractFactory("MyToken");
  const myTokenContract = await myTokenContractFactory.deploy(
    mintTokenNumber,
    mintPrice
  );
  await myTokenContract.deployed();

  console.log("MyToken address: ", myTokenContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
